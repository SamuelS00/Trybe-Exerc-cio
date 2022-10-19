import random

myList = [
    "Neymar",
    "Ronaldo",
    "Messi",
    "Rústico",
    "lewandowski",
]

choice = random.choice(myList)

scrambled_word = "".join(random.sample(choice, len(choice)))

attempts = 3

while attempts > 0:
    attempts -= 1

    print(scrambled_word)

    word = input("Qual é o jogador: ")

    if word == choice:
        print(f"Congratulations, you got it right. the player was the {word}")
        break
    else:
        print(f"Tente novamente, você ainda tem {attempts} tentativas.")
        break
