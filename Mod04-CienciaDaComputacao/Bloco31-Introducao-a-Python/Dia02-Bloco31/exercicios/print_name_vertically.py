name = input("Qual o seu nome? ")

count = len(name)

for char in name:
    print(name[slice(count)])
    count -= 1
