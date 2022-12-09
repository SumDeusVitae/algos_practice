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
var addTwoNumbers = function (l1, l2) {
    let value1 = l1.val;
    let value2 = l2.val;
    let counter1 = 1;
    let counter2 = 1;
    let resultInt;
    let l3 = new ListNode;
    while (l1.next != null) {
        l1 = l1.next;
        value1 += l1.val * Math.pow(10, counter1);
        counter1++;
    }
    while (l2.next != null) {
        l2 = l2.next;
        value2 += l2.val * Math.pow(10, counter2);
        counter2++;
    }
    resultInt = value1 + value2;
    let temp;
    while (!(resultInt < 1)) {
        temp = resultInt % 10;
        resultInt = Math.floor(resultInt / 10);
        l3.val = temp;
        l3.next = new ListNode;
        l3 = l3.next;
    }
    return l3;
};