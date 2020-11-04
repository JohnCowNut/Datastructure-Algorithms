const merge = require('./merge');

function mergeSort(data) {
    if(data.length < 2) {
        return data;
    }
    let mindPoint = Math.floor(data.length / 2);
    let arrayLeft = data.slice(0,mindPoint);
    let arrayRight = data.slice(mindPoint,data.length)
    return mergeSort(merge(arrayLeft,arrayRight))
}
