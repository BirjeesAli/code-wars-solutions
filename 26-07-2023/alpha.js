function alphanumeric(string){
    if (!string.length) return false;
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    for (let char of string.toLowerCase()) {
        if (!(chars.includes(char))) {
            return false
        }
    }
    return true
  }

console.log(alphanumeric("Tid4lgbqpKkdvvFLzh CGpk0XI7"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("     "));