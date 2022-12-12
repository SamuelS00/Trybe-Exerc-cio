from set import Set


def main():
    set_subset_a = Set()
    set_subset_b = Set()

    for i in range(2, 4):
        set_subset_a.add(i)

    for i in range(1, 7):
        set_subset_b.add(i)

    print(set_subset_a.is_superset(set_subset_b))


if __name__ == "__main__":
    main()
