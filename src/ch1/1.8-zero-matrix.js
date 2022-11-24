/**
 * time: O(nm)
 * space: O(nm)
 */
const zeroMatrix = (matrix) => {
  const N = matrix.length; // height
  const M = matrix[0].length; // width
  const coordinates = []; // (x, y)[]

  // record 0 coordinates
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      if (matrix[row][col] === 0) {
        coordinates.push([col, row]);
      }
    }
  }

  // replace rows and columns
  for (coordinate of coordinates) {
    for (let i = 0; i < Math.max(N, M); i++) {
      if (i < N) {
        matrix[i][coordinate[0]] = 0;
      }
      if (i < M) {
        matrix[coordinate[1]][i] = 0;
      }
    }
  }

  return matrix;
};

/**
 * a more space efficient version of the same function
 *
 * time: O(nm)
 * space: O(1)
 */
const optimizedZeroMatrix = (matrix) => {
  const N = matrix.length; // height
  const M = matrix[0].length; // width
  let firstRowZero = false;
  let firstColZero = false;

  for (let row = 0; row < N; row++) {
    if (matrix[row][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  for (let col = 0; col < M; col++) {
    if (matrix[0][col] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // check and record zeroes
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  const nullifyRow = (rowIdx) => {
    for (let col = 0; col < M; col++) {
      matrix[rowIdx][col] = 0;
    }
  };

  const nullifyCol = (colIdx) => {
    for (let row = 0; row < N; row++) {
      matrix[row][colIdx] = 0;
    }
  };

  for (let row = 1; row < N; row++) {
    if (matrix[row][0] === 0) {
      nullifyRow(row);
    }
  }

  for (let col = 1; col < M; col++) {
    if (matrix[0][col] === 0) {
      nullifyCol(col);
    }
  }

  if (firstRowZero) {
    nullifyRow(0);
  }

  if (firstColZero) {
    nullifyColumn(0);
  }

  return matrix;
};

const test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 0, 9],
  [10, 11, 12],
];

const test2 = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

console.log(zeroMatrix(structuredClone(test)));
console.log(optimizedZeroMatrix(structuredClone(test)));
console.log(optimizedZeroMatrix(structuredClone(test2)));
