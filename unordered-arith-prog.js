function find_missing(seq) {
    for (i=0; i<seq.length; i++){
        let flag = false
        for (j=i+1; j<seq.length; j++){
            if (seq[j]===(seq[i]+1) && seq[i]>=0){
                flag = true
            }
            if (seq[j]===(seq[i]-1) && seq[i]<0){
                flag = true
            }
        }
        if (flag === false){
            return seq[i]+1
        }
    }
}

console.log(find_missing([1, 3, 4]))