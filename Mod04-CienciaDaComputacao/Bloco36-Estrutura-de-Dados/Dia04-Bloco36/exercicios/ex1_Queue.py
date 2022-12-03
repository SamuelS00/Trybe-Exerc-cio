from linked_list_content import LinkedList


class Queue:
    def __init__(self):
        self.data = LinkedList()

    def size(self):
        return len(self.data)

    def is_empty(self):
        return not bool(self.size())

    def enqueue(self, value):
        self.data.insert_last(value)

    def dequeue(self):
        if self.is_empty():
            return None

        self.data.remove_first()

    def peek(self, position):
        if self.is_empty():
            return None

        return self.data.get_element_at(position)


if __name__ == "__main__":
    elements = [1, 2, 3]
    content_queue = Queue()

    for elem in elements:
        content_queue.enqueue(elem)

    # saída:
    # LinkedList(
    #   len=3,
    #   value=Node(value=1, next=Node(value=2, next=Node(value=3, next=None))))
    print(content_queue.data)

    content_queue.dequeue()

    # saída:
    # LinkedList(
    #   len=2,
    #   value=Node(value=2, next=Node(value=3, next=None)))
    print(content_queue.data)
