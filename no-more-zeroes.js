// Numbers ending with zeros are boring. They might be fun in your world, but not here. 
// Get rid of them. Only the ending ones.
// Egs:
// 1450 -> 145
// -1050 -> -105

// solution #01
function trimZero(num){
    if (num%10 !== 0) return num;
    else return trimZero(num/10);
}

// solution #02
function trimZeroes(num){
    while (num%10 === 0 ){
        num = num/10
    }
    return num
}


console.log(trimZeroes(10500050000000))
console.log(trimZero(-1050506030600))