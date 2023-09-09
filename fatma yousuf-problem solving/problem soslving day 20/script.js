function tRainwater(height) {

    const n = height.length;

    let left = 0;

    let right = n - 1;

    let leftMax = 0;

    let rightMax = 0;

    let water = 0;

 

    while (left < right) {

        if (height[left] < height[right]) {

            if (height[left] > leftMax) {

                leftMax = height[left];

            } else {

                water += leftMax - height[left];

            }

            left++;

        } else {

            if (height[right] > rightMax) {

                rightMax = height[right];

            } else {

                water += rightMax - height[right];

            }

            right--;

        }

    }


    return water;

}


const elevationMap = [3,0,0,2,0,4];

const trappedWater = tRainwater(elevationMap);

console.log(trappedWater);