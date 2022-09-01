<?php

// Problem Link
// https://www.hackerrank.com/challenges/runningtime/problem?isFullScreen=true

function runningTime($arr) {
    $len = count($arr);
    $shifts = 0;
    for ($i=0; $i < $len - 1; $i++) {

    	for ($j = $i+1; $j < $len; $j++) { 
    		
    		if($arr[$i] >= $arr[$j]){
    			if($arr[$i] == $arr[$j]){
    				$shifts += $j - 1;	
    			}else{
    				$shifts += $j;	
    			}
    			$temp = $arr[$j];
    			unset($arr[$j]);
    			array_unshift($arr, $temp);
    			
    		}			

    	}	
    	echo $shifts;
    	print_r($arr);
    	if($i == 1){
    		
    	exit();
    	}
    }

    echo $shifts;
    print_r($arr);

}
$a = [4,3,2,1];
$b = [2 ,1, 3, 1, 2];
runningTime($b);