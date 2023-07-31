function reverse(s){
    const size = (s.length)-1;
    let sub = '';
    for (let n = 0; n <= Math.ceil(size/2); n++){
        sub = s[n]+sub;
    }
    return (s.slice(Math.ceil(size/2)+1)+sub);
}

function spinWords(string){
    let res = '';
    let size = string.split(' ');
    for (let i=0; i<size; i++){
        console.log(i)
    }
  }



// console.log(reverse('1234'))
console.log(spinWords("Hey fellow warriors"));
