// Write a function that validates if an input array is a latin square. It has two parameters, the array and a positive integer m > 1. To help the user with debugging, it should return an appropriate message, as detailed below. It must not modify the input array.
// Details: The input array is guaranteed to be 2D and contain only integers. If it is a valid latin square of size m, the function should return "Valid latin square of size <m>". Otherwise, it should return one of the following messages:
// (1) If the input array is not square, the function should return "Array not square".
// (2) If the input array is square, but not of size m, the function should return "Array is wrong size". NOTE: When the array is both not square and the wrong size, (1) applies, so "Array not square" should be returned.
// (3) If any value between 1 and m in the array occurs more than once in a particular row, the function should identify it and its row by returning "<value> occurs more than once in row <s>". If there are multiple such values, only one should be identified. Row indexes run from 1 to m.
// (4) If any value between 1 and m in the array occurs more than once in a particular column, the function should return "<value> occurs more than once in column <t>". If there are multiple such values, only one should be identified. Column indexes run from 1 to m.
// (5) If any value in the array is not between 1 and m, the function should identify it and its location by returning "<value> at <row,col> is not between 1 and <m>". If there are multiple such values, only one should be identified.

function verifyLatinSquare(array, n){

    for (i=0; i<array.length; i++){
        if (array.length !== array[i].length) return 'Array not square'
    }
    if (array.length !== n) return 'Array is wrong size'
    
    for (i=0; i<array.length; i++){
        for (j=0; j<array[i].length; j++){

            if (i<(array.length-1)){
                for (idx=i+1; idx<array.length; idx++){
                    if (array[i][j] === array[idx][j]) {
                        console.log(array[i][j], array[idx][j], i, idx)
                        return `${array[i][j]} occurs more than once in column ${j+1}`
                    }
                }
            }

            if (array[i].filter(x => x==array[i][j]).length > 1){
                return `${array[i][j]} occurs more than once in row ${i+1}`
            }
            
            if (1>array[i][j] || n<array[i][j]) {
                return `${array[i][j]} at ${i+1},${j+1} is not between 1 and ${n}`}
        }
    }
      return `Valid latin square of size ${n}`
}

console.log(verifyLatinSquare(
    [[1, 2, 4, 3],
    [2, 4, 3, 1],
    [4, 3, 1, 2],
    [3, 1, 2, 4]], 4))

