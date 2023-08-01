function poleScore(polesData){
    let seq = {'R':0, 'G':1, 'B':2}
    let score = {}
    if (polesData.length < 6) return 0;
    for (let i = 0; i < polesData.length-1; i = i+2){
        let idx = seq[polesData[i+1]];
        score[polesData[i]] = [];
        score[polesData[i]][idx] += 1;
        console.log(polesData[i], polesData[i+1], i, score[polesData[i]]);
    }
    console.log(score)
}

// console.log(poleScore('0R0G0B'));
console.log(poleScore('1R0G1B1R1R1B1B1G1G'));
// console.log(Math.min(...[1,2,3]))