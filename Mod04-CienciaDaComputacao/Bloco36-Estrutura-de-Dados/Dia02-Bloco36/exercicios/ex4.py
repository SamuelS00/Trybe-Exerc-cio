entradas = [1, 2, 3]
saídas = [3, 2, 7]
instante_buscado = 1
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


def get_people_in_the_library(entries, exits, instant):
    students_count = 0

    for i in range(0, len(entries)):
        if instant >= entries[i] and instant <= exits[i]:
            students_count += 1

    return students_count


# complexidade de tempo: O(n)
# complexidade de espaço: 1


print(get_people_in_the_library(entradas, saídas, instante_buscado))
