restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

min_rating = 3.0
filtered_restaurants = [r for r in restaurants if r["nota"] > min_rating]

print(filtered_restaurants)