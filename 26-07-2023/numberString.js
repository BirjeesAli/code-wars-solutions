function extractNumber(string){
    const nums = '0123456789';
    let num = '';
    for (let char of string){
        if (nums.includes(char)){
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
        let num = extractNumber(splitted[idx])
        num -= 1;
        address[num] = idx;
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