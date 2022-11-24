/*
 * To open a new Quokka file:
 *   - Press `⌘ K, J` to create a new JavaScript File restart Quokka on an existing file:
 *   - Press `⌘ K, Q`
 */

const rotateMatrix = (matrix) => {
  const N = matrix.length;

  for (let row = 0; row < N; row++) {
    for (let col = row; col < N; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  return matrix;
};

const test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateMatrix(test));
