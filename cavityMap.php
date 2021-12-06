<?php 


/*
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function cavityMap($grid) {
    // Write your code here
	$N = count($grid);
	$result = [];
	for ($i=0; $i < $N; $i++) { 
		if($i == 0 || $i == ($N-1)){
			$result[] = $grid[$i];
		}else{
			$n = strlen($grid[$i]);
			$temp = '';
			for ($j=0; $j < $n; $j++) { 
				if($j == 0 || $j == ($n-1)){
					$temp .= $grid[$i][$j];
				}else{
					if($grid[$i][$j] > $grid[$i][$j - 1] && $grid[$i][$j] > $grid[$i][$j + 1]){
						$temp .= 'X';
					}else{
						$temp .= $grid[$i][$j];	
					}
					
				}
			}
			$result[] = $temp;
			
		}
	}

	return $result;

}


//$grid = ['1112', '1912', '1892', '1234'];
$grid = ['179443854',
'961621369',
'164139922',
'968633951',
'812882578',
'257829163',
'812438597',
'176656233',
'485773814'];

$n = cavityMap($grid);
print_r($n);
