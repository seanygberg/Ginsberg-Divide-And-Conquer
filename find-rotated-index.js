function findRotatedIndex(array, target) {
    let pivot = findPivot(array);
    if (array[pivot] === target) {
        return pivot;
    }
    if (pivot === -1) {
        return binarySearch(array, target, 0, array.length - 1);
    }
    if (target >= array[0] && target < array[pivot]) {
        return binarySearch(array, target, 0, pivot - 1);
    }
    return binarySearch(array, target, pivot, array.length - 1);
}

function binarySearch(array, target, left, right) {
    while (left <= right) {
        let midPoint = Math.floor((left + right) / 2);
        if (array[midPoint] === target) {
            return midPoint;
        } else if (array[midPoint] < target) {
            left = midPoint + 1;
        } else {
            right = midPoint - 1;
        }
    }
    return -1;
}

function findPivot(array, left = 0, right = array.length - 1) {
    while (left <= right) {
        let midPoint = Math.floor((left + right) / 2);
        if (array[midPoint] > array[midPoint + 1]) {
            return midPoint;
        }
        if (array[left] <= array[midPoint]) {
            left = midPoint + 1;
        } else {
            right = midPoint - 1;
        }
    }
    return -1;
}

module.exports = findRotatedIndex