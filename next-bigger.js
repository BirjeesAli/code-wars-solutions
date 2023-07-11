// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.

function nextBigger(n){
    let temp = String(n)
    if (n>11){
        for (i=temp.length-1; i>=0; i--){
            if (i>0 && temp[i]>temp[i-1]){
                // const a = temp[i], b = temp[i-1], x = temp.slice(i+1, temp.length)
                num = `${temp.slice(0, i-1)}${temp[i]}${temp[i-1]}${temp.slice(i+1, temp.length)}`
                // console.log(x, num)
                return (+num)
            }
        }
    }
    return -1
  }

console.log(nextBigger(53198))
// console.log("1010"[("1010".length)-1])