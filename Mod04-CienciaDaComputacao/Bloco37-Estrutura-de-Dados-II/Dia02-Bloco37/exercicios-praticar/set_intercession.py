from set import Set


def main():
    # exercise 5

    set_intercession_a = Set()
    set_intercession_b = Set()

    for i in range(1, 6):
        if i <= 3:
            set_intercession_a.add(i)
        else:
            set_intercession_b.add(i)

    set_intercession_b.add(3)

    new_set_intercession = set_intercession_a.intersection(set_intercession_b)
    print(new_set_intercession)


if __name__ == "__main__":
    main()
