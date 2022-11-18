arr = [True, True, False, False, False, False, False]  # saída 2


def commit_error_index(array, target):
    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:

        middle_index = (high_index + low_index) // 2

        if array[middle_index] is target:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    return low_index


print(commit_error_index(arr, False))
