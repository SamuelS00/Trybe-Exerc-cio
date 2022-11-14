from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options


options = Options()

options.add_argument("--headless")

chrome = webdriver.Chrome(options=options)


def scrape(url):
    chrome.get(url)

    quote = chrome.find_element(By.CLASS_NAME, "text").get_attribute(
        "innerHTML"
    )

    print(quote)


scrape("https://quotes.toscrape.com/")
