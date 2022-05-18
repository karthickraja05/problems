var arr = [ [5,6,8],[1,3,0],[15,26,2] ];

function printSnakeFormat(arr){
	let length = arr.length;

	let result = [];

	for(let i = 0 ; i < length; i++){
		if(i % 2 == 0){
			for(let j = 0; j < arr[i].length; j++){
				result.push(arr[i][j]);
			}
		}else{
			for(let j = arr[i].length - 1; j >= 0; j--){
				result.push(arr[i][j]);
			}
		}
	}

	return result;

}



printSnakeFormat(arr);