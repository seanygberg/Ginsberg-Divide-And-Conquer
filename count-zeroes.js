function countZeroes(array) {
  let numZeroes = 0;
  let firstZero = findFirstZero(array);
  if (firstZero > -1) {
      numZeroes = array.length - firstZero;
  }
  return numZeroes;
}

function findFirstZero(array, left = 0, right = array.length-1) {
    if (left <= right) {
        let midPoint = Math.floor((left + right) / 2);
        if (array[midPoint] === 0 && (midPoint === 0 || array[midPoint-1] === 1)) {
          return midPoint;
        }
        if (array[midPoint] === 1) {
          return (findFirstZero(array, midPoint + 1, right));
        }
        return (findFirstZero(array, left, midPoint - 1));
    }
    return -1;
}

module.exports = countZeroes