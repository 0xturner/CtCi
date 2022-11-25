import { arrayToLinkedList } from "./helpers";

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
    if (set.has(curr.value) && previous) {
      previous.next = curr.next;
    } else {
      set.add(curr.value);
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
      if (runner.next?.value === curr.value) {
        runner.next = runner.next.next;
      }
      runner = runner.next;
    }
    curr = curr.next;
  }

  return head;
};

const head = arrayToLinkedList(["a", "b", "c", "b", "e"]);

console.log(removeDups(structuredClone(head)));
console.log(removeDupsSpaceEfficient(structuredClone(head)));
