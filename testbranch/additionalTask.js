function diagonalDifference(arr) {
  // Write your code here
  // length of input array.
  const lengthArray = arr[0].length;
  let diagonal1 = 0,
     diagonal2 = 0;
  // Looping through the array and summing the diagonals.
  for (let i = 0, j = lengthArray - 1; i < lengthArray; i++, j--) {
    // Calculating the primary diagonal.
    diagonal1 += arr[i][i];
    // Reversing the second dimension of array to calculate secondary diagonal.
    diagonal2 += arr[i][j];
  }
  // return absolute difference value.
  console.log(lengthArray);
  let different = diagonal1 - diagonal2
  console.log(Math.abs(different))
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);