// Write a function that accepts an array of 10 integers (between 0 and 9), 
// hat returns a string of those numbers in the form of a phone number.


function createPhoneNumber(numbers){
    const stNum = numbers.toString().replaceAll(",", '');
  return `(${stNum.slice(0, 3)}) ${stNum.slice(3, 6)}-${stNum.slice(6)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));