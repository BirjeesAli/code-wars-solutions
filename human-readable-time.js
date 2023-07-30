// Write a function, which takes a non-negative integer (seconds) as input 
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    const minute = Math.floor(seconds/60), hour = Math.floor(minute/60);
    return `${ ( (String(hour).length < 2) ? "0"+hour : hour ) }:${ ( (String(minute%60).length < 2) ? "0"+minute%60 : minute%60 ) }:${( (String(seconds%60).length < 2) ? "0"+seconds%60 : seconds%60 )}`;
  }

console.log(humanReadable(60))
console.log(humanReadable(4250))
