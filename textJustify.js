/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    return justifyText(words,maxWidth);
};


function justifyText(wordsArr,k){
    let resultArr = [];
    let finalResult= [];
    let len = wordsArr.length;
    let temp = '';
    
    function lenMathPush(){
        currentLen = temp.length;
        if(currentLen === k){
            resultArr.push(temp);
            temp = '';
            return true;
        }
        return false
    }
    
    function justifyEachLine(){
        let lines = resultArr.length;
        let last_line = lines - 1;
        for(let i = 0; i < lines;i++){
            if(last_line == i){
                finalResult.push(resultArr[i]);
                break;
            }else{
                finalResult.push(arrangeEachLine(resultArr[i]));
            }
        }
    }
    
    
    function arrangeEachLine(line){
        let lineArr = line.trim().split(' ');
        let orgWordsLen = lineArr.join('').length;
        let reqSpaces = k - orgWordsLen;
        let betweenSpaces = lineArr.length - 1;
        let balance = reqSpaces % betweenSpaces;
        if(betweenSpaces == 0){
            return line;
        }else{
            let formNewLine = '';
            let concatSpaces = Math.floor(reqSpaces / betweenSpaces);
            for(let j = 0; j < lineArr.length; j++){
                if(lineArr.length - 1 == j){
                    formNewLine += lineArr[j];
                }else{
                    formNewLine += addSpaces(lineArr[j],concatSpaces);
                }
                if(balance !== 0){
                    formNewLine += ' ';
                    balance--;
                }
            }
            return formNewLine;
            
        }
    }
    
    for(let i = 0; i < len; i++){
        let currentLen = temp.length;
        let lenWord = wordsArr[i].length;
        
        temp += wordsArr[i];
        currentLen = lenWord;
        
        if(!lenMathPush()){
            temp = temp + ' ';
            if(!lenMathPush()){
                let isPossibleToAdd = checkNextEle(wordsArr[i+1],temp,k);
                if(!isPossibleToAdd){
                    currentLen = temp.length;
                    let remainSpace = k - currentLen;
                    temp = addSpaces(temp,remainSpace);
                }    
            }
                
        }
        lenMathPush();
    }
    
    justifyEachLine()
    
    // console.log(resultArr);
    console.log(finalResult);
    return finalResult;
}

function checkNextEle(ele,temp,k){
    if(ele === undefined){
        return false;
    }
    let l1 = temp.length;
    let l2 = ele.length;
    if(l1+l2 <= k){
        return true;
    }else{
        return false;
    }
}


function addSpaces(string,n){
    for(let i = 0; i < n; i++){
        string = string + ' ';
    }
    
    return string;
}