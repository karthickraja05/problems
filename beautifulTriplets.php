<?php



function beautifulTriplets($d, $arr) 
{
	$n = count($arr);
	$result = 0;
	for ($i=0; $i < $n - 2; $i++) { 
		
		for ($j = $i + 1 ; $j < $n - 1; $j++) { 
			if($arr[$j] - $arr[$i] == $d){

				for ($k= $j + 1; $k < $n; $k++) { 
					if($arr[$k] - $arr[$j] == $d){
						$result++;
						//$temp[] = [ $arr[$i] , $arr[$j] , $arr[$k] ];
					}
				}

			}
		}

	}

	return $result;


}


$arr = [1,2,4,5,7,8,10];

echo beautifulTriplets(3,$arr);