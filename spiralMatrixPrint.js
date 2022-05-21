var arr = [ [1,2,3],[4,5,6],[7,8,9] ];
var arr3 = [ [1,2],[4,5] ];

var arr2 = [[4,1,2,4,5],[7,5,3,10,6],[8,9,6,10,10],[1,2,34,5,6],[10,2,3,4,5]];

var arr4 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

let spiralMatrixForm = function(arr){
    let n = arr.length;
    let arr1 = [];
    
    while(arr.length > 0){
        firstRow();
        lastColumn();
        lastRow();
        firstColumn();
        if(arr.length == 0){
            break;
        }
    }

    function firstRow(){
        if(arr[0]){
            var shiftArr = arr.shift();
            arr1 = arr1.concat(shiftArr);
        }
    }

    function lastColumn(){
        let n = arr.length;
        if(n > 0){
            for (var i = 0; i < n; i++) {
                let popEle = arr[i].pop();
                arr1.push(popEle);
            }
        }
    }

    function lastRow(){
        let n = arr.length;
        if(n > 0){
            let popEleArr = arr.pop();
            popEleArr.reverse();
            arr1 = arr1.concat(popEleArr);
        }
    }

    function firstColumn(){
        let n = arr.length;
        if(n > 0){
            for (var i = n - 1; i >= 0; i--) {
                let shiftEle = arr[i].shift();
                arr1.push(shiftEle);
            }
        }
    }

    
    return arr1.join(',');
}


var result = spiralMatrixForm(arr);
console.log(result);

result = spiralMatrixForm(arr3);
console.log(result);

result = spiralMatrixForm(arr2);
console.log(result);

result = spiralMatrixForm(arr4);
console.log(result);



/*

Input
1    2    3
4    5    6
7    8    9

Output:
1,2,3,6,9,8,7,4,5

For 4*4 matrix
Input:
1    2    3    4    
5    6    7    8
9    10   11   12
13   14   15   16

Output:
1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10

*/

