
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    return Math.min(...array);
  }
  
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    return Math.max(...array);
  }
  
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    let summ = 0;
    for (let i = 0; i < array.length; i++) {
      summ += array[i];
      
    } return summ / array.length;
  }
  
}
