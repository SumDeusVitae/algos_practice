"use strict"
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
// // Leet Code 26. Remove Duplicates from Sorted Array
// // 2 points left and right
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//     let l = 1;
//     let r = 1;
//     while (r < nums.length) {
//         if (nums[r] != nums[r - 1]) {
//             nums[l] = nums[r];
//             l++;
//         }
//         r++;
//     };
//     return l;
// };
// nums = [0, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5]
// console.log(removeDuplicates(nums));
// ------------------------------------------------------
// // Leet Code 121. Best Time to Buy and Sell Stock
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     if (prices == null || prices.length <= 1) return 0;
//     let buy = prices[0];
//     let prof = 0;
//     for (let i = 1; i < prices.length; i++) {
//         // buy = Math.min(buy, prices[i]);
//         // prof = Math.max(prof, prices[i] - buy)
//         if (buy > prices[i]) {
//             buy = prices[i]
//         } else if (prof < prices[i] - buy) {
//             prof = prices[i] - buy;
//         }
//     }
//     return prof;
// };
// ------------------------------------------------------
// Leet Code 9. Palindrome Number
// // Solution with inverting integer to string
// var isPalindrome = function (x) {
//     if (x < 0) return false;
//     let str = x.toString().split("").reverse().join("");
//     let revNum = parseInt(str);
//     if (x - revNum == 0) return true;
//     return false;
// };
// // Solution without converting integer to string
// var isPalindrome = function (x) {
//     if (x >= 0 && x < 10) return true;
//     if (x < 0) return false;
//     let tempX = x;
//     let revNum = 0;
//     let k = 1;
//     let c = 1;
//     while (x > k) {
//         c++;
//         k *= 10;
//     }
//     let holder = 0;
//     for (let i = 0; i < c; i++) {
//         holder = tempX % 10;
//         tempX = Math.floor(tempX / 10);
//         revNum += holder * k;
//         k /= 10;
//     }
//     if (x - (revNum / 10) == 0) return true;
//     return false;
// };
// // Simplest Solution
// var isPalindrome = function (x) {
//     let res = 0;
//     let orig = x;
//     while (x > 0) {
//         res = res * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }
//     return res == orig ? true : false;
// };
// // DFS  Solution
// // HELPER Function this function returns array with first element = biggest number, second = how many digits after it
// var bigestHowMany = function (x) {
//     let counter = -1;
//     while (!(x < 1)) {
//         x /= 10;
//         counter++;
//     }
//     let res = Math.floor(x * 10);
//     return [res, counter];
// };
// var isPalindrome = function (x) {
//     // 2 base cases
//     if (x >= 0 && x < 10) return true;
//     if (x < 0) return false;
//     // starting recursive function revNumber
//     return x - revNumber(x) == 0 ? true : false;
// };
// // Recursiv function to get recursive number
// var revNumber = function (x) {
//     if (x < 10) return x;
//     let counter = -1;
//     let dif = 1;
//     // calling helping function to get first digit of int and how many digits it has after and storing these 2 values in val1
//     let val1 = bigestHowMany(x);
//     temp = x - (val1[0] * Math.pow(10, val1[1]));
//     // checking length of the integer temp, which is val2[1]+1 technicaly
//     let val2 = bigestHowMany(temp);
//     // we checking if we didn't miss any zeros in the middle
//     if (val1[1] != val2[1]) dif = val1[1] - val2[1];
//     return revNumber(temp) * Math.pow(10, dif) + val1[0];
// };
// // const x = 121;
// const x = 121;
// console.log(isPalindrome(x));
// ------------------------------------------------------
// Leet Code 841. Keys and Rooms (Medium)
// var canVisitAllRooms = function (rooms) {
//     // Creating new empty Set and new array keys with element 0 in it
//     let visited = new Set;
//     let keys = [0];
//     // Looping thru  keys array, first time pasing because we have key 0
//     while (keys.length > 0) {
//         // removing last element from the array keys
//         let currentKey = keys.pop();
//         // checking if our set already has this key
//         if (!visited.has(currentKey)) {
//             // if not adding new key to our set of keys
//             visited.add(currentKey);
//             // getting  all keys from current room in to our array keys
//             keys.push(...rooms[currentKey]);
//         }
//     }
//     // Checking if we visited same length as rooms
//     return visited.size == rooms.length;
// };
// // ------------------------------------------------------
// // Leet Code 14. Longest Common Prefix
// // https://leetcode.com/problems/longest-common-prefix/
// var longestCommonPrefix = function (strs) {
//     let longest = strs[0][0];
//     let cur = longest;
//     if (strs == longest) return longest;
//     if (longest == undefined) return '';
//     let check = strs.filter(x => x[0] == longest);
//     if (check.length != strs.length) {
//         return '';
//     }
//     for (let i = 1; i < strs[0].length; i++) {
//         cur = strs[0][i];
//         check = strs.filter(x => x[i] == cur);
//         if (check.length != strs.length) return longest;
//         longest += cur;
//     }
//     return longest;
// };
// strs =
//     ["flow", "flower", "flowe", "flower"]
// console.log(longestCommonPrefix(strs));
// // Getting shortrest word in array
// console.log(strs.reduce((a, b) => a.length <= b.length ? a : b));
//
// ------------------------------------------------------
// Leet Code 2. Add Two Numbers (Medium)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Not working because numbers out of int range sometimes
// function ListNode (val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }
// var addTwoNumbers = function (l1, l2) {
//     let value1 = l1.val;
//     let value2 = l2.val;
//     let counter1 = 1;
//     let counter2 = 1;
//     let resultInt;
//     let l3 = new ListNode;
//     while (l1.next != null) {
//         l1 = l1.next;
//         value1 += l1.val * Math.pow(10, counter1);
//         counter1++;
//     }
//     while (l2.next != null) {
//         l2 = l2.next;
//         value2 += l2.val * Math.pow(10, counter2);
//         counter2++;
//     }
//     resultInt = value1 + value2;
//     console.log(resultInt)
//     let temp = resultInt % 10;
//     l3.val = temp;
//     resultInt = Math.floor(resultInt / 10);
//     if (resultInt < 1) return l3;
//     let lTemp = new ListNode;
//     l3.next = lTemp;
//     while (!(resultInt < 1)) {
//         temp = resultInt % 10;
//         resultInt = Math.floor(resultInt / 10);
//         lTemp.val = temp;
//         if (resultInt < 1) break;
//         lTemp.next = new ListNode;
//         lTemp = lTemp.next;
//     }
//     return l3;
// };

