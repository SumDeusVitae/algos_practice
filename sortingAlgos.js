'use strict'
// Random Array
const randomArray = function (n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * 9));
    }
    return result;
}
const testArray = randomArray(9);
console.log(`Original array ${testArray}`);
//
//Bubble Sort average time complexity O(n^2) 
// Quadratic time
const bubbleSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(`Bubble Sorting ${bubbleSort(testArray)}`);
//
// Insertion Sort average time complexity O(n^2) 
// Quadratic time
// Performs better if data 'mostly sorted' 
const insertion = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j > -1 && current < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
// console.log(`Insertion Sorting ${insertion(testArray)}`);
//
//Selection Sort average time complexity O(n^2) 
// Quadratic time
const selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[j]];
        }
    }
    return arr;
}
// console.log(`Selection Sorting ${selectionSort(testArray)}`);
//
// Merge Sort average time compxity O(n log n) Quasilinear time
// Requires extra memory
const mergeSort = function (arr) {
    const mid = arr.length / 2;

    if (arr.length < 2) {
        return arr;
    }

    const left = arr.splice(0, mid);
    return merge(mergeSort(left), mergeSort(arr));
}
function merge (left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}
// console.log(`Merge Sorting ${mergeSort(testArray)}`);
//
//Quick Sort average time compxity O(n log n) Quasilinear time
//
function quickSort (arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);

    return arr;
}
function partition (arr, left, right) {
    let pivotValue = arr[right];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}
function swap (arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}
// console.log(`Quick Sorting ${quickSort(testArray)}`);
//
// Cheat quicksort, performs a little worse than original
// Removes repeatables
const quickSortCheat = function (arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    return [...quickSortCheat(left), pivot, ...quickSortCheat(right)]
}
// console.log(`Quick Sorting(Cheat) ${quickSortCheat(testArray)}`);
//
// Redix Sorting O(k · (b + n))
// If maximum length of elements known and basis fixed, then O(n)
//LSD- Less significant digit
function redixSort (arr) {
    let maxDigits = 0;

    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, getNumberOfDigits(arr[i]));
    }
    for (let i = 0; i < maxDigits; i++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }

    return arr;
}

function getDigit (num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getNumberOfDigits (num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log(`Redix Sorting ${redixSort(testArray)}`);