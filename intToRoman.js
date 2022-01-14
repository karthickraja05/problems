// Problem Link
// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {string} s
 * @return {number}
 */
var intToRoman = function(num) {
    let romanDict = {
        1 : 'X',
        5 :'L',
        10 :'C',
        50 :'D',
        100 :'M'
    };

    var simpleRoman = function(num1){
        let re = '';
        if(num1 == 0){
            return '';
        }
        if(num1 <= 3){

            for (var i = 0; i < num1; i++) {
                re += 'I';  
            }
        }else if(num1 <= 5){
            re = num1 == 5 ? 'V' : 'IV';
        }else{
            if(num1 == 9){
                re = 'IX';
            }else{
                re += 'V';
                for (var i = 0; i < num1 - 5; i++) {
                    re += 'I';  
                }   
            }
        }
        return re;
    }
    
    if(num < 10){
        return simpleRoman(num);
    }

    
    var hundRoman = function(num1){
        let re = '';

        let remainder = num1 % 10;
        let end = '';
        if(remainder != 0){
            end = simpleRoman(remainder);
        }

        let bal = Math.floor(num1 / 10);
        let bal1 = bal * 10;
        
        if(bal1 < 50){
            if(bal1 < 40){
                let n = bal;
                re += ('X'.repeat(n));
            }else{
                re += 'XL';
            }
        }else{
            if(bal1 < 90){
                let n = bal - 5;
                re += 'L'+ ('X'.repeat(n));
            }else{
                re += 'XC';
            }
        }

        re += end;
        return re;
    }

    var thousandNum = function(num3){
        let bal = Math.floor(num3 / 100);        
        let new2 = num3 - (bal * 100);
        let re = '';
        if(num3 < 900){
            let n = bal - 5;
            if(n < 0){
              n = 0;  
            }
           if(num3 < 400){
                re += 'C'.repeat(bal);
            }else if(num3 < 500){
                re += 'CD'
            }else{
                re += 'D'+'C'.repeat(n);    
            }
            
        }else{
            re += 'CM'
        }
        let end = hundRoman(new2);
        return re += end;
    }

    var remainder = num % 10;
    var bal = Math.floor(num / 10);
    
    if(!romanDict[bal] || remainder != 0){
        if(num < 100){
            return hundRoman(num);
        }else if (num < 500) {
            let bal = Math.floor(num / 100);        
            let new2 = num - (bal * 100);
            let re = '';
            if(num < 400){
                re += 'C'.repeat(bal);
            }else{
                re += 'CD'
            }
            let end = hundRoman(new2);
            return re += end;
        }else if(num < 1000){
            return thousandNum(num);
        }else{
            let bal = Math.floor(num / 1000);        
            let new2 = num - (bal * 1000);
            let re = '';
            re += 'M'.repeat(bal);
            let end = thousandNum(new2);
            return re += end;
        }
    }else{
        return romanDict[bal];
    }
    
};


/*
Input - Output: 
1400 - MCD
9 - IX
*/