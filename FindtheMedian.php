// Problem Link
// https://www.hackerrank.com/challenges/find-the-median/problem?isFullScreen=false

function findMedian($arr) {
    sort($arr);
    
    $n = count($arr);
    
    if($n % 2 == 0){
        $i = floor($n / 2);
        return ($arr[$i] + $arr[$i - 1]) / 2;
    }else{
        $i = floor($n / 2);
        return $arr[$i];
    }
    

}
