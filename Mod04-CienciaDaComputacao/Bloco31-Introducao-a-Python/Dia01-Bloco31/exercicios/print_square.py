def print_square(n: int):
    column, row = 0, 0
    while column < n:
        column += 1
        while row < n:
            row += 1
            asterisk = '*' * n
            print(asterisk)


print_square(5)
