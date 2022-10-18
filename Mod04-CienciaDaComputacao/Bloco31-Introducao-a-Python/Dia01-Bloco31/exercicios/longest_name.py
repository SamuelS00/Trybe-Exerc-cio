def longest_name(name_list: list):
    name_list.sort(reverse=True, key=len)

    return name_list[0]


print(longest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
