import { arrayToLinkedList } from "./helpers";

/**
 * time: O(1)
 * space: O(1)
 */
const deleteMiddleNode = (node) => {
  if (!node || !node.next) {
    return false;
  }

  node.value = node.next.value;
  node.next = node.next.next;
  return true;
};

const head = arrayToLinkedList(["a", "b", "c", "d", "e", "f"]);

// @ts-ignore
const cNode = head?.next?.next;
deleteMiddleNode(cNode);
console.log(head);
