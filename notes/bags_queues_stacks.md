# Bags, Queues, and Stacks

## APIs

### Bag
```javascript
class Bag {
  add(item): void // add an item
  isEmpty(): boolean // is the bag empty?
  size(): int // # of items in the bag
}
```

### Queue (FIFO)
```javascript
class Queue {
  enqueue(item): void // add an item
  dequeue(): object // remove the least recently added item
  isEmpty(): boolean // is the queue empty?
  size(): int // # of items in the queue
}
```

### Stack (LIFO)
```javascript
class Queue {
  push(item): void // add an item
  pop(): object // remove the most recently added item
  isEmpty(): boolean // is the queue empty?
  size(): int // # of items in the queue
}
```

## Bags

A bag is a collection where removing items is not supported, its purpose is to provide clients with the ability to collect items and then to iterate through the collected items. The order of iteration is unspecified.

## FIFO Queues

A queue is a collection that is based on FIFO, also known as doing tasks in the same order they arrive (ie waiting in line at a theater). Processed in the order in which they were added.

A typical reason to use a queue is to save items in a collection while at the same time *preserving their relative order*.

## Stacks

A stack is a collection that is based on LIFO, also known as last in first out. Think of a pile of mail, you pile pieces of new mail on top when they arrive and take each piece from the top when you are ready to read.

A typical reason to use a stack is to save items in a collection while at the same time *reversing their relative order*.

## Linked Lists

A recursive data structure that is either empty (null) or a reference to a node having a generic item and a reference to a linked list.

```javascript
class Node {
  item: object;
  next: Node;
}
```

Operations can include:
* Insert at beginning
* Remove from beginning
* Insert at end
* Insert/remove at a particular position
* Remove a given node
* Insert a new node before a given node

*Exercise: implement a stack with a linked list, implement a queue with a linked list*
