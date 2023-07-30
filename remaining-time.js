// Write a function which formats a duration, 
// given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". 
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.


function formatDuration (seconds) {
    if (seconds == 0) return "now";
    const minute = Math.floor(seconds/60), hour = Math.floor(minute/60), days=(hour/24), years=(days/365);
    ref = {"year": Math.floor(years), "day": Math.floor(days%365), "hour": Math.floor(hour%24), "minute": Math.floor(minute%60), "second": seconds%60};
    res = ""    

    for (let key of Object.keys(ref)){
        if (ref[key] == 0) delete ref[key];
    }

    for (let i in ref){
        if (i!=0){
            idx = Object.keys(ref).indexOf(i)
            if (Object.keys(ref).length > 1 && idx == Object.keys(ref).length-1) res += "and "
            res += ref[i]+" "+i+((ref[i] > 1)?"s":'')
            if (idx != Object.keys(ref).length-2 && Object.keys(ref).length > 2 && idx < Object.keys(ref).length-1) res += ","
            if (Object.keys(ref).length > 1 && idx != Object.keys(ref).length-1) res += " "
        }
    }
    return res
  }


console.log(formatDuration(15731080));