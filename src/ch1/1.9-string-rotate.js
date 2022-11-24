/**
 * time: O(n)
 * space: O(1)
 */
const isOneRotation = (s1, s2) => {
  if (s1.length !== s2.length) {
    throw Error("Must be the same length");
  }

  const L = s1.length;

  for (let i = 0; i < L; i++) {
    if (
      s2[i] === s1[0] &&
      s2.substring(0, i) === s1.substring(L - i, L) &&
      s2.substring(i, L) === s1.substring(0, L - i)
    ) {
      return true;
    }
  }
  return false;
};

console.log(isOneRotation("waterbottle", "erbottlewat"));
