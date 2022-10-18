import math


def number_of_paint_cans(wall_size: int):
    can_price = 80
    required_liters = wall_size / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


print(number_of_paint_cans(22))
