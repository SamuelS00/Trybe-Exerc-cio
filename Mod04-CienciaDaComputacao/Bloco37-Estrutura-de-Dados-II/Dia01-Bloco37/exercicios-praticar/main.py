from number_most_frequent import count
from initial_letter import screening
from intersection import intersection


# exercise 1
nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]

print(count(nums))


# exercise 2
text = ["João", "Maria", "José", "Ana", "Guilherme", "Caio"]

for key, value in screening(text).items():
    print(f"{key}:{value}")


# exercise 3
listA = [1, 2, 3, 4, 5, 6]
listB = [4, 5, 6, 7, 8, 9]


print(intersection(listA, listB))
