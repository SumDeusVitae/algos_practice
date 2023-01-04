'use strict'
// //
// // Bubble sort
// //
// function bubbleSort(array) {
//     for(let i = 0; i< array.length; i++){
//       for(let j=i+1; j<array.length; j++){
//         if(array[i]>array[j]){
//          [array[i], array[j]] = [array[j], array[i]];
//         }
//       }
//     }
//      return array;
//    }
// //
//
// ---------------------------------------------------------
//
// // Selection Sort
// //
// function selectionSort (array) {
//     for (let i = 0; i < array.length; i++) {
//         let min = i;
//         for (let j = i; j < array.length - 1; j++) {
//             if (array[j + 1] < array[j]) {
//                 min = j + 1;
//             }
//             if (array[i] > array[min]) {
//                 [array[i], array[min]] = [array[min], array[i]]
//             }
//         }
//     }
//     return array;
// }
// //
//
// ---------------------------------------------------------
//
// // Insertion Sort
// //
// function insertionSort (array) {
//     for (let i = 0; i < array.length; i++) {
//         let j = i;
//         while (j > 0 && array[j - 1] > array[j]) {
//         [array[j], array[j - 1]] = [array[j - 1], array[j]];
//             j--;
//         }
//     }
//     return array;
// }
//
//
// ---------------------------------------------------------
//
// // Quick Sort NEED REPEAT AND DO DIFFERENTLY. DEF mby few more
// Quick sort with single array as entrance
// function quickSort (array) {
//     if (array.len < 2) {
//         return array;
//     }
//     return quickSortRecursive(array, 0, array.length - 1);
// }

// function partition (arr, start, end) {
//     // Taking the last element as the pivot
//     const pivotValue = arr[end];
//     let pivotIndex = start;
//     for (let i = start; i < end; i++) {
//         if (arr[i] < pivotValue) {
//             // Swapping elements
//             [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//             // Moving to next element
//             pivotIndex++;
//         }
//     }

//     // Putting the pivot value in the middle
//     [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
//     return pivotIndex;
// };

// function quickSortRecursive (arr, start, end) {
//     // Base case or terminating case
//     if (start >= end) {
//         return;
//     }

//     // Returns pivotIndex
//     let index = partition(arr, start, end);

//     // Recursively apply the same logic to the left and right subarrays
//     quickSortRecursive(arr, start, index - 1);
//     quickSortRecursive(arr, index + 1, end);
// }


// function quickSort (array) {
//     if (array.length === 0) {
//         return [];
//     } else {
//         const pivotValue = array[0];
//         // Sort elements into three piles
//         let lesser = [];
//         let equal = [];
//         let greater = [];
//         for (let e of array) {
//             if (e < pivotValue) {
//                 lesser.push(e);
//             } else if (e > pivotValue) {
//                 greater.push(e);
//             } else {
//                 equal.push(e);
//             }
//         }
//         return [...quickSort(lesser), ...equal, ...quickSort(greater)];
//     }
// }
//
//
// ---------------------------------------------------------
//
// // Merge Sort
// function mergeSort (array) {
//     if (array.length == 1) {
//         return array;
//     } else {
//         const left = array.splice(0, array.length / 2);
//         return merge(mergeSort(left), mergeSort(array));
//     }
// }
// function merge (ar1, ar2) {
//     let merged = [];
//     while (ar1.length && ar2.length) {
//         if (ar1[0] < ar2[0]) {
//             merged.push(ar1.shift());
//         } else {
//             merged.push(ar2.shift());
//         }
//     }
//     return [...merged, ...ar1, ...ar2];
// }

// Heap Sort