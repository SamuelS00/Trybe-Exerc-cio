from collections import ChainMap


time = ChainMap({"name": "smith"}, {"year": "29"}, {"office": "Instructor"})

print(time)
print(time["name"])
print(time["year"])
print(time["office"])
