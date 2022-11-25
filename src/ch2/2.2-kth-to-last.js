import { arrayToLinkedList } from "./helpers";

/**
 * time: O(n)
 * space: O(1)
 */
const kthToLast = (head, k) => {
  let count = 0;
  let curr = head;

  const idx = countListLength(head) - k - 1;

  while (curr) {
    if (count === idx) {
      return curr;
    }
    count++;
    curr = curr.next;
  }
};

const countListLength = (head) => {
  let count = 0;
  let curr = head;

  while (curr) {
    count++;
    curr = curr.next;
  }
  return count;
};

const head = arrayToLinkedList(["a", "b", "c", "d", "e"]);

console.log(kthToLast(head, 2));
