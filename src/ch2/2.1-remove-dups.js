/**
 * time: O(n)
 * space: O(n)
 */
const removeDups = (head) => {
  const set = new Set(head.value);
  set.add(head.data);

  const removeNextNodeIfDup = (node) => {
    if (!node?.next) {
      return;
    }

    if (set.has(node.next.data)) {
      node.next = node.next.next;
      removeNextNodeIfDup(node);
    } else {
      set.add(node.next.data);
    }

    removeNextNodeIfDup(node.next);
  };

  removeNextNodeIfDup(head);

  return head;
};

/**
 * This algorithm trades more time for less space
 *
 * time: O(n^2)
 * space: O(1)
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

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const one = new Node("a");
const two = new Node("b");
const three = new Node("c");
const four = new Node("b");
const five = new Node("a");
one.next = two;
two.next = three;
three.next = four;
four.next = five;

console.log(removeDups(structuredClone(one)));
console.log(removeDupsSpaceEfficient(structuredClone(one)));
