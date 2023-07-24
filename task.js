
// Task 1

// let string1 = "Hello1";
// // string = [...string].reverse().join("");
// let arra1=[];
// arra1=string1.split('');
// arra1.reverse();
// console.log(arra1); 


// Task2

// function power(n){
//   if(n<=0){
//     return false;
//   }
//   while (n%3 === 0) {
//     n = n / 3;
//   }
//   return n===1;
// }
// console.log(power(81));
// console.log(power(0));

// task3


// function similar(nums) {
//   for (let i = 0; i< nums.length; i++) {
//     let sorted = nums.sort()
//     if (sorted[i] ===sorted[i+1]) {
//       return true;  
//       }
  
// }
// return false
// }
// console.log(similar([2,1,8,7,6,]));
// console.log(similar([2,1,8,7,6,1]));

// task4
// let digits = [4,5,7]
// let sum = digits.join("")
// sum = parseInt(sum ) + 1;
// console.log(sum.toString().split(""));


// task 5

// function partner(array1, array2) {
//     let partners = [];
//     for( let i = 0 ; i< array1.length ; i++){
//         if(array2.includes(array1[i])){
//             partners.push(array1[i]);
//         }
//     }
//     return partners;
// }
// const array1 = [1,5,7,8];
// const array2 = [5,7,9,10];

// console.log(partner(array1,array2));


// task 6
// function findCommonPrefix(strings) {
//     if (!Array.isArray(strings) || strings.length === 0) {
//       return "";
//     }
  
//     return strings.reduce((commonPrefix, currentWord) => {
//       for (let i = 0; i < commonPrefix.length; i++) {
//         if (commonPrefix[i] !== currentWord[i]) {
//           return commonPrefix.slice(0, i);
//         }
//       }
//       return commonPrefix;
//     });
//   }
  
 
//   const words = ["flower", "flow", "flight"];
//   const result = findCommonPrefix(words);
//   console.log(result);
  



  



