
exports.min = function min (array) {
  if (array.length === 0 || array == null ) {
    return 0;
}

let minNumber = Math.min(...array);
return minNumber;
};


exports.max = function max (array) {
  if (array.length === 0 || array == null) {
    return 0;
}

let maxNumber = Math.max(...array);
return maxNumber;
};

exports.avg = function avg (array) {
  if (array.length === 0 || array == null) {
    return 0;
}
let sum = 0;
let averageNumber;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
averageNumber = sum / array.length;
return averageNumber;
};