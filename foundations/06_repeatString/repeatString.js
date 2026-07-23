const repeatString = function(str, num) {

    if(num < 0){return "ERROR"}

    let repeatedString = "";

    for(let x = 0; x < num; x++){
        repeatedString += str;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
