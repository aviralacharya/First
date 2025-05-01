"use strict";
const matrix = [
    [1, 2, 6],
    [3, 5, 9],
    [8, 4, 2]
];
let add = 0;
let n = matrix.length;
for (let i = 0; i < n; i++) {
    add += matrix[i][i];
    add += matrix[i][n - 1 - i];
}
if (n % 2 === 1) {
    let middle = Math.floor(n / 2);
    add -= matrix[middle][middle];
}
console.log("Diagonal sum is:", add);
//# sourceMappingURL=practice.js.map