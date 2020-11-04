function merge(arrayLeft,arrayRight) {
    let indexLeft = 0;
    let indexRight = 0;
    let results = [];
    while(indexLeft < arrayLeft.length  && indexRight < arrayRight.length) {
        if(arrayLeft[indexLeft] < arrayRight[indexRight] ) {
            results.push(arrayLeft[indexLeft ++])
        }else {
            results.push(arrayRight[indexRight ++])
        }
    }
    var leftRemains = arrayLeft.slice(indexLeft)
    var rightRemains = arrayRight.slice(indexRight)

    return results.concat(leftRemains).concat(rightRemains)
    
}


module.exports = merge;
