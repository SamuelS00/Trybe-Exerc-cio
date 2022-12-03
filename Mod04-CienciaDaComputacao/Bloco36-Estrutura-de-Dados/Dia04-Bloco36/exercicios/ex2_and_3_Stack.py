from linked_list_content import LinkedList


class Stack:
    def __init__(self):
        self.data = LinkedList()

    def size(self):
        return len(self.data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self.data.insert_last(value)

    def pop(self):
        if self.is_empty():
            return None

        self.data.remove_last()

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self.data.head_value

        while min_value.next is None:
            if min_value.next < min_value:
                min_value = min_value.next

        return min_value

    def peek(self, position):
        if self.is_empty():
            return None

        return self.data.get_element_at(position)


if __name__ == "__main__":
    elements = [1, 2, 3]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    # saída:
    # LinkedList(
    #   len=3
    #   value=Node(value=1, next=Node(value=2, next=Node(value=3, next=None))))
    print(content_stack.data)

    content_stack.pop()

    # saída:
    # LinkedList(
    #   len=2
    #   value=Node(value=1, next=Node(value=2, next=None)))
    print(content_stack.data)

    # saída:
    # Node(
    #   value=1
    #   next=Node(value=2, next=None)
    # )
    print(content_stack.min_value())
