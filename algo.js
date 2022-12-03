// const input = [-1, -1, 0, 1, 1, 0];
// var pivotIndex = function (nums) {
//   let rightSum = 0;
//   let leftSum = 0;
//   nums.forEach((x) => (rightSum += x));
//   for (let i = 0; i < nums.length; i++) {
//     rightSum -= nums[i];
//     if (leftSum === rightSum) return i;
//     leftSum += nums[i];
//   }
//   return -1;
// };

// console.log(pivotIndex(input));
// console.log(input.length);

// Leet Code 205. Isomorphic Strings
// var isIsomorphic = function(s, t) {
//   let map1 = new Map;
//   let map2 = new Map;
//   for(let i =0; i<s.length; i++){
//       if(map1.has(s[i]) && map1.get(s[i])!=t[i]) return false;
//       if(map2.has(t[i]) && map2.get(t[i])!=s[i]) return false;
//       map1.set(s[i],t[i]);
//       map2.set(t[i],s[i]);
//   }
//   return true;

// };
// Leet Code 392. Is Subsequence

// var isSubsequence = function (s, t) {
//   let j = 0;
//   for (let i = 0; i < t.length; i++) {
//     if (s[j] === t[i]) {
//       j++;
//     }
//   }
//   return j === s.length;
// };

// Leet code 21. Merge Two Sorted Lists

// var mergeTwoLists = function (list1, list2) {
//   var mergedHead = { val: -1, next: null },
//     crt = mergedHead;
//   while (list1 && list2) {
//     if (list1.val > list2.val) {
//       crt.next = list2;
//       list2 = list2.next;
//     } else {
//       crt.next = list1;
//       list1 = list1.next;
//     }
//     crt = crt.next;
//   }
//   crt.next = list1 || list2;

//   return mergedHead.next;
// };

// Leet Code 206. Reverse Linked List

// const reverseList = (head) => {
//   // Reversing a LinkedList involves using 2 pointer(cur, prev)
//   let cur = head; // We set current node to the head
//   let prev = null; // We set previous to NULL, because its the node BEFORE the current, aka NULL

//   // Now we start our loop
//   while(cur) { // We keep going as long as current exists
//       // First create a temp variable to hold our new current
//       let temp = cur.next; // We move to the right while flipping our pointers, so cur.next will be our new current at the end
//       cur.next = prev; // Since we are reversing pointers, we want to point cur.next at the previous
//       prev = cur; // We can now update previous, which will be our current since we move to the right
//       cur = temp; // Current become cur.next, which we saved in the temp var
//   }

//   /** Diagram of process */

//    /**
//    head
//    1 -> 2 -> 3  Say the head/linked list starts with this, and head is the 1 node

//    We set up out pointers like this
//    prev   cur
//    null -> 1 -> 2 -> 3

//    In the while loop, after processing, the pointers basically just move to the right after reversing the current pointer
//    So...
//           prev cur
//    null <- 1 -> 2 -> 3
//    ^^ Notice the pointer is flipped for the 1

//    We do this till the list looks like this
//                     prev  cur
//    null <- 1 <- 2 <- 3 <- null

//    This is why the prev variable is the new head

//   /*******/

//   return prev; // The new head of our reversed linked list will be the prev variable

// // Leet Code 876. Middle of the Linked List
// // Time Complexity :  O(n)
// // Space Complexity : O(1)
// var middleNode = function(head) {
//   // Initialize two pointers p1 and p2 pointing to the head...
//   var p1 = head;
//   var p2 = head;
//   while(p2 != null && p2.next != null){
//       // In each iteration, we move p1 one node forward and we move p2 two nodes forward...
//       p1 = p1.next;
//       p2 = p2.next.next;
//   }
//   // When p2 reaches the last node, p1 will be exactly at the middle point...
//   return p1;
// };

// // Leet code 1. Two Sum

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//     // Creating map
//     let map = {};
//     let difference;
//     //Looping thru array
//     for (let i = 0; i < nums.length; i++) {
//         difference = target - nums[i];
//         // checking if exist in map and
//         if (map[difference] >= 0) {
//             // returning indexes of results
//             return [map[difference], i]
//         } else {
//             // adding to map if not exist
//             map[nums[i]] = i
//         }
//     }
// };
// ------------------------------------------------------
// // Leet Code 278. First Bad Version
// /**
//  * Definition for isBadVersion()
//  *
//  * @param {integer} version number
//  * @return {boolean} whether the version is bad
//  * isBadVersion = function(version) {
//  *     ...
//  * };
//  */

// /**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */
// var solution = function (isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function (n) {
//         let start = 1;
//         let end = n;
//         let mid;
//         while (start <= end) {
//             mid = Math.floor((start + end) / 2);
//             if (isBadVersion(mid)) {
//                 if (isBadVersion(mid - 1)) {
//                     end = mid - 1
//                 }
//                 else return mid;
//             }
//             else start = mid + 1;
//         }


//     };
// };
// ------------------------------------------------------
// Leet Code 26. Remove Duplicates from Sorted Array
// 2 points left and right
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let l = 1;
    let r = 1;
    while (r < nums.length) {
        if (nums[r] != nums[r - 1]) {
            nums[l] = nums[r];
            l++;
        }
        r++;
    };
    return l;
};
nums = [0, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5]
console.log(removeDuplicates(nums));
