function isPow(N) {

 

    if (N < 0) {

        return false;

    }

 

   

    let count = 0;

    while (N > 0) {

        count += N & 1;

        N >>= 1;

    }

 

    return count === 1;

}

 

console.log(isPow(8));