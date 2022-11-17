def recursiva_sequencial(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + recursiva_sequencial(n - 1)
    else:
        return recursiva_sequencial(n - 1)


print(recursiva_sequencial(6))
