from examples.linked_list_content import LinkedList
from examples.node import Node


class Queue:
    def __init__(self):
        self.data = LinkedList()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def enqueue(self, value):
        if self.is_empty():
            return None

        self.data.insert_last(Node(value))

    def dequeue(self):
        if self.is_empty():
            return None

        self.data.remove_first()

    def peek(self, position):
        if self.is_empty():
            return None

        return self.data.get_element_at(position)
