// Ramanujan’s 2-way solution
function ramanujan2Number(upto) {
  let result = [];
  let ways = 2;
  let pow = 3;
  let i = 1;
  while (i < upto) {
      let tempResult = [];
      let j = 1;
      while (true) {
          let singleVal = Math.pow(j, pow);
          if (singleVal > i) {
              break;
          }
          let k = j;
          while (k >= 1) {
              let singleVal2 = Math.pow(k, pow);
              let sumVal = singleVal + singleVal2;
              if (sumVal == i) {
                  tempResult.push([j, k]);
                  break;
              }
              if (sumVal < i) {
                  break;
              }
              k--;
          }
          if (tempResult.length == ways) {
              result.push([i, tempResult]);
          }
          j++;
      }
      i++;
  }
  console.log(result)
}

