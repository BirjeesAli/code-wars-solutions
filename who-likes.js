// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

function likes(names) {
    let likes = names.length;
    if (likes == 0) return `no one likes this`;
    if (likes == 1) return `${names[0]} likes this`;
    if (likes == 2) return `${names[0]} and ${names[1]} like this`;
    if (likes == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Jimmy']))