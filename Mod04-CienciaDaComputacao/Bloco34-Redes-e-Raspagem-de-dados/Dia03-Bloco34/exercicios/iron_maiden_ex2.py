from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options


options = Options()

options.add_argument("--headless")

chrome = webdriver.Chrome(options=options)


def scrape(url):
    chrome.get(url)

    paragraphs = chrome.find_elements(By.TAG_NAME, "p")

    list_paragraphs_text = [p.text for p in paragraphs]

    print(list_paragraphs_text)


scrape(
    "https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"
)
