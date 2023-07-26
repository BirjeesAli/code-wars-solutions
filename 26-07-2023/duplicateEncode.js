function duplicateEncode(word){
    let res = '';
    for (const char of word.toLowerCase()){
        let temp = word.toLowerCase();
        temp = temp.replace(char, '|')
        if (temp.includes(char)){
            res += ')';
        }
        else res += '(';
    }
    return res;
}


console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));