/**
 * time: O(n^2)
 * space: O(1)
 */
const rotateMatrix = (matrix) => {
  const N = matrix.length;

  // transpose i.e (x,y) -> (y,x)
  for (let row = 0; row < N; row++) {
    for (let col = row; col < N; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  // flip horizontaly
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N / 2; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[row][N - 1 - col];
      matrix[row][N - 1 - col] = temp;
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
