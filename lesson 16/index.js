"use strict"
//task 1
let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;
console.log (sum);

//task 2
let age = prompt ('Введите количество лет:');
const DAYS_IN_YEAR = 365; 
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
let days = age * DAYS_IN_YEAR;
let hours = days * HOURS_IN_DAY;
let minutes = hours * MINUTES_IN_HOUR;
let seconds = minutes * SECONDS_IN_MINUTE;
console.log (days);
console.log (hours);
console.log (minutes);
console.log (seconds);
let myAgeInSeconds = age * DAYS_IN_YEAR * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE;
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
b = String(b);
a = String(a);
let c = "белых медведей";
let d = a + b + ' ' + c;
console.log (d);
//task 5
let w1 = "доступ";
let w2 = "морпех";
let w3 = "наледь";
let w4 = "попрек";
let w5 = "рубило";
const wordsLength = (w1 + w2 + w3 + w4 + w5).length;
console.log (wordsLength);

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
let yourAge = prompt ('Введите возраст');

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
