animals = ["zebra", "macaco", "elefante", "arara", "javali"]


def bubble_sort(list, iteration=0):
    if iteration == 0:
        iteration = len(list) - 1

    for ordered_elements in range(iteration):
        for animal in range(0, iteration - ordered_elements):
            if list[animal] > list[animal + 1]:
                curr_animal = list[animal]
                list[animal] = list[animal + 1]
                list[animal + 1] = curr_animal

    return list


# before: ["zebra", "macaco", "elefante", "arara", "javali"]

print(bubble_sort(animals, 2))

# after: ['elefante', 'macaco', 'zebra', 'arara', 'javali']
