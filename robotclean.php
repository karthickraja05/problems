<?php
	function solution($R) {
    $row_count = count($R) - 1;
    $col_count = strlen($R[0]) - 1;
    
    $travel_path = [];
    
    $flow_method = [
      'right' => 'cplus',
      'down' => 'rplus',
      'left' => 'cminus',
      'up' => 'rminus',
      ];
      
    $direction = 'right';
    $detect = 0;
    $i = 0;
    $j = 0;
    $travel_path[] = '0,0';
    $k = 0;
    while(true){
     if($detect > 2){
       break;
     }
     if($flow_method[$direction] == 'cplus'){
       if($col_count == $j || $R[$i][$j] == 'X'){
         $direction = 'down';
       }else{
         $j++;
         if($R[$i][$j] == 'X'){
           $j--;
           $direction = 'down';
         }
       }
       
     }else if($flow_method[$direction] == 'rplus'){
       if($row_count == $i || $R[$i][$j] == 'X'){
         $direction = 'left';
       }else{
         $i++;
         if($R[$i][$j] == 'X'){
           $i--;
           $direction = 'left';
         }
       }
       
     }else if($flow_method[$direction] == 'cminus'){
       if($j == 0 || $R[$i][$j] == 'X'){
         $direction = 'up';
       }else{
         $j--;
         if($R[$i][$j] == 'X'){
           $j++;
           $direction = 'up';
         }
       }
       
     }else if($flow_method[$direction] == 'rminus'){
       if($i == 0 || $R[$i][$j] == 'X'){
         $direction = 'right';
       }else{
         $i--;
         if($R[$i][$j] == 'X'){
           $i++;
           $direction = 'right';
         }
       }
       
     }
     
     
      $temp_node = "$i,$j";
     if(in_array($temp_node,$travel_path)){
       $detect++;
     }else{
       $travel_path[] = $temp_node;
     }
    }
    echo count(array_unique($travel_path));
    
    print_r($travel_path);
    
      
  }
  
  
  
  
  
  
  $arr = [
    '...X..',
    '....XX',
    '..X...',
    ];
  
  solution($arr);
  
?>