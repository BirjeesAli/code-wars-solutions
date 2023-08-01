let list = [1,0,2,3,4,5,6]
// console.log(list.reduce((prev, curr,n,array) => {
//     // console.log(array.length);
//     return (prev+curr)/array.length;
// }))

function toCamelCase(str){
    console.log(str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)));
}

// let n = 4;
// n = n.toString(2)
// console.log(n);
// console.log(['hehe', 'pasta'].join(''))

// console.log(list.map((item, idx) => {
//     console.log(item);
//     return (item == 0 ?  : item );

// }))
list = [false,1,0,1,2,0,1,3,"a"];
size = list.length;
list = list.filter((elem) => elem!==0);

console.log(list, list.length-size);

const nZeros = 5;

const zeroIndexArr = Array.from({length: nZeros}).map(_ => 0);

console.log(zeroIndexArr)

// console.log([...list, ...[7,8,9].slice(1)])