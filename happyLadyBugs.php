<?php

// Problme Link from Hacker Rank
// https://www.hackerrank.com/challenges/happy-ladybugs/problem?isFullScreen=true

function happyLadybugs($b) {
    
    $str_arr = str_split($b);
    if (!in_array('_', $str_arr) && count($str_arr) == 1){
    	return 'NO';
    }else if (!in_array('_', $str_arr) && count(array_unique($str_arr)) == 1){
    	return 'YES';
    }elseif (!in_array('_', $str_arr)) {

    	$i = 0;
    	$start = '';
    	
    	foreach ($str_arr as $key => $value) {
    		if($key == 0){
    			$start = $value;
    			continue;
    		}

    		if($start == $value){
    			$start = $value;
    			$i++;
    		}else{
    			if($i == 0){
    				return 'NO';
    			}
    			$i = 0;
    			$start = $value;
    		}

    	}

    	return $i == 0 ?  'NO' : 'YES';

    }

    $newStr = str_replace('_', '', $b);
    if($newStr == '') return 'YES';
    $str_arr = str_split($newStr);
    if(count($str_arr) == 1) return 'NO';
    $str_arr1 = array_unique($str_arr);
    if(count($str_arr) == 1) return 'YES';

    foreach ($str_arr1 as $key => $checkKey) {
    	$i = 0;
    	foreach ($str_arr as $verifyKey) {
    		if($verifyKey == $checkKey){
    			$i++;
    			if($i > 1){
    				unset($str_arr1[$key]);
    				break;
    			}
    		}
    	}	
    }

    return count($str_arr1) ? 'NO' : 'YES';    

}



// 7
// AABBC
// 6
// X_Y__X
// 2
// __
// 6
// B_RRBR
// RRGGBBXX

// YES
// NO
// YES
// YES
// YES

$string = 'G';

echo happyLadybugs($string);