<?php


function circularArrayRotation($a, $k, $queries) {
    // Write your code here
    
    $result = [];
    $n = count($a);
	if($k > $n)
		$k = $k % $n;

	foreach ($queries as $indice) {
		$val = $indice - $k;

		if($val < 0){
			$val = $val + $n;
		}
		$result [] = $a[$val];
	}
	print_r($result);
	return $result;

}



$arr = [3,4,5,6];
$k = 5;
$q = [0,1,2]; 

// 3,4,5 0,1,2 

// 5,3,4 2,0,1

// 4,5,3 1,2,0

// 3,4,5,6 0,1,2,3

// 6,3,4,5	3,0,1,2

// 5,6,3,4 2,3,0,1

// 4,5,6,3 1,2,3,0


circularArrayRotation($arr,$k,$q);