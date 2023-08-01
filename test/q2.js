function sumNum(num){
    let d = 10;
    let res = 1;
    while (num > 0){
        let temp = 0;
        if (num/d > 10){
            d *= 10;
        }
        else{
            temp = parseInt(num/d);
            num = Math.floor(((num/d)-temp)*d);
            res *= temp;
            d = d/10;
        }
    }
    return res;
}


const multPersistence = (num) => {
    if (num < 10) return 0;
    let rounds = 0;
    while (num >= 10){
        rounds += 1;
        let sum = sumNum(num);
        if (sum > 10) num = sum;
        else break;
    }
    return rounds;
}


console.log(multPersistence(39));