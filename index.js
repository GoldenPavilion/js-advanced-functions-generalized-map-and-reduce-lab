function map(sourceArray, func){
    let array = []
        for (let i = 0; i < sourceArray.length; i++){
            let element = sourceArray[i]
            array.push(func(element))
        }
    return array
}

function reduce (sourceArray, func, startingValue) {
    let tempValue;

    if(startingValue) {
        tempValue = startingValue;
        for (let i = 0; i < sourceArray.length; i++) {
            tempValue = func(sourceArray[i], tempValue);
        }
    }

    else {
        tempValue = sourceArray[0];
        for (let i = 1; i < sourceArray.length; i++) {
            tempValue = func(sourceArray[i], tempValue);
        }
    }
    return tempValue;
}