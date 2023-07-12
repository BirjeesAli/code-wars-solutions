// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

function likes(names) {
    let msg = ""
    if (names.length == 0) return `no one likes this` 
    if (names.length == 1) return `${names[0]} likes this`
    if (names.length > 3){
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
    else{
        for (const idx in names){
            if (idx == names.length-1) {
                msg = msg.slice(0, msg.length-2)+" and "+names[idx]+" like this"
            }
            else msg+= (names[idx]+", ")
        }
        return msg
    }
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

// Clever -------------------
// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//   }


// function likes(names) {
//     let msg = ""
//     if (names.length > 3){
//         return `${names[1]}, ${names[2]} and ${names.length-2} others like this`
//     }
//     else{
//         for (const idx in names){
//             ( idx < names.length-1 ? (msg+=names[idx]+",") : (msg+=names[idx]+","))
            // ( idx < names.length-1 ? (msg+= (names[idx]+",")) : (msg+=(names[idx]+",")))

//         }
//     }
// }



