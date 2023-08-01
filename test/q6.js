const luckCheck = (number) => {
    if (number === '' || number.match(/[a-z]/gi) != null) throw new Error('input is invalid!');
    if (number.length === 1) return false;
    if (number.length < 4) return (number[0] === number[number.length-1]);

    let h1 = 0, h2 = 0, size = (number.length);
    number = Array.from({length: number.length}).map((a, index) =>+(number[index]));
    (!!(size%2) ? number[Math.floor(size/2)] = 0 : 0);
    number.forEach((elem, idx) => {
        (idx < (number.length/2) ? h1 += +elem : h2 += +elem);
    });
    return (h1===h2);
}

console.log(luckCheck('003111'));
console.log(luckCheck('813372'));
console.log(luckCheck('17935'));
console.log(luckCheck('56328116'));
console.log(luckCheck('56328117'));
// console.log(luckCheck('s')); // throw error
