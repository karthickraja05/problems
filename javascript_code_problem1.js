let person1 = {
    name_string: "Sssds",
    age_int: 23.3,
    male_bool: true,
    male_float: 23.67
};

function validObj(person1){
    let allowed_type = [
        'string',
        'int',
        'float',
        'number',
        'bool',
    ];

let obj_keys = [];
for(key in person1){
    let temp = [];
    let split_key = key.split('_');
    temp.push(split_key[0]);
    temp.push(split_key[1]);
    temp.push(person1[key]);
    temp.push(key);
    obj_keys.push(temp);
}

for(keys of obj_keys){
    let typeOf = typeof keys[2];
    if(typeOf == 'boolean'){
        typeOf = 'bool';
    }
    
    if(allowed_type.includes(keys[1])){
        if(typeOf != keys[1]){
            if(typeOf == 'number' && (keys[1] == 'int' || keys[1] == 'float')){
                if(Number.isInteger(keys[2]) && keys[1] == 'float'){
                    throw 'error';
                }
                
                if(!Number.isInteger(keys[2]) && keys[1] == 'int'){
                    throw 'error';
                }
            }else{
                throw 'error';
            }
        }
    }
}
return person1;
}

console.log(validObj(person1));

// typeCheck should validate number on property creation
// Output (stderr):
// AssertionError: Object shouldn't be updated with an invalid number: expected '20' to not equal '20'
//     at checkFutureValidation (verify.test.js:47:69)
//     at Context.<anonymous> (verify.test.js:112:9)
//     at processImmediate (internal/timers.js:461:21)
// WRONG ANSWER

// typeCheck should validate int on property creation
// Output (stderr):
// AssertionError: Object shouldn't be updated with an invalid int: expected '12' to not equal '12'
//     at checkFutureValidation (verify.test.js:47:69)
//     at Context.<anonymous> (verify.test.js:115:9)
//     at processImmediate (internal/timers.js:461:21)
// WRONG ANSWER