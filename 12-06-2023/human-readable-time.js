function humanReadable (seconds) {
    const minute = Math.floor(seconds/60), hour = Math.floor(minute/60);
    // console.log(((String(hour).length < 2) ? "0"+hour : hour ))
    return `${ ( (String(hour).length < 2) ? "0"+hour : hour ) }:${ ( (String(minute%60).length < 2) ? "0"+minute%60 : minute%60 ) }:${( (String(seconds%60).length < 2) ? "0"+seconds%60 : seconds%60 )}`;
  }

console.log(humanReadable(50))
console.log(humanReadable(4250))
