<?php

// Problme Link from Hacker Rank
// https://www.hackerrank.com/challenges/palindrome-index/problem?isFullScreen=true


function palindromeIndex($s) {
    
	$rev_str = strrev($s);

	if($rev_str === $s){
		return -1;
	}
	$n = strlen($s);
	for ($i=0; $i < $n; $i++) { 
		$temp = $s;
		$new_str = substr_replace($temp,'',$i,1);
		$rev_str = strrev($new_str);
		if($new_str === $rev_str){
			return $i;
		}
	}
	return -1;

}

// STDIN   Function
// -----   --------
// 3       q = 3
// aaab    s = 'aaab' (first query)
// baa     s = 'baa'  (second query)
// aaa     s = 'aaa'  (third query)

// 3
// 0
// -1

$string = 'aaa';

echo palindromeIndex($string);