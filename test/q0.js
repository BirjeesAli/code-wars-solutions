const genFactors = (n) => {
    if (n === 1) return [];
    let res = [];
    let d =2;
    if ((n%d)) d=3;
    for (let i=0; i<n; i++){
        res.push(d);
        n = n/d;
        if ((n%d)) {
            d += 1;
        };
    }
    if (n != Math.floor(n)) return [];
    if (n%d == 0) res.push(d);
    return res;
}
console.log(genFactors(1));
console.log(genFactors(3));
console.log(genFactors(4));
console.log(genFactors(8));
console.log(genFactors(9));
console.log(genFactors(12));