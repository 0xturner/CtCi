import { arrayToLinkedList } from "./helpers";

const deleteMiddleNode = (node) => {
  if (!node || !node.next) {
    return false;
  }

  node.value = node.next.value;
  node.next = node.next.next;
  return true;
};

const head = arrayToLinkedList(["a", "b", "c", "d", "e", "f"]);
console.log("head: ", head);

const cNode = head?.next?.next;
deleteMiddleNode(cNode);
console.log(head);
