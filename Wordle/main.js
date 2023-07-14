const words = ['hello', 'world', 'cloud', 'abeer', 'muhib']; 
let word = '';
function startGame(){
    word = words[(Math.floor(Math.random()*words.length))];
    document.getElementById("wordDom").innerHTML = word.toUpperCase()
}

function matchWord(){
    let x = document.getElementsByTagName('Input');
    // let res = ''
    let temp = Array.from(word.toUpperCase())
    let proc = ["", "", "", "", ""]
    let yells = {}
    let flag = true

    for (i=0;i<x.length; i++){
        flag = false
        for (idx = 0; idx < temp.length; idx++){
            if ( x[i].value.toUpperCase() == temp[idx]){
                if (i === idx){
                    if (yells[idx] != undefined){
                        proc[yells[idx]] = 'grey'
                        x[yells[idx]].style.border = `thick solid ${proc[i]}`
                    }
                    proc[i] = 'green'
                    temp[idx] = 0
                    break
                }
                if (yells[idx] == undefined){
                    proc[i] = 'orange'
                    yells[idx] = i
                    flag = true
                }
            }
            if (flag!=true) {proc[i] = 'grey'}
        }
        x[i].style.border = `thick solid ${proc[i]}`
    }
     console.log(proc)

}

// Promises

// let data = null;

// setTimeout(() => console.log('Hello Birjees'), 1000);

// function fetchPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => console.log(data));
// }

// console.log(fetchPosts());