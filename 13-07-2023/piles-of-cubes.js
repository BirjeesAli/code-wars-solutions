// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3,
// the cube above will have volume of (n−1)^3 and so on until the top which will have a volume of 1^3.

function findNb(m) {
    const cube = function(n){
       let res = 0
       for (let i=n; i>0; --i){
           res += Math.pow(i, 3)
       }
       return res
    }

   let prev = 0, n = 2

   while(true){
       let guess = cube(n);

       if (guess === m) return n;
       else if (guess<m){
           prev = n, n += 80;
       }
       else {
           break
       }
   }
   for (let num = prev; num < n; num ++){
       if(cube(num) === m) return num
   }
   return -1
}


console.log(findNb(91968291800100));

// function findNbOrg(m) {
//     for (let n = 1; n<m; n++){
//         // console.log("Checking:",n)
//         let res = 0
//         for (let i=n; i>0; --i){
//             if (res > m) break
//             res += Math.pow(i, 3)
//         }
//         // console.log(n, res, m)
//         if (res > m) break
//         if (res === m) return (n);
//         // if (n===46) return (n);
//     }
//     return(-1);
// }

