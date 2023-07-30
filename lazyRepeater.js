// The makeLooper() function (or make_looper in your language) takes a string 
// (of non-zero length) as an argument. It returns a function. The function it returns 
// will return successive characters of the string on successive invocations. 
// It will start back at the beginning of the string once it reaches the end.

function makeLooper(str) {
    let count = -1;
    return () => {
        count += 1;
        return str[count%(str.length)];
    }
}

var abc = makeLooper('xyz');
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());

