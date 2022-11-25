export const createNode = (value, next = null) => ({
  value,
  next: next,
});

export const arrayToLinkedList = (arr) => {
  let list = null;

  const reversed = arr.reverse();
  for (const value of reversed) {
    list = createNode(value, list);
  }

  return list;
};
