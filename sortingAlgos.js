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
//             [array[j], array[j - 1]] = [array[j - 1], array[j]];
//             j--;
//         }
//     }
//     return array;
// }
//
//
// ---------------------------------------------------------
//
// // Quick Sort
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
// Merge Sort
function mergeSort (array) {
    // Only change code below this line
    return array;
    // Only change code above this line
}