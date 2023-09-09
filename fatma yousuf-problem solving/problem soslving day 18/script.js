function calculate(height) {

    let left = 0;

    let right = height.length - 1;

    let leftMax = 0;

    let rightMax = 0;

    let blueUnits = 0;


    while (left < right) {

        if (height[left] <= height[right]) {

            if (height[left] >= leftMax) {

                leftMax = height[left];

            } else {

                blueUnits += leftMax - height[left];

            }

            left++;

        } else {

            if (height[right] >= rightMax) {

                rightMax = height[right];

            } else {

                blueUnits += rightMax - height[right];

            }

            right--;

        }
    }


    return blueUnits;

}



const heights1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const output1 = calculate(heights1);

 

const heights2 = [4, 2, 0, 3, 2, 5];

const output2 = calculate(heights2);

 

console.log(output1);

console.log(output2);