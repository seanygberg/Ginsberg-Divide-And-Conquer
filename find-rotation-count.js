function findRotationCount(array, left = 0, right = array.length - 1) {
    while (left <= right) {
        let midPoint = Math.floor((left + right) / 2);
        if (midPoint < right && array[midPoint] > array[midPoint+1]) {
            return midPoint + 1;
        }
        if (midPoint > left && array[midPoint] < array[midPoint-1]) {
            return midPoint;
        }
        if (array[midPoint] >= array[left]) {
            left = midPoint + 1;
        } else {
            right = midPoint - 1;
        }
    }
    return 0;
}

module.exports = findRotationCount