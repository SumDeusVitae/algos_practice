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

//Bubble Sort average time complexity O(n^2) Quadratic time
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
console.log(`Bubble Sorting ${bubbleSort(testArray)}`);

// Insertion Sort average time complexity O(n^2) Quadratic
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
console.log(`Insertion Sorting ${insertion(testArray)}`);