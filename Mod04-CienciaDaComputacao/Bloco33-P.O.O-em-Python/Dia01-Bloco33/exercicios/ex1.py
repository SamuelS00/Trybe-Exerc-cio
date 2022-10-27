class Tv:
    def __init__(self, tamanho):
        self._tamanho = tamanho
        self._volume = 50
        self._canal = 1
        self._ligada = False

    def aumentar_volume(self):
        if self._volume > 98:
            self._volume += 1

    def diminuir_volume(self):
        if self._volume > 1:
            self._volume -= 1

    def modificar_canal(self, new_canal):
        if new_canal < 0 or new_canal > 99:
            raise ValueError

        self._canal = new_canal

    def ligar_desligar(self):
        if self._ligada is True:
            self._ligada = False
        else:
            self._ligada = True

    def __str__(self):
        return f"""
           Tamanho: {self._tamanho}
           Volume: {self._volume}
           ON/OFF: {self._ligada}
           CANAL: {self._canal}
        """


television = Tv(39)

print(television.ligar_desligar())
print(television.modificar_canal(39))
print(television.aumentar_volume())
print(television)
