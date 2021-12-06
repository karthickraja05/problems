<?php 


function insertionSort1($n, $arr) {
    $sort_int = $arr[$n-1];
    for ($i=$n - 2; $i >= 0; $i--) { 
        if($arr[$i] > $sort_int){
            $arr[$i+1] = $arr[$i]; 
            
            foreach ($arr as $a) { echo $a." "; }
            echo "<br/>";
            if($i == 0){
            	$arr[$i] = $sort_int; 
            	break;
            }
        }else{
        	$arr[$i+1] = $sort_int; 
            break;
        }        
    }   
    //exit();
    foreach ($arr as $a) { echo $a." "; }
    
}


//$arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
$arr = [2, 4, 6, 8, 3];
$n = 5;
insertionSort1($n,$arr);
