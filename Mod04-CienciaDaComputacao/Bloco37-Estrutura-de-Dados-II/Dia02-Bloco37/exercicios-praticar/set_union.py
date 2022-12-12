from set import Set


def main():
    # exercise 4

    set_union_a = Set()
    set_union_b = Set()

    for i in range(1, 21):
        if i <= 10:
            set_union_a.add(i)
        else:
            set_union_b.add(i)

    set_union_b.add(10)

    new_set_union = set_union_a.union(set_union_b)
    print(new_set_union)


if __name__ == "__main__":
    main()
