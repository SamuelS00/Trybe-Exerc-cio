from abc import ABC, abstractmethod


class TaxStrategy(ABC):
    @classmethod
    @abstractmethod
    def calcular(value):
        return NotImplementedError


class IssStrategy(TaxStrategy):
    def calcular(value):
        return value * 0.1


class IcmsStrategy(TaxStrategy):
    def calcular(value):
        return value * 0.06


class PisStrategy(TaxStrategy):
    def calcular(value):
        return value * 0.0065


class CofinsStrategy(TaxStrategy):
    def calcular(value):
        return value * 0.03


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, strategy: TaxStrategy):
        return strategy.calcular(self.valor)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(IssStrategy)}")
print(f"ICMS: {orcamento.calcular_imposto(IcmsStrategy)}")
print(f"PIS: {orcamento.calcular_imposto(PisStrategy)}")
print(f"CONFINS: {orcamento.calcular_imposto(CofinsStrategy)}")
