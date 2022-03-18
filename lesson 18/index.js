"use strict"
// task 1
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i += 1) {
//       sum += i;
//   }
//   return sum;
// }
// alert(sumTo(5));

// task 2
// const rate = 0.17;
// const period = 5;
// let ann = 0;
// let ov = 0;
// let loan = +prompt('Введите сумму кредита', '');
// ann = (+(loan * rate)) / (+(1 - 1 / Math.pow(rate + 1, period))).toFixed(2);
// ov = (ann * period - loan).toFixed(2);
// console.log(ov);

// task 3
// let str = prompt('Введите строку', '');
// let a = prompt('Введите начальную позицию', '');
// let b = prompt('Введите конечную позицию', '');
// console.log(str.slice(a,b));

// task 4
// let n = prompt('Введите число', '');
// var sum = 0;

// function getSumNumbers(n) {
//     while (n > 0) {
//         sum += n % 10
//         n = Math.floor(n / 10)
//     }
//     return sum
// }
// console.log(getSumNumbers(n));

// task 5
// function getSum(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i += 1) {
//       sum += i;
//   }
//   if (a !== b) {
//       return sum;
//   }
//   return a
// }
// console.log(getSum(1, 1));
// console.log(getSum(-1, 1));
// console.log(getSum(-1, 4));
// console.log(getSum(-1, 6));

// Task 6
// function fooboo(shouldUseFirstFunction, foo, boo) {
//     return shouldUseFirstFunction ? foo() : boo()
//     // }
// const foo = function() {
//     console.log("I'M FOO");
// }
// const boo = function() {
//     console.log("I'M BOO")
// }
// alert(fooboo(true, foo, boo));

// task 1А
// function findTriangle(a, b, c) {
//   if ((a + b) < c) {
//       return false
//   } else if ((b + c) < a) {
//       return false
//   } else if ((a + c) < b) {
//       return false
//   } else if (isNaN(a)) {
//       return false
//   } else if (isNaN(b)) {
//       return false
//   } else if (isNaN(c)) {
//       return false
//   } else {
//       return true
//   }
// }
// let res = findTriangle(a, b, c);
// console.log(res);

// Task 2A
// function devideChocolate(n,m){
//   if (n > 0 && m > 0) {
//     return ((n - 1) + n * (m - 1));
//   } return (0)
// }
// alert(findMyChocolat(3, 3));
