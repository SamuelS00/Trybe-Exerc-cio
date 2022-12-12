class Set:
    def __init__(self):
        self.data = [False for i in range(0, 1001)]

    def __str__(self):
        return str({i for i in range(0, 1001) if self.data[i] is True})

    def __contains__(self, value):
        return self.data[value] is True

    def get_all(self):
        return [i for i in range(0, 1001) if self.data[i] is True]

    def add(self, value):
        if value > 1000:
            raise ValueError

        self.data[value] = True

    def union(self, setB):
        new_set = Set()

        for item in self.get_all():
            new_set.add(item)

        for item in setB.get_all():
            new_set.add(item)

        return new_set

    def intersection(self, setB):
        new_set = Set()

        set_a = self.get_all()
        set_b = setB.get_all()

        for item in set_a:
            if item in set_b:
                new_set.add(item)

        return new_set
