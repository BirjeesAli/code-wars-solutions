// In this kata you will create a function that takes in a list and 
// returns a list with the reverse order.

function reverseList(list){
    const size = (list.length)-1;
    for (let n = 0; n <= Math.floor(size/2); n++){
        const prev = list[size-n];
        list[size-n] = list[n], list[n] = prev;
    }
    return list
}

console.log(reverseList([1,2,3,4,5]))
