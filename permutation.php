<?php

ini_set('memory_limit', '-1');

function findForThree($str){
	return [
		$str[0].$str[1].$str[2],
		$str[0].$str[2].$str[1],
		$str[1].$str[0].$str[2],
		$str[1].$str[0].$str[0],
		$str[2].$str[0].$str[1],
		$str[2].$str[1].$str[0],
	];
}

function deleteNode($llist, $position) {
    $result = [];
    for($i = 0 ; $i < count($llist); $i++){
        if($i != $position){
            $result[] = $llist[$i];
        }
    }
    
    return $result;
}

function findPermutationWord($word)
{	
	$length = strlen($word);
	if($length == 3){
		return findForThree($word);
	}
	$org = $word;
	$final = [];
	for ($i = 0; $i < $length; $i++) { 
		$org = $word;
		$temp = $org[0];
		$org[0] = $org[$i];
		$org[$i] = $temp;

		if($length == 4){
			$new = substr($org, $length - 3);
			$result = findForThree($new);

			foreach ($result as $value) {
				$final[] = $org[0].$value;
				// echo "<br/>";
			}
		}else{
			$new = substr($org, 1);
			// echo "---";
			$temp = findPermutationWord($new);

			foreach ($temp as $value) {
				$final[] = $org[0].$value;
			}

		}
		
	}


	return $final;
}

$word = 'karthickraja';

$result = findPermutationWord($word);

echo 'length '.strlen($word);
echo "<br/>";
echo 'Total Count of '.count($result);
echo "<br/>";

foreach ($result as $value) {
	echo $value;
	echo "<br/>";
}


