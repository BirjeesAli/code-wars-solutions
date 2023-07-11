// Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending ones.
// Egs:
// 1450 -> 145
// -1050 -> -105

// solution #01
function trimZeroes(num){
    while (num%10 === 0 ){
        num = num/10
    }
    return num
}

// solution #02
function trimZero(num){
    divisor = '1'
    for (let i=String(num).length-1; i >= 0; i--){
        if (String(num)[i] != "0"){
            return(num/divisor)
        }
        else{
            divisor += "0"
            if (i == 0) return(num/(divisor))
        }
    }
}

console.log(trimZeroes(10500050000000))
console.log(trimZero(-1050506030600))