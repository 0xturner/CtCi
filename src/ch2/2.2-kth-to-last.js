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

// a -> b -> c -> d -> e -f>
// kth 2 -> "2"

// TODO recursive

const head = arrayToLinkedList(["a", "b", "c", "d", "e", "f"]);

console.log(kthToLast(head, 2));
