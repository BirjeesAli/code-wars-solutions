// In this example you have to validate if a user input string is alphanumeric. 
// The given string is not nil/null/NULL/None, so you don't have to check that.
// The string has the following conditions to be alphanumeric:
// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string){
    if (!string.length) return false;
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    for (let char of string.toLowerCase()) {
        if (!(chars.includes(char))) {
            return false;
        }
    }
    return true;
  }

console.log(alphanumeric("Tid4lgbqpKkdvvFLzh CGpk0XI7"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("     "));