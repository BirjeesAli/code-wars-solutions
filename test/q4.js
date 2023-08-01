const fixParanthesis = (s) => {
    let sum = 0;
    for(let char of s){
        if(char === ')' && sum === 0) s='('+s;
        else (char == '(' ? sum += 1 : sum -= 1);
    }
    (sum > 0 ? s=s+(')'.repeat(sum)) : s='('.repeat(sum*(-1))+s)
    return s;
}

console.log(fixParanthesis('))))(()(')); // (((())))(()())
console.log(fixParanthesis(')(')); // (((())))(()())
console.log(fixParanthesis(')()((')); // 