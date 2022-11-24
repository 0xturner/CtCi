/**
 * time: 0(nm)
 * space: (nm)
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

const test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 0, 9],
  [10, 11, 12],
];

console.log(zeroMatrix(test));