// // Redid with 2 arrays; Working solution
// var addTwoNumbers = function (l1, l2) {
//     let l3 = new ListNode;
//     let array1 = [];
//     let array2 = [];
//     let el1 = 0;
//     let el2 = 0;
//     let array3 = [];
//     let tenth = 0;
//     while (l1 != null) {
//         array1.push(l1.val);
//         l1 = l1.next;
//     }
//     while (l2 != null) {
//         array2.push(l2.val);
//         l2 = l2.next;
//     }
//     for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
//         array1[i] ? el1 = array1[i] : el1 = 0;
//         array2[i] ? el2 = array2[i] : el2 = 0;
//         let res = el1 + el2 + tenth;
//         if (res > 9) {
//             res = res % 10;
//             tenth = 1;
//         } else {
//             tenth = 0;
//         }
//         array3.push(res);
//     }
//     if (tenth) array3.push(tenth);
//     l3.val = array3[0];
//     if (array3.length > 1) {
//         let l4 = new ListNode;
//         l3.next = l4;
//         for (let j = 1; j < array3.length; j++) {
//             l4.val = array3[j];
//             if (j > array3.length - 2) break;
//             l4.next = new ListNode;
//             l4 = l4.next;
//         }
//     }
//     return l3;
// };

//
// ------------------------------------------------------
// Leet Code 3. Longest Substring Without Repeating Characters (Medium)
/**
 * @param {string} s
 * @return {number}
 */
// with 2 pointers Solved
// var lengthOfLongestSubstring = function (s) {
//     let highest = 0;
//     if (s.length <= 1) return s[0] ? 1 : 0;
//     for (let i = 0; i < s.length; i++) {
//         let ourSet = new Set;
//         ourSet.add(s[i]);
//         for (let j = i + 1; j < s.length; j++) {
//             if (ourSet.has(s[j])) {
//                 highest = Math.max(highest, ourSet.size);
//                 break;
//             } else {
//                 ourSet.add(s[j]);
//                 highest = Math.max(highest, ourSet.size);
//             }
//         }
//     }
//     return highest;
// };
// const s = "au"
// console.log(lengthOfLongestSubstring(s));
//
// ------------------------------------------------------
// Leet Code 4. Median of Two Sorted Arrays (Hard)
// Should try binary search once
/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
// var findMedianSortedArrays = function (nums1, nums2) {
//     let merged = [];
//     let index1 = 0;
//     let index2 = 0;
//     let current = 0;
//     while (current < (nums1.length + nums2.length)) {

