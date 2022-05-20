var arr = [ [1,2,3],[4,5,6],[7,8,9] ];
var arr3 = [ [1,2],[4,5] ];

var arr2 = [[4,1,2,4,5],[7,5,3,10,6],[8,9,6,10,10],[1,2,34,5,6],[10,2,3,4,5]];


let rotateClockWiseFormat1 = function(arr){
    let n = arr.length;
    let arr1 = [];

    for (var i = 0; i < n; i++) {
        arr1.push([]);    
    }

    let deepIndex = n - 1 - Math.floor(n / 2);
    
    for (var i = 0; i <= deepIndex; i++) {
        let firstIndex = i;
        let lastIndex = n - 1 - i;
        if(firstIndex == lastIndex){
            arr1[firstIndex][lastIndex] = arr[firstIndex][lastIndex];
            break;
        }
        firstRowChange(firstIndex,lastIndex,arr);
        lastColumnChange(firstIndex,lastIndex,arr);
        lastRowChange(firstIndex,lastIndex,arr);
        firstColumnChange(firstIndex,lastIndex,arr);
    }


    function firstRowChange(firstIndex,lastIndex,arr){
        for (var i = firstIndex; i < lastIndex; i++) {
            arr1[firstIndex][i+1] = arr[firstIndex][i];
        }
    }

    function firstColumnChange(firstIndex,lastIndex,arr){
        for (var i = lastIndex; i > firstIndex; i--) {
            arr1[i-1][firstIndex] = arr[i][firstIndex];
        }
    }

    function lastRowChange(firstIndex,lastIndex,arr){
        for (var i = lastIndex; i > firstIndex; i--) {
            arr1[lastIndex][i-1] = arr[lastIndex][i];
        }
    }

    function lastColumnChange(firstIndex,lastIndex,arr){
        for (var i = firstIndex; i < lastIndex; i++) {
            arr1[i+1][lastIndex] = arr[i][lastIndex];
        }
    }

    return arr1;
}


var result = rotateClockWiseFormat1(arr3);
console.log(arr3);
console.log(result);


/*

Input
1    2    3
4    5    6
7    8    9

Output:
4    1    2
7    5    3
8    9    6

For 4*4 matrix
Input:
1    2    3    4    
5    6    7    8
9    10   11   12
13   14   15   16

Output:
5    1    2    3
9    10   6    4
13   11   7    8
14   15   16   12

*/