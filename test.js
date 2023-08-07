function augmentMatrix(coefficients, constants) {
  const n = coefficients.length;
  const augmentedMatrix = [];

  for (let i = 0; i < n; i++) {
    augmentedMatrix[i] = coefficients[i].concat(constants[i][0]);
  }

  return augmentedMatrix;
}

function swapRows(matrix, row1, row2) {
  [matrix[row1], matrix[row2]] = [matrix[row2], matrix[row1]];
}

function divideRow(matrix, row, divisor) {
  const n = matrix[row].length;

  for (let i = 0; i < n; i++) {
    matrix[row][i] /= divisor;
  }
}

function subtractRows(targetRow, sourceRow, factor, matrix) {
  const n = matrix[targetRow].length;

  for (let i = 0; i < n; i++) {
    matrix[targetRow][i] -= factor * matrix[sourceRow][i];
  }
}

function gaussianElimination(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    // Find the pivot row and swap if necessary
    let pivotRow = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(matrix[j][i]) > Math.abs(matrix[pivotRow][i])) {
        pivotRow = j;
      }
    }
    if (pivotRow !== i) {
      swapRows(matrix, i, pivotRow);
    }

    // Divide the pivot row by the pivot element
    divideRow(matrix, i, matrix[i][i]);

    // Eliminate other rows
    for (let j = 0; j < n; j++) {
      if (j !== i) {
        const factor = matrix[j][i];
        subtractRows(j, i, factor, matrix);
      }
    }
  }

  // Perform back substitution
  for (let i = n - 1; i >= 0; i--) {
    const div = matrix[i][i];
    for (let j = n; j < 2 * n; j++) {
      matrix[i][j] /= div;
    }
    for (let j = 0; j < i; j++) {
      const factor = matrix[j][i];
      subtractRows(j, i, factor, matrix);
    }
  }
}






const coefficients3x3 = [
  [2, 1, -1],
  [1, -3, 2],
  [3, 2, -5]
];
const constants3x3 = [
  [5],
  [-8],
  [1]
];

// Perform Gaussian elimination and obtain the solution
const augmentedMatrix3x3 = augmentMatrix(coefficients3x3, constants3x3);
gaussianElimination(augmentedMatrix3x3);

console.log("Solution for 3x3:");
console.log("x ≈", augmentedMatrix3x3[0][3]);
console.log("y ≈", augmentedMatrix3x3[1][3]);
console.log("z ≈", augmentedMatrix3x3[2][3]);


const coefficients2x2 = [
  [2, 1],
  [1, -3]
];
const constants2x2 = [
  [5],
  [-8]
];

// Perform Gaussian elimination and obtain the solution
const augmentedMatrix2x2 = augmentMatrix(coefficients2x2, constants2x2);
gaussianElimination(augmentedMatrix2x2);

console.log("Solution for 2x2:");
console.log("x ≈", augmentedMatrix2x2[0][2]);
console.log("y ≈", augmentedMatrix2x2[1][2]);



const coefficients5x5 = [
  [2, 1, -1, 3, -4],
  [1, -3, 2, 1, -2],
  [3, 2, -5, 2, 1],
  [-1, 4, 1, -3, 0],
  [2, -1, 3, -2, 1]
];
const constants5x5 = [
  [5],
  [-8],
  [1],
  [7],
  [-3]
];

// Perform Gaussian elimination and obtain the solution
const augmentedMatrix5x5 = augmentMatrix(coefficients5x5, constants5x5);
gaussianElimination(augmentedMatrix5x5);

console.log("Solution for 5x5:");
console.log("x ≈", augmentedMatrix5x5[0][5]);
console.log("y ≈", augmentedMatrix5x5[1][5]);
console.log("z ≈", augmentedMatrix5x5[2][5]);
console.log("w ≈", augmentedMatrix5x5[3][5]);
console.log("v ≈", augmentedMatrix5x5[4][5]);