//         let isArr1Depleted = index1 >= nums1.length;
//         let isArr2Depleted = index2 >= nums2.length;

//         if (!isArr1Depleted && (isArr2Depleted || (nums1[index1] < nums2[index2]))) {
//             merged[current] = nums1[index1];
//             index1++;
//         } else {
//             merged[current] = nums2[index2];
//             index2++;
//         }

//         current++;
//     }

//     let mid = merged.length / 2;
//     if (merged.length < 2) return merged[0];
//     let res;
//     if (mid == Math.ceil(mid)) {
//         res = (merged[mid - 1] + merged[mid]) / 2;

//     } else {
//         res = merged[Math.floor(mid)];
//     }
//     if (!res) return 0;
//     console.log(merged)
//     console.log(mid)
//     return res;
// };
// const ar1 = 3 % 10
// const ar2 = [0, 1, 2]
// console.log(ar1);
//
// ------------------------------------------------------
// Leet Code 5. Longest Palindromic Substring (Medium)
// Need to look into
// var longestPalindrome = function (s) {
//     let longest = s[0];
//     for (let l = 0; l < s.length - 1; l++) {
//         for (let r = l + 2; r < s.length + 1; r++) {
//             let cur = s.slice(l, r);
//             if (cur.length > longest.length && palindrome(cur)) {
//                 longest = cur;
//             }
//         }
//     }
//     return longest;
// };
// var palindrome = function (str) {
//     let length = str.length;
//     if (length < 1) return false;
//     if (length / 2 != Math.ceil(length / 2)) {
//         if (str.slice(0, Math.floor(length / 2)) == reverseString(str.slice(Math.ceil(length / 2), length + 1))) return true
//     } else {
//         if (str.slice(0, length / 2) == reverseString(str.slice(length / 2, length + 1))) return true;
//     }
//     return false;
// }
// function reverseString (str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// var s = 'savasas';
// console.log(longestPalindrome(s));
//
// ------------------------------------------------------
// Leet Code 6. Zigzag Conversion (Medium)
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function (s, numRows) {
//     if (s == null && numRows <= 0) {
//         return '';
//     }
//     if (numRows == 1) {
//         return s;
//     }
//     let res = '';
//     const step = 2 * numRows - 2;

//     for (let i = 0; i < numRows; i++) {
//         for (let j = i; j < s.length; j += step) {
//             res += s[j];
//             if (i != 0 && i != numRows - 1 && (j + step - 2 * i) < s.length) {
//                 res += s[j + step - 2 * i]
//             }
//         }
//     }
//     return res;

// };
//
// ------------------------------------------------------
// Leet Code 7. Reverse Integer (Medium)
/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//     let res = 0;
//     if (x == 0) return x;
//     let sign = 1;
//     if (x < 0) {
//         x *= -1;
//         sign = -1;
//     }
//     while (x > 0) {
//         res *= 10;
//         let temp = x % 10;
//         res += temp;
//         x = Math.floor(x / 10);
//     }
//     if (res < 2147483647) {
//         return res * sign;
//     } else {
//         return 0;
//     }
// };
// const x = -123;
// console.log(reverse(x));

//
// ------------------------------------------------------
// Leet Code 8. String to Integer (atoi) (Medium)
/**
 * @param {string} s
 * @return {number}
 */
// function is_numeric_char (c) { return /\d/.test(c); }

// var myAtoi = function (s) {

//     let sign = 1;
//     let countPlus = 0;
//     let countMinus = 0;
//     let res = 0;
//     let dig = 0;
//     function not_allowed (c) {
//         switch (c) {
//             case '-':
//                 countMinus++;
//                 return true;
//             case '+':
//                 countPlus++;
//                 return true;
//             case ' ':
//                 if (countPlus || countMinus) { return false } else { return true }
//             default:
//                 return is_numeric_char(c)
//         }
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (!not_allowed(s.charAt(i)))
//             return res;
//         if (s.charAt(i) == "-") {
//             sign = -1;
//         }
//         while (i < s.length && is_numeric_char(s.charAt(i))) {
//             console.log(`Count Minus=${countMinus} and Count Plus=${countPlus}`);
//             if (countPlus && countMinus || countPlus > 1 || countMinus > 1) return 0;
//             dig++;
//             res += s.charAt(i);
//             i++;
//             if (res > 2147483647) return sign == 1 ? 2147483647 : -2147483648;
//         }
//         if (dig > 0) return res * sign;
//     }
//     return res * sign;
// };
// const s = "-+12";
// console.log(myAtoi(s));
//
// ------------------------------------------------------
// Leet Code 12. Integer to Roman (Medium)
/**
 * @param {number} num
 * @return {string}
 */
// // Creating our Map with Roman Digits
// const romanDigits = new Map;
// romanDigits.set(1000, 'M').set(900, "CM").set(500, "D").set(400, "CD").set(100, "C").set(90, "XC").set(50, "L").set(40, "XL").set(10, "X").set(9, "IX").set(5, "V").set(4, "IV").set(1, "I");
// var intToRoman = function (num) {
//     let res = '';
//     // Getting Arrray of keys from our Roman Digits Map and looping thru it;
//     for (const key of romanDigits.keys(romanDigits)) {
//         // Searching for for key which is smaller or equal to our num, btw starting from the biggest value until last, since we know how our map organised
//         while (num >= key) {
//             // When we did find mnatch, we concatenating Roman Value with our res variable
//             res += romanDigits.get(key);
//             // Reducing num by the value we used
//             num -= key;
//         }
//     }
//     return res;
// };
//
// ------------------------------------------------------
// Leet Code 15. 3Sum(Medium)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//     const results = [];
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length - 2; i++) {
//         //  don't get it
//         if (nums[i] > 0) break;
//         // skip duplicates
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         let j = i + 1;
//         let k = nums.length - 1;
//         while (j < k) {
//             let sum = nums[i] + nums[j] + nums[k];
//             if (sum === 0) {
//                 results.push([nums[i], nums[j], nums[k]]);
//                 while (nums[j] === nums[j + 1]) j++;
//                 while (nums[k] === nums[k - 1]) k--;
//                 j++;
//                 k--;
//             } else if (sum < 0) {
//                 j++;
//             } else {
//                 k--
//             }
//         }
//     }
//     return results;
// };
//
// ------------------------------------------------------
// Leet Code 16. 3Sum Closest(Medium)
// var threeSumClosest = function (nums, target) {
//     nums.sort((x, y) => x - y);
//     let closest = Infinity;
//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         let left = i + 1, right = nums.length - 1;
//         while (left < right) {
//             const total = nums[i] + nums[left] + nums[right];
//             if (total === target) return target;
//             closest = Math.abs(target - closest) < Math.abs(target - total) ? closest : total;
//             if (total < target) {
//                 left++;
//                 while (left < right && nums[i] === nums[i - 1]) left++;
//             } else {
//                 right--;
//                 while (left < right && nums[right] === nums[right + 1]) right--;
//             }
//         }
//     }
//     return closest;
// };
//
// ------------------------------------------------------
// Leet Code 17. Letter Combinations of a Phone Number(Medium)
// var letterCombinations = function(digits) {
//     if(!digits) return []
//     const numbers = {
//         2: ['a', 'b', 'c'],
//         3: ['d', 'e', 'f'],
//         4: ['g', 'h', 'i'],
//         5: ['j', 'k', 'l'],
//         6: ['m', 'n', 'o'],
//         7: ['p', 'q', 'r', 's'],
//         8: ['t', 'u', 'v'],
//         9: ['w', 'x', 'y', 'z']
//         };
//     let iterating = (nums) => {
//         let arr= [];
//         if(nums.length == 1) return numbers[nums];
//         let first = nums.slice(0,1);
//         let others = iterating(nums.slice(1));
//         for(let i = 0; i <numbers[first].length;i++){
//             for(let j = 0; j<others.length;j++){
//                 arr.push(numbers[first][i]+others[j])
//             }
//         }
//         return arr;
//     }
//     return iterating(digits)
// };
//
// ------------------------------------------------------
// Leet Code 18. 4Sum (Medium)
var fourSum = function (nums, target) {
    const result = [];
    nums.sort((a, b) => a - b);
};