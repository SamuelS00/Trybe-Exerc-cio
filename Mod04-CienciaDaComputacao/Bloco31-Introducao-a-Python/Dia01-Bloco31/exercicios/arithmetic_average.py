def arithmetic_avarage(list: list):
    listLen = len(list)
    result = 0
    for num in list:
        result += num

    return result / listLen


print(arithmetic_avarage([2, 4, 6, 8, 10]))
