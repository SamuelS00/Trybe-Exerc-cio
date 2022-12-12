from employee import Employee


class HashMap:
    def __init__(self):
        self._buckets: Employee = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee: Employee):
        address = self.get_address(employee.id_num)
        self._buckets[address]: Employee = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        employee = self._buckets[address]

        if employee:
            return employee.name
        else:
            return None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        employee = self._buckets[address]

        if employee is not None:
            employee.name = new_name
        else:
            return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

table = HashMap()

for (id, name) in employees:
    employee = Employee(id, name)
    table.insert(employee)

# exercise 1
print(table.get_value(23))

# exercise 2
print(table.get_value(10))

print(table.update_value(10, "name30"))

print(table.get_value(10))
