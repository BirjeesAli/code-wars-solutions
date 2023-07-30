// Write a function named first_non_repeating_letter that takes a string input, and 
// returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.

function firstNonRepeatingLetter(s) {
  for (const idx in s){
    if (s.toLowerCase().split(s[idx].toLowerCase()).length-1 === 1) return s[idx];
  }
  return ""
  }


// console.log(firstNonRepeatingLetter('a'))
// console.log(firstNonRepeatingLetter('stress'))
// console.log(firstNonRepeatingLetter('moonmen'))
console.log(firstNonRepeatingLetter('sTreSS'))