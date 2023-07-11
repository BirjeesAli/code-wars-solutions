// Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending ones.
// Egs:
// 1450 -> 145
// -1050 -> -105

function trimZeroes(num){gti
        num = num/10
    }
    return num
}

function trimZeroes(num){
    divident = '1'
    for (let i=String(num).length-1; i >= 0; i--){
        if (String(num)[i] != "0"){
            return(num/divident)
        }
        else{
            divident += "0"
            if (i == 0) return(num/(divident))
        }
    }
}

console.log(trimZeroes(10500050000000))
// console.log(trim2(-1050506030600))