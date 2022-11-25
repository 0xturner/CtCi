import { arrayToLinkedList } from "./helpers";

/**
 * time: O(n)
 * space: O(1)
 */
const kthToLast = (head, k) => {
  let runner = head;
  let curr = head;
  let runnerCount = 0;

  // runner jumps ahead to the kth element
  while (runnerCount < k) {
    runnerCount++;
    runner = runner.next;
  }

  while (runner.next) {
    runner = runner.next;
    curr = curr.next;
  }

  return curr;
};

/**
 * time: O(n)
 * space: O(n)
 */
const kthToLastRecursively = (node, k) => {
  if (!node) {
    return { node, idx: 0 };
  }

  const newNode = kthToLastRecursively(node.next, k);
  newNode.idx++;

  if (newNode.idx === k + 1) {
    return node;
  }

  return newNode;
};

// a -> b -> c -> d -> e -> f
// kth 2 -> "d"

const head = arrayToLinkedList(["a", "b", "c", "d", "e", "f"]);

console.log(kthToLast(head, 2));
console.log(kthToLastRecursively(head, 5));
