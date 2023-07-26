function makeLooper(str) {
    let count = -1;
    return () => {
        count += 1;
        count %= (str.length);
        return str[count];
    }
}

var abc = makeLooper('xyz');
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());



