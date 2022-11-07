from pymongo import MongoClient


def list_books_by_category(category):
    with MongoClient() as client:
        db = client.library
        for book in db.books.find(
            {"categories": category}, projection=["title"]
        ):
            print(book["title"])


print(list_books_by_category("Software Engineering"))
