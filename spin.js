function reverse(s){
    const size = (s.length)-1;
    let sub = '';
    for (let n = 0; n <= size; n++){
        sub = s[n]+sub;
    }
    return (sub);
}

function spinWords(string){
    let res = '';
    let arr = string.split(' ');
    for (let i=0; i<arr.length; i++){
        if (arr[i].length > 4){
            res+=reverse(arr[i]);
        }
        else res+=arr[i];
        if (i < arr.length-1) res+=' ';
    }
    return res;
  }

console.log(spinWords("Hey fellow warriors"));
