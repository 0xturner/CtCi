/**
 * assumes singly linked list is passed
 *
 * time: O(n)
 * space: O(n)
 */
const removeDups = (head) => {
  const set = new Set(head.value);

  let curr = head;
  let previous = null;

  while (curr) {
    if (set.has(curr.data)) {
      previous.next = curr.next;
    } else {
      set.add(curr.data);
      previous = curr;
    }
    curr = curr.next;
  }

  return head;
};

/**
 * This algorithm trades more time for less space
 *
 * time: O(n^2)
 * space: O(1)
 *
 */
const removeDupsSpaceEfficient = (head) => {
  let curr = head;

  while (curr) {
    let runner = curr;
    while (runner) {
      if (runner.next?.data === curr.data) {
        runner.next = runner.next.next;
      }
      runner = runner.next;
    }
    curr = curr.next;
  }

  return head;
};

/**
 * assumes doubly linked list is passed
 *
 * time: O(n)
 * space: O(n)
 */
const removeDupsDoublyLinked = (head) => {
  const set = new Set(head.value);

  let curr = head;

  while (curr) {
    if (set.has(curr.data)) {
      curr.prev.next = curr.next;
      if (curr.next) {
        curr.next.prev = curr.prev;
      }
    } else {
      set.add(curr.data);
    }
    curr = curr.next;
  }

  return head;
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

const one = new Node("a");
const two = new Node("b");
const three = new Node("c");
const four = new Node("b");
const five = new Node("a");

one.next = two;
two.next = three;
two.prev = one;
three.next = four;
three.prev = two;
four.next = five;
four.prev = three;
five.prev = four;

console.log(removeDups(structuredClone(one)));
console.log(removeDupsSpaceEfficient(structuredClone(one)));
console.log(removeDupsDoublyLinked(structuredClone(one)));
