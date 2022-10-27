# code smell, esse code smell é chamado de switch statement
# sempre que forem adicionados novos gráficos ele ficará ainda
# maior e consequentemente custoso para realizar a manutenção
from abc import ABC, abstractmethod


class Grafico:
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self, tipo_de_grafico):
        if tipo_de_grafico == "GraficoBarras":
            self.__desenhar_grafico_barras()

        if tipo_de_grafico == "GraficoRadar":
            self.__desenhar_grafico_radar()

        if tipo_de_grafico == "GraficoPizza":
            self.__desenhar_grafico_pizza()

    def __desenhar_grafico_barras(self):
        print("Lógica para gráfico de barras")

    def __desenhar_grafico_radar(self):
        print("Lógica para gráfico radar")

    def __desenhar_grafico_pizza(self):
        print("Lógica para gráfico de Pizza")


grafico_1 = Grafico([1, 2])
grafico_1.desenhar("GraficoRadar")


# a solução para esse code smell: Polimorfismo!!!

class Grafico(ABC):
    @abstractmethod
    def desenhar(self):
        raise NotImplementedError


class GraficoBarras(Grafico):
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico de barras")


class GraficoRadar(Grafico):
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico radar")


class GraficoPizza(Grafico):
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico de Pizza")


grafico_1 = GraficoRadar([1, 2])
grafico_1.desenhar()
