import time


def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


meu_array = [1, 2, 3, 4, 5]  # 0.0003960132598876953
meu_array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]  # 0.002688884735107422

ini = time.time()
multiply_arrays(meu_array2, meu_array2)
fim = time.time()

print(fim-ini)
