var countBits = (n) => {
    if (!n) return n;
    let res = 0;
    for (let i=n; i>0; i--){
        // console.log('bit',n%2, n, res);
        if (n%2 == 1) res+=1;
        n = parseInt(n/2);
        // console.log(n);
        if (n == 0) return res;
    }
  };

console.log(countBits(7));