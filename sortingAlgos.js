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
