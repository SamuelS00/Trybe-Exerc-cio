from linked_list_content import LinkedList


class StackOverflow(Exception):
    def __str__(self) -> str:
        return "The Stack is Full"


class Stack:
    def __init__(self):
        self.data = LinkedList()
        self.limit = 5

    def size(self):
        return len(self.data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        if self.size() + 1 < self.limit:
            self.data.insert_last(value)
        else:
            raise StackOverflow()

    def pop(self):
        if self.is_empty():
            return None

        self.data.remove_last()

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self.data.head_value

        # O(n)
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

    # saída: The Stack is Full
    try:
        content_stack.push(4)
        content_stack.push(5)
        content_stack.push(6)

        # print(content_stack.data)
    except StackOverflow as err:
        print(err)
