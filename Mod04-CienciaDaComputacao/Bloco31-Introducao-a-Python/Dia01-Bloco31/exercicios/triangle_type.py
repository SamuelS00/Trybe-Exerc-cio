def triangle_type(a: int, b: int, c: int):
    is_triangle = (
            a + b > c and
            b + c > a and
            a + c > b
    )
    if not is_triangle:
        return "não é triângulo"
    elif a == b == c:
        return "equilátero"
    elif a == b or b == c or a == c:
        return "isósceles"
    else:
        return "escaleno"


print(triangle_type(2, 6, 1))
print(triangle_type(5, 5, 5))
print(triangle_type(4, 2, 4))
print(triangle_type(4, 6, 5))
