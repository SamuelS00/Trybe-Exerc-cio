from pymongo import MongoClient


def cal_published_books_by_categories():
    with MongoClient() as client:
        db = client.library

        published_books = {}

        for book in db.books.find({"status": "PUBLISH"}):
            for category in book["categories"]:
                if category in published_books:
                    published_books[category] += 1
                else:
                    published_books[category] = 1

        published_books = sorted(
            published_books.items(), key=lambda kv: kv[1], reverse=True
        )

        for category, quantity in published_books:
            print(category, quantity)


# with MongoClient() as client:
#     db = client.library
#     pipelines = [
#         {"$match": {"status": "PUBLISH"}},
#         {"$unwind": "$categories"},
#         {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
#         {"$sort": {"count": -1}}
#     ]
#     for category in db.books.aggregate(pipelines):
#         print(category["_id"], category["count"], sep=": ")


cal_published_books_by_categories()
