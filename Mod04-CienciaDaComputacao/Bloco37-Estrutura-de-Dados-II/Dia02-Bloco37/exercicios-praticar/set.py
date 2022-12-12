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

    def difference(self, sets):
        new_set = Set()
        set_a = self.get_all()

        values = []

        for set in sets:
            values += set.get_all()

        for value in set_a:
            if value not in values:
                new_set.add(value)

        return new_set

    def is_subset(self, setB):
        set_a = self.get_all()
        set_b = setB.get_all()

        response = True

        for value in set_a:
            if value not in set_b:
                response = False
                break

        return response

    def is_superset(self, setB):
        set_a = self.get_all()
        set_b = setB.get_all()

        response = True

        for value in set_b:
            if value not in set_a:
                response = False
                break

        return response
