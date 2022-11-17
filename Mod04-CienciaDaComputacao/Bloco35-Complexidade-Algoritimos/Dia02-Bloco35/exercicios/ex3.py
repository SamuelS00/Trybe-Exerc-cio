def higher_number(values, length, i):
    if length == 0:
        return values[i]
    else:
        if values[length - 1] > values[i]:
            return higher_number(values, length - 1, length - 1)
        else:
            return higher_number(values, length - 1, i)


print(higher_number([1, 2, 3, 4, 3, 2, 1], 7, 0))
