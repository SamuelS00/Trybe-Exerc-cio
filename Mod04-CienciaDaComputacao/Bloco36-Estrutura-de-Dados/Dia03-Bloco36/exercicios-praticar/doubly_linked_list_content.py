from node import Node


class DoublyLinkedList:
    def __init__(self):
        self.head_value = None
        self.tail_value = None
        self.__length = 0

    def __len__(self):
        return self.__length

    def __str__(self):
        return f"LinkedList(len={self.__length}, next={self.head_value})"

    def insert_first(self, value):
        first_value = Node(value)

        if self.is_empty() is False:
            self.head_value.prev = first_value

        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)

        last_value.prev = self.tail_value
        self.tail_value = last_value
        self.__length += 1

    def is_empty(self):
        return not self.__length


linked_list = DoublyLinkedList()

linked_list.insert_first(2)
linked_list.insert_first(3)
# linked_list.insert_last(4)

print(linked_list)
