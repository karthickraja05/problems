<?php



function stones($n, $a, $b) {
    $arr = [];
	for ( $i= 0; $i < $n; $i++) { 
		$arr[] = $a;
 	}

 	$result = recursion($arr);

 	print_r($result);

}

function recursion($arr){

	$length = count($arr);
	if($length == 2){
		return [
			[ $arr[0] , $arr[1] ],
			[ $arr[1] , $arr[0] ],
		];
	}

	for ( $i = 0; $i < $length; $i++) { 

		$temp = $arr[0];
		$arr[0] = $arr[$i];
		$arr[$i] = $temp;

		$a = array_slice($arr, $length - 2);

		print_r($a);
		exit();
	}



}


$n = 3;
$a = 1;
$b = 2;


// 2 x 1 ) 2 = 4
// 3 x 2 x 1 ) 2 = 12

// 1,1,1
// 1,1,2
// 1,2,1
// 2,1,1
// 1,2,2
// 2,2,2
// 2,1,


stones($n,$a,$b);