function findFloor(array, target, left = 0, right = array.length - 1) {
    if (left <= right) {
        if (target >= array[right]) {
            return array[right];
        }
        let midPoint = Math.floor((left + right) / 2);
        if (midPoint > 0 && array[midPoint - 1] <= target && target < array[midPoint]) {
            return array[midPoint - 1];
        }
        if (array[midPoint] > target) {
            return findFloor(array, target, left, midPoint - 1);
        }
        return findFloor(array, target, midPoint + 1, right);

    }
    return -1;
}

module.exports = findFloor