function pigIt(str){
    let res = '';
    for (let word of str.split(' ')){
        if (word.toLowerCase().charCodeAt(0) >= 97 && word.toLowerCase().charCodeAt(0) <= 122){
            res += word.slice(1)+word.slice(0,1)+'ay'+' ';
        }
        else{
            res += word+' ';
        }
    }
    return res.slice(0,res.length-1);
  }

console.log(pigIt('Hello world !'));