from set import Set


def main():
    # exercise 3
    set_is_in = Set()

    for num in [1, 2, 3]:
        set_is_in.add(num)

    print(set_is_in.__contains__(0))


if __name__ == "__main__":
    main()
