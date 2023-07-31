function doMath(s){
    const oprations = ['+', '-', '*', '/'];
    res = 0;
    let lst = s.split(' ').sort((a, b) => {
        const letA = a.match(/[a-z]/)[0];
        const letB = b.match(/[a-z]/)[0];
        if (letA > letB) return 1;
        if (letA < letB) return -1;
        return 0;
    });
    console.log(lst);
    if (lst.length < 2) return Number(lst[0].replace(/[a-z]/, ''));
    res = Number(lst[0].replace(/[a-z]/, ''));
    for (let i=0; i<lst.length-1; i++){
        console.log(i, (i%(oprations.length)), oprations[(i%(oprations.length))]);
        const num1 = Number(lst[i].replace(/[a-z]/, ''));
        const num2 = Number(lst[i+1].replace(/[a-z]/, ''));
        const opr = oprations[(i%(oprations.length))];
        
        if (opr == '+'){
            res += num2; 
        }
        else if (opr == '-'){
            res -= num2; 
        }
        else if (opr == '*'){
            res *= num2; 
        }
        else{
            res /= num2; 
        }
    }
    return Math.round(res);
}

console.log(doMath('d563 281w4 d116 29z8 63x8 8y85 938d50 990x8 99d01 95y26 y761')); //-4219021
// console.log(doMath('6d484 a2137 92z5 10z5 38c6 62c784 204c80 3d00 4918c5 3x8843 3b3331 5769d8')); //45288683
// console.log(doMath('a38154 9788b4 8w634 z40576 5y057 9z0030 3w6516 93b59 274b7 x85941 40b4 z104')); //60474203
// console.log(doMath("4a518")); //4518
// console.log(doMath("24z6 1x23 y369 89a 900b")); //1299
// console.log(doMath("10a 90x 14b 78u 45a 7b 34y")); //60

