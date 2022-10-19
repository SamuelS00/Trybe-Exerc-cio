def fizz_buzz(n: int):

    fizz_buzz_list = []

    for num in range(1, n + 1):
        if num % 3 == 0 and num % 5 == 0:
            fizz_buzz_list.append('Fizzbuzz')
        elif num % 3 == 0:
            fizz_buzz_list.append('Fizz')
        elif num % 5 == 0:
            fizz_buzz_list.append('Buzz')
        else:
            fizz_buzz_list.append(num)

    print(fizz_buzz_list)


fizz_buzz(10)
