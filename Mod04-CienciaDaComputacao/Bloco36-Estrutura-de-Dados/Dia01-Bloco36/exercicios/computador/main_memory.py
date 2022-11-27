class MainMemory:
    def __init__(self):
        self.loaded_memory = []
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        if type(index) != int:
            return 0

        if index in self.loaded_memory:
            return self.loaded_memory[index]
        else:
            return 0

    def clean(self):
        self.loaded_memory = []
