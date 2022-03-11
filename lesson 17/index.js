"use strict"
// task 1
const a = 'true';
const b = 5 > 6;
const c = 17;
const d = undefined;
let k;
console.log (a);
console.log (b);
console.log (c);
console.log (d);
console.log (typeof a, typeof b, typeof c, typeof d, typeof k);

// task 2
let height = 15;
let width = 20;
if (height > width) {
    console.log (height)
} else {
    console.log (width)
}

// task 3
for (let i = 1; i < 21; i += 1) {
    if (i % 3 === 0) console.log (i)
};

// task 4
let key = true;
let documents = true;
let pen = true;
let apple = true;
let orange = false;
if (key && documents && pen && apple || orange) {
    alert( 'shouldGoToWork' );
  }

// task 5
let n = +prompt ('Введите число', '');
if (n % 5 === 0, n % 3 !== 0) console.log ('Fiz');
else if (n % 3 === 0, n % 5 !== 0) console.log ('Buz');
else if (n % 15 === 0) console.log ('FizBuz');

// task 6
let age = +prompt ('Введите свой возраст', '');
if (age < 16) console.log ('Пей колу');
else if (age > 18) console.log ('Попей пивка');
else if (age <=18, age >=16) console.log ('Можешь выкурить сигаретку, только маме не говори');

// task 7
let direction = prompt ('В какую сторону света вы бы хотели отправиться?', '');
switch (direction) {
   case 'юг':
    alert( 'на юг пойдешь счастье найдешь' );
    break;
   case 'север':
    alert( 'на север пойдешь много денег найдешь' );
    break;
   case 'запад':
    alert( 'на запад пойдешь верного друга найдешь' );
    break;
   case 'восток':
    alert( 'на восток пойдешь разработчиком станешь' );
    break;
   default:
    alert( "попробуйте еще раз" );
}
// task 1A
let yourName = prompt ('Введите имя', '');
let yourSurname = prompt ('Введите фамилию', '');
yourName = yourName[0].toUpperCase() + yourName.substring(1).toLowerCase;
yourSurname = yourSurname[0].toUpperCase() + yourSurname.substring(1);
alert ('Привет, ' + yourName + ' ' + yourSurname);

// task 2A
let num = +prompt ('Введите число', '');
let x = +prompt ('Сколько отнять', '');
let y = +prompt ('Сколько прибавить', '');
let z = +prompt ('На сколько умножить', '');
let t = +prompt ('На сколько разделить', '');
let result = (num - x + y) * z / t;
alert('(' + num + ' - ' + x + ' + ' + y + ')' + ' * ' + z + ' / ' + t + ' = ' + result);

// task 3A
for (let i = 0; i < 7; i += 1) {
    let line = '';
    for (let j = 0; j < i; j += 1) {
      line += '#';
    }
    console.log(line);
  }
