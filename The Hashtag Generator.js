// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {
    if (str.trim().length === 0) return false;
    let res = "";
    const str_list = str.trim().split(" ");
    for (let wordIdx in str_list){
        if (str_list[wordIdx] != "") res += str_list[wordIdx].charAt(0).toUpperCase()+str_list[wordIdx].slice(1);
    }
    return ( (("#"+res).length) > 140 ? false : "#"+res );
}

console.log(generateHashtag(""));  
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));