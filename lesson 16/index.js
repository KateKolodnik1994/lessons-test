"use strict"
//task 1
let x = 20;
let y = 58;
let z = 42;
let summ = x + y + z;
console.log (summ);

//task 2
let year = prompt ('Введи колличество лет');
let days = year * 365;
let hours = days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;
console.log (days);
console.log (hours);
console.log (minutes);
console.log (seconds);
let myAge = prompt ('Сколько мне лет');
let myAgeInSeconds = myAge * 365 * 24 * 60 * 60;
console.log (myAgeInSeconds);

//task 3
let count = 42;
let userName = '42';
userName = Number (userName);
console.log (typeof userName);
userName = +userName;
console.log (typeof userName);
count = String (count);
console.log (typeof count);
count = '42';
console.log (typeof count);

//task 4
let a = 1;
let b = 2;
b = String (b);
a = String (a);
let c = "белых медведей";
let d = a + b + ' ' + c;
console.log (d);
//task 5
let w1 = "доступ";
let w2 = "морпех";
let w3 = "наледь";
let w4 = "попрек";
let w5 = "рубило";
let l1 = w1.length;
let l2 = w2.length;
let l3 = w3.length;
let l4 = w4.length;
let l5 = w5.length;
let lengthWords = l1 + l2 + l3 + l4 + l5;
console.log (l1);
console.log (l2);
console.log (l3);
console.log (l4);
console.log (l5);
console.log (lengthWords);

//task 6
let n = 15;
let type = typeof (n)
console.log (`Variable: n = ${n} have type: ${type}`);
let s = "task6";
let type2 = typeof (s)
console.log (`Variable: s = ${s} have type: ${type2}`);
let bl = 7 < 12;
let type3 = typeof (bl)
console.log (`Variable: bl = ${bl} have type: ${type3}`);

//task 7
let name = prompt ('Введите имя');
let age = prompt ('Введите возраст');

//task 1 advanced
let p = 4;
let k = 3;
k = p + k;
p = k - p;
console.log (p);
k = k - p;
console.log (k);

//task 2 advanced
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
console.log (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);
