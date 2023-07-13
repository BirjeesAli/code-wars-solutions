// You are an aerial firefighter (someone who drops water on fires from above in order to extinguish them) and 
// your goal is to work out the minimum amount of bombs you need to drop in order to fully extinguish the fire 
// (the fire department has budgeting concerns and you can't just be dropping tons of bombs, 
// they need that money for the annual christmas party).

// The given string is a 2D plane of random length consisting of two characters:

// x representing fire
// Y representing buildings.
// Water that you drop cannot go through buildings and therefore individual sections of fire must be addressed separately.


function waterbombs(fire, w) {
    res = 0
    for (const burn of fire.split("Y")) {res+=(Math.ceil(burn.length/w))}
    return res
}


console.log(waterbombs("xx", 1))
