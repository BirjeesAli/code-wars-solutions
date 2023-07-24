let board = document.getElementsByClassName("board")[0];
let currentRow = 0;
let ToGuess = 'CREED'
window.addEventListener('keyup', function(event) {
    if (event.key === "Backspace"){
        clearField(board.children[currentRow]);
    }

    else if (event.key === "Enter"){
        matchWord(board.children[currentRow]);
    }

    const match = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", key = event.key.toLocaleUpperCase();
    if (match.includes(key)){
        return updateField(board.children[currentRow], key)
    }
});

function clearField(row){
    for (let idx = row.childElementCount-1; idx>=0; idx--){
        const cell = row.children[idx];
        const para = cell.children[0];
        if (para.textContent != '') {
            para.textContent = '';
            cell.style.borderColor = '#3a3a3c';
            cell.classList.remove("animate__bounceIn");
            cell.style.setProperty('--animate-duration', '0.5s');
            break;
        }
    }
}


function updateField(row, char){
    for (let cell of row.children){
        const para = cell.children[0];
        if (para.textContent == '') {
            para.textContent = char;
            cell.style.borderColor = '#565758';
            cell.classList.add('animate__bounceIn')
            cell.style.setProperty('--animate-duration', '0.5s');
            break;
        }
    }
}

function transit(cell, color){
    cell.style.setProperty('background-color', `var(${color})`)
}


function matchWord(row){
    // console.log('A')
    let word = ''
    for (idx = row.childElementCount-1; idx >=0; idx--){
        let cell = row.children[idx];
        txt = cell.textContent;
        if (txt == ''){
            alert("Please complete the word!")
            return
        }

        if (txt == ToGuess[idx]){
            // cell.style.setProperty('background-color', 'var(--color-correct)')
            transit(cell, '--color-correct');
            console.log(cell);
            // return
        }

        word += String(txt);
    }
    currentRow += 1;
    if (currentRow > 1){
        alert("Better luck next time!")
    }


    console.log(word)

    // if (word.length < 5){
    //     alert("Please complete the word!")
    // }

    return word;
}


function wobbleRow(row){
    console.log(row)
    // let row = board.children[currentRow];
    // row.style.setProperty('--animate-duration', '1s');
    row.classList.add("animate__bounceIn");
    // row.classList.remove("animate__bounceIn");
    return row;
    // console.log(row)
    for (let cell of row.children){
        console.log(cell);
    }
  }