// In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
    res = []
    for (let idx in list) {
        console.log(idx)
        res[list.length-idx-1] = list[idx]  
    }
    return res;
}

function reverseListUpd(list){
    for (let idx in list){
        if (((list.length/2)%2!=0)? idx < (list.length/2)-.5 :idx < (list.length/2)){
            let temp = list[(list.length-1)-idx]
            list[list.length-idx-1] = list[idx], list[idx] = temp
        } 
    }
    return list
}


console.log(reverseListUpd([1,2,3,4, 5]))

// console.log(((listNew.length/2)%2==0))

