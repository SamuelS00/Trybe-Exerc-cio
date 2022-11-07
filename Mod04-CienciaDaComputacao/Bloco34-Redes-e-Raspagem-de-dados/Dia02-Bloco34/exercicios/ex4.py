from parsel import Selector
import requests


URL_BASE = (
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)

response = requests.get(URL_BASE)
selector = Selector(text=response.text)

title = selector.css(".product_main h1::text").get()
price = selector.css(".price_color::text").re(r"£\d+\.\d{2}")[0]
description = selector.css("#product_description ~ p::text").get()
cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()
stock_quantity = selector.css(".product_main .availability::text").re(r"\d")[0]

suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

print(title, price, description, cover, stock_quantity, sep=",")
