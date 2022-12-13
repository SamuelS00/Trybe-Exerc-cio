from multiset import Multiset

print(Multiset())
print(Multiset("aeiou"))
print(Multiset({"a": 1, "e": 2, "i": 3, "o": 4, "u": 5}))

conjunto_consoantes = set("qwrty")
print("conjuntos: ", conjunto_consoantes)

conjunto_alfabeto = Multiset("aeiou") + conjunto_consoantes
print("novo conjunto: ", conjunto_alfabeto)
print(type(conjunto_alfabeto))


vogais = ("a", "b", "i", "o", "u")
