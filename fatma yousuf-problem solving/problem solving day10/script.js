function checkElements(arrNumber, n, X, Y) {

    let st = new Set();



    for (let i = 0; i < n; i++) {

        st.add(arrNumber[i]);

    }

 

    for (let i = X; i <= Y; i++) {

 

        if (!st.has(i)) {

            return false;

        }

    }

 

    return true;

}

 

let arrNumber = [1, 4, 5, 2, 7, 8, 3];

let n = arrNumber.length;

 

let X = 2;

let Y = 5;

 

if (checkElements(arrNumber,n,X,Y)) {

    console.log("Yes");

}

else

 {

    console.log("No");

}

 