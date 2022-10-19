import sys

values = input("Digite valores seperados por um espaço em branco: ")

result = 0

for num in values.split(" "):
    if not num.isdigit():
        print(
            f"Erro ao somar valores, {num} é um valor inválido”",
            file=sys.stderr)
    else:
        result += int(num)


print(result)
