/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length;
    if(len <= 1){
        return 0;
    }
    let pointer1 = 0;
    let pointer2 = len - 1;
    let unitWater = 0;
    let LH = height[0];
    let RH = height[len-1];
    while(true){
        let increase = 0;
        if(height[pointer1] > height[pointer2]){
            --pointer2;
            if(RH < height[pointer2]){
                RH = height[pointer2];
            }
            if((height[pointer2] < height[pointer2 + 1]) || (RH > height[pointer2])){
                increase = RH - height[pointer2];
            }
        }else{
            ++pointer1;
            if(LH < height[pointer1]){
                LH = height[pointer1];
            }
            if((height[pointer1] < height[pointer1 - 1]) || (LH > height[pointer1])){
                increase = LH - height[pointer1];
            }
        }
        if(pointer1 == pointer2){
            break;
        }
        
        unitWater += increase;
    }
    // console.log(unitWater);
    return unitWater;
};



// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.


// Input: height = [4,2,0,3,2,5]
// Output: 9