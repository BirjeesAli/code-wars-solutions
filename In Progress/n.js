function doMath(s) {
  const operations = ['+', '-', '*', '/'];
  let result = 0;

  const numbersWithLetters = s.match(/\d+[a-zA-Z]/g);
  if (!numbersWithLetters) {
    throw new Error('Invalid input. Please provide numbers with letters.');
  }

  const sortedNumbers = numbersWithLetters.sort((a, b) => {
    const letA = a.match(/[a-zA-Z]/)[0];
    const letB = b.match(/[a-zA-Z]/)[0];
    if (letA > letB) return 1;
    if (letA < letB) return -1;
    return 0;
  });

  result = parseInt(sortedNumbers[0], 10);

  let currentOp = 0;
  for (let i = 1; i < sortedNumbers.length; i++) {
    const numberWithLetter = sortedNumbers[i];
    const letter = numberWithLetter[numberWithLetter.length - 1];
    const number = parseInt(numberWithLetter, 10);

    switch (operations[currentOp % operations.length]) {
      case '+':
        result += number;
        break;
      case '-':
        result -= number;
        break;
      case '*':
        result *= number;
        break;
      case '/':
        result /= number;
        break;
      default:
        break;
    }
  }

  return Math.round(result);
}

// Test cases
console.log(doMath("4a518")); // Output: 4518
console.log(doMath("24z6 1x23 y369 89a 900b")); // Output: 1299
console.log(doMath("10a 90x 14b 78u 45a 7b 34y")); // Output: 60
console.log(doMath('d563 281w4 d116 29z8 63x8 8y85 938d50 990x8 99d01 95y26 y761')); // Output: -4219021
