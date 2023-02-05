// Problem Link
// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 1;
    while(true){
      j = i * i;
      if(j == x){
        return i;
      }else if(j > x){
        return --i;
      }else{
        ++i;
      }
    }
};
// Binary Search
var mySqrt1 = function(x) {
  if (x<=1) {
      return x
  }
  var min = 1, max= x
  while (min <= max) {
      let mid = min + Math.floor((max-min)/2);
      if (mid*mid >x) {
          if ((mid-1)*(mid-1)<x) {
              return mid-1
          }
          max = mid -1;
      } else {
          if ((mid+1) *(mid+1) > x) {
              return mid;
          }
          min = mid +1;
      }
  }
};

let result = mySqrt(15);
console.log(result);