// function doMath(s){
//     let lst = s.split(' ');
//     for (let i=0; i<=lst.length; i++){
//         let letter = lst[i];
//         for (let idx in letter){
//             if (letter[idx].charCodeAt() >= 97 && letter[idx].charCodeAt() <= 122 ){
//                 lst[i] = letter[idx]+letter.slice(0, idx)+letter.slice(Number(idx)+1);
//                 // console.log('found:',letter[idx]+letter.slice(0, idx)+letter.slice(Number(idx)+1))
//             } 
//         }
//     }
//     return lst.sort((a, b) => a - b);
// }



// console.log(doMath("24z6 1z23 y369 89z 900b"));
// console.log(doMath("24z6 1x23 y369 89a 900b"));
// console.log(doMath("10a 90x 14b 78u 45a 7b 34y"));
// console.log(doMath("24z6 1x23 y369 89a 900b"));
// console.log(doMath("24z6 1x23 y369 89a 900b"));

console.log((((((10 + 45) - 14) * 7) / 78) + 90) - 34)