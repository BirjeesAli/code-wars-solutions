function binToDec(strN){
    let res = 0;

    for (let idx = (strN.length)-1; idx>=0; idx--){
        if (strN[idx] == 0) continue;
            res += (2**((strN.length-1)-idx))*Number(strN[idx]);
    }
    return res;
}

function decToBin(n){
    let res = '';
    while (n != 0){
        res = (n%2)+res;
        n = parseInt(n/2);
    }
    if (res.length < 8){
        return ('0'.repeat(8-(res.length))+res);
    }
    else if (res.length > 8 && res.length < 32){
        return ('0'.repeat(32-(res.length))+res);
    }
    return res;
}

function ipToNum(ip) {
    let fullBin = '';
    for (let chunk of ip.split('.')){
        fullBin += (decToBin(chunk));
    }
    return binToDec(fullBin);
}

function numToIp(num) {
    const dec = String(decToBin(num));
    return `${binToDec(dec.slice(0, 8))}.${binToDec(dec.slice(8, 16))}.${binToDec(dec.slice(16, 24))}.${binToDec(dec.slice(24, 32))}`;
}

console.log((ipToNum('192.168.1.1')));
console.log(numToIp(3232235777));
console.log(ipToNum('10.0.0.0'))
console.log(numToIp(167772160));