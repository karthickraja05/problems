var arr = [ [5,6,8],[1,3,0],[15,26,2] ];

let till90 = function(arr){
    let n = arr.length;
    let arr1 = [];

    for(let k = 0; k < n; k++){
        arr1.push([]);
    }
    
    
    let first = arr[n - 1];
    let c = n - 1;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n ; j++){
            arr1[j][i] = first[j];   
        }
        c--;
        first = arr[c];
    }
    console.log(arr1);

    return arr1;
}


till90(arr);


/*

i/p:

5  6  8
1  3  0  
15 26 2


o/p:

15 1  5
26 3  6  
2  0  8

*/