// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits 
// that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    let found = []
    for (let char in text){
        if (char < text.length-1){
            if (found.includes(text[char].toUpperCase()) || found.includes(text[char].toLowerCase())) continue
            if (!(found.includes(text[char]))){
                low = text.slice(Number(char)+1).includes(text[char].toLowerCase())
                up = text.slice(Number(char)+1).includes(text[char].toUpperCase())
                if (low || up){
                    found.push(text[char])
                }
            }
        }
    }
    return found.length
  }

console.log(duplicateCount("Indivisibilities"))