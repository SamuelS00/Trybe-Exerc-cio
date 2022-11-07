from parsel import Selector
from pymongo import MongoClient

# import bson
# from bson.codec_options import CodecOptions

import requests
import time


def extract_club_links(URL_BASE):
    response = requests.get(
        URL_BASE, headers={"User-agent": "Mozilla", "Accept": "text/html"}
    )

    selector = Selector(text=response.text)

    list_club_links = selector.css(".no-border-links a::attr(href)").getall()

    list_club_links = [link for link in list_club_links if link != "#"]

    return list_club_links


def get_data_club(url_base):
    try:
        response = requests.get(
            url_base,
            headers={"User-agent": "Mozilla", "Accept": "text/html"},
            timeout=2,
        )
    except requests.ReadTimeout:
        response = requests.get(
            url_base,
            headers={"User-agent": "Mozilla", "Accept": "text/html"},
            timeout=2,
        )
    finally:
        print(response.status_code)

    selector = Selector(text=response.text)

    club_name = (
        selector.css(".data-header .data-header__headline-container h1::text")
        .get()
        .strip()
    )

    club_stadium = selector.css(
        ".data-header__details .data-header__items .data-header__label .data-header__content a::text"
    ).getall()[2]

    return {"name": club_name, "stadium": club_stadium}


def get_clubs_from_championship(list_club_links):
    url_base = "https://www.transfermarkt.com.br"
    club_list = []

    for link in list_club_links:
        club = get_data_club(url_base + link)
        club_list.append(club)
        time.sleep(6)

    # club_list = [
    #     {"name": "SE Palmeiras", "stadium": "Allianz Parque"},
    #     {"name": "Avaí FC (SC)", "stadium": "Estádio Aderbal Ramos da Silva"}
    # ]

    with MongoClient("mongodb://localhost:27017/") as client:
        db = client.transfermarket

        # data = [bson.BSON.encode(team) for team in club_list]

        db.teams.insert_many(club_list)


# extrai link que leva para page dos clubes.
list_club_links = extract_club_links(
    "https://www.transfermarkt.com.br/campeonato-brasileiro-serie-a/startseite/wettbewerb/BRA1"
)

# extrai informação do clube a patir do link.
print(
    get_data_club(
        "/se-palmeiras-sao-paulo/startseite/verein/1023/saison_id/2021"
    )
)

# guarda informações do nome e estadio do clube.
print(get_clubs_from_championship(list_club_links))
