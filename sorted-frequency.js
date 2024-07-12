function sortedFrequency(array, target) {
    let firstIndex = findFirstOccurrence(array, target);
    let lastIndex = findLastOccurrence(array, target);
    if (firstIndex > -1) {
        return lastIndex - firstIndex + 1;
    }
    return -1;
}

function findFirstOccurrence(array, target, left = 0, right = array.length - 1) {
    let firstOccurrence = -1;
    while (left <= right) {
        let midPoint = Math.floor((left + right) / 2);
        if (array[midPoint] === target) {
            firstOccurrence = midPoint;
            right = midPoint - 1;
        } else if (array[midPoint] < target) {
            left = midPoint + 1;
        } else {
            right = midPoint - 1;
        }
    }
    return firstOccurrence;
}

function findLastOccurrence(array, target, left = 0, right = array.length - 1) {
    let lastOccurrence = -1;
    while (left <= right) {
        let midPoint = Math.floor((left + right) / 2);
        if (array[midPoint] === target) {
            lastOccurrence = midPoint;
            left = midPoint + 1;
        } else if (array[midPoint] < target) {
            left = midPoint + 1;
        } else {
            right = midPoint - 1;
        }
    }
    return lastOccurrence;
}

module.exports = sortedFrequency;
