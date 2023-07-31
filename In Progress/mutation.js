function identical(word, guess){
    let Id = 0, noId = 0;
    for (let i = 0; i < word.length; i++){
        if (word[i] == guess[i]) Id++;
        else{
            if (!(word.includes(guess[i]))) noId++;
        }
        if (Id > 3 || noId > 1) return false;

    }
    if (noId < 1 || Id < (word.length-1)) return false;
    return true;
}

// console.log(identical('more', 'mare'));
// console.log(identical('apse', 'pare'))

function haveIdentWord(playerMemory, word){
    for (let guess of playerMemory){
        if ((identical(word, guess))){
            return guess;
        }
    }
    return false;
}

function mutations(alice, bob, word, first){
    let player = [alice, bob];
    let result = haveIdentWord(player[first], word);
    if (result){
        player[first] = player[first].filter((elem) => elem != result);
        // console.log(( first == 0 ? "alice give:" : "bob give:" ), result, 'for', word);
        word = result;
        
        while (true){
            // break;
            first = (first+1)%2;
            result = haveIdentWord(player[first], word);
            if (result) {
                player[first] = player[first].filter((elem) => elem != result);
                // console.log(( first == 0 ? "alice give:" : "bob give:" ), result, 'for', word);
                word = result;
            }
            else return (first+1)%2;
        }
    }
    else{
        first = (first+1)%2;
        result = haveIdentWord(player[first], word);
        if (result){
            // console.log('first failed!',( first == 0 ? "alice give:" : "bob give:" ), result);
            return first;
        }
        else return -1;
    }
    return 1;
}

const alice = ['plat', 'rend', 'bear', 'soar', 'mare', 'pare', 'flap', 'neat', 'clan', 'pore'],
bob   = ['boar', 'clap', 'mere', 'lend', 'near', 'peat', 'pure', 'more', 'plan', 'soap'],
word = 'send',
first = 1;

console.log(mutations(alice,bob,word, first));
// alice = alice.filter((elem) => elem != 'plat')
// console.log(alice);


// function do(arr){
//     let arr = arr.filter((elem) => elem != 'plat')
// }