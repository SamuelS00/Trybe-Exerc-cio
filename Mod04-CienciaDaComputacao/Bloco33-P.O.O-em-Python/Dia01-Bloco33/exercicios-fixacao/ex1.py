class Home_applice:
    def __init__(self, cor, potencia, voltagem, preco, nome):
        self.nome = nome
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__amperagem_atual_no_motor = 0


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.home_applice = None

    def comprar_home_applice(self, home_applice: Home_applice):
        if home_applice.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= home_applice.preco
            self.home_applice = home_applice

    def __str__(self):
        if self.home_applice:
            return "Possui um eletrodoméstico"

        return "Não possui"


blue_refrigerator = Home_applice("Azul", "5000", "127", 3000, "geladeira")
blue_blender = Home_applice("Azul", "110", "127", 200, "liquidificador")


pessoa_cozinheira = Pessoa("Jacquin", 5000)
pessoa_cozinheira.comprar_home_applice(blue_refrigerator)

print(pessoa_cozinheira)
