let minValue = 0;
exports.min = function min (array) {
  if (array.length === 0) {
    return 0;
  } else {
    let sortArr = array.sort((a, b) => a -b);
     minValue = sortArr[0];
  }
  return minValue;
}
let maxValue = 0;
exports.max = function max (array) {
  if (array.length === 0) {
    return 0;
  } else {
    let sortArr = array.sort((a, b) => a -b);
    maxValue = sortArr[sortArr.length - 1];
  }
  return maxValue;
}
let avgValue = 0;
exports.avg = function avg (array) {
  if(array.length === 0){
    return 0;
  } else {
    let myCallback = ( total, currentValue, currentIndex, arr ) => {  
      return total + currentValue; 
    }
    let result = array.reduce(myCallback);
    avgValue = result/array.length;
  }
  return avgValue;
}
