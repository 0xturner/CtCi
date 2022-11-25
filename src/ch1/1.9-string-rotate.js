/**
 * time: ?
 * space: ?
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

/**
 * s1 = xy
 * s2 = yx
 *
 * yx is substring of s1s1(xyxy)
 *
 * time: O(n)
 * space: O(n)
 */
const improvedIsOneRotation = (s1, s2) => {
  if (!s1 || s1.length !== s2.length) {
    return false;
  }

  return (s1 + s1).includes(s2);
};

console.log(isOneRotation("waterbottle", "erbottlewat"));
console.log(improvedIsOneRotation("waterbottle", "erbottlewaX"));
