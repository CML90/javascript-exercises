const sumAll = function (numStart, numEnd) {

    if(!Number.isInteger(numStart) || !Number.isInteger(numEnd)) return "ERROR";
    if(numStart < 0 || numEnd < 0) return "ERROR";

    if (numEnd < numStart) {
        let temp = numStart;
        numStart = numEnd;
        numEnd = temp;
    }

    let sum = 0;
    for (numStart; numStart <= numEnd; numStart++) {
        sum += numStart;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
