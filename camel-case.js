function toCamelCase(str){
    str = str.split(/-|_/);
    if(str.length < 2) return(str[0]);
    return (str.map((item,idx) => (idx > 0 ? item[0].toUpperCase()+item.slice(1,) : item )).join(''));
}

console.log(toCamelCase("a_Cat_Is-Omoshiroi")); // aCatIsOmoshiroi
console.log(toCamelCase("The-pippi_Is_Hungry")); // ThePippiIsHungry
console.log(toCamelCase("a-cat-Is_cute")); //aCatIsCute
console.log(toCamelCase("")); // ''
console.log(toCamelCase("cute")); //cute
