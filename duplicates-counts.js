// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    let found = [];
    text = text.toLowerCase();
    for (let idx = 0; idx < (text.length)-1; idx++){        
        if (found.includes(text[idx])) continue;
        if (text.slice(idx+1).includes(text[idx])){
            found.push(text[idx]);
        }
    }
    return found.length;
  }

console.log(duplicateCount("Indivisibilities"));