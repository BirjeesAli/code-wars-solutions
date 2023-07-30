// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.

function extractNumber(string){
    let num = '';
    for (let char of string){
        if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57){
            num += char;
        }
    }
    return Number(num);
}

function order(words){
    if (words.trim().length == 0) return '';
    let splitted = words.split(' ');
    let address = {};
    let res = '';
    for (let idx in splitted){
        address[(extractNumber(splitted[idx])-1)] = idx;
    }
    for (let i = 0; i < splitted.length; i++){
        res += splitted[address[i]];
        if (i < splitted.length-1){
            res += ' ';
        }
    }
    return res;
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Thi1s is2 3a T4est"
// console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
