from set import Set


def main():
    set_difference_a = Set()
    set_difference_b = Set()
    set_difference_c = Set()

    for i in range(2, 7):
        set_difference_a.add(i)

    for i in range(4, 9):
        set_difference_b.add(i)

    for i in range(6, 14):
        set_difference_c.add(i)

    print(set_difference_a)
    print(set_difference_b)
    print(set_difference_c)

    new_set = set_difference_a.difference([set_difference_b, set_difference_c])

    print(new_set)


if __name__ == "__main__":
    main()
