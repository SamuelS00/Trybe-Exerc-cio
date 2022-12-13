from set import Set


def main():
    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    students = Set().create(estudantes)
    entregues_one = Set().create(lista1_entregues)
    entregues_two = Set().create(lista2_entregues)

    delivered_both = entregues_one.intersection(entregues_two)

    print(
        "still not submitted list 1: ",
        students.difference([entregues_one])
    )
    print(
        "who already delivered the two lists: ",
        delivered_both,
    )

    print(
        "Who has submitted either of the two lists: ",
        entregues_one.union(entregues_two),
    )

    print(
        "Who hasn't turned in any of the lists yet?: ",
        students.difference([entregues_one.union(entregues_two)]),
    )


if __name__ == "__main__":
    main()
