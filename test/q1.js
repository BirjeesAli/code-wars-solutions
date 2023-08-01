const longestConsec = (lst, k) => {
    if (k <= 0 || lst.length == 0 || k > lst.length) return '';
    let res = '';
    for (let i = 0; i <= (lst.length-k); i++){
        const consec = lst.slice(i, i+k).join('');
        if (res.length < consec.length) res = consec;
    }
    return res;
}

let strarr = ['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'];
let strarr1 = ['zone', 'abigail', 'theta', 'form', 'libe', 'zes', 'theta', 'abigail'];
console.log(longestConsec(strarr, 2));
console.log(longestConsec(strarr1, 2));