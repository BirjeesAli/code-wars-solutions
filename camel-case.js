function toCamelCase(str){
    if (str === '') return str;
    function splitter(s){
        if (s.includes('-')) return s.split('-');
        else if (s.includes('_')) return s.split('_');
        return false;
    }
    if(!(splitter(str))){
        return((97 >= str[0].charCodeAt() <= 122 ? str[0].toUpperCase()+str.slice(1) : str) )
    }

    str = splitter(str);
    let res = '';
    for (const word of str){
        if (splitter(word)) {
            let words = splitter(word);
            let flag = word == str[0];
            for (const word of words){
                res += ((flag ? (word != words[0]) : true) && (97 >= word[0].charCodeAt() <= 122) ? word[0].toUpperCase()+word.slice(1) : word);
            }
            continue;
        } 
        res += ((word != str[0]) && (97 >= word[0].charCodeAt() <= 122) ? word[0].toUpperCase()+word.slice(1) : word);
    }
    return res
}

console.log(toCamelCase("a_Cat_Is-Omoshiroi")); // aCatIsOmoshiroi
console.log(toCamelCase("The-pippi_Is_Hungry")); // ThePippiIsHungry
console.log(toCamelCase("a-cat-Is_cute")); //aCatIsCute
