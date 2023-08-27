

function numbers(arrayN) {
    const postive = [];
    const negative = [];
    const result = [];
 
    for (const num of arrayN) {
        if (num >= 0) {
            postive.push(num);
        } else {
            negative.push(num);
        }
    }
 
    let posIndx = 0;
    let negIndx = 0;
 
    for (let i = 0; i < arrayN.length; i++) {
        if (i % 2 === 0) {
            result.push(postive[posIndx]);
            posIndx++;
        } else {
            result.push(negative[negIndx]);
            negIndx++;
        }
    }
 
    return result;
 }

 const input=[9,4,-2,-1,5,0,-5,-3,2]
 const nArray=numbers(input)
 console.log(nArray)