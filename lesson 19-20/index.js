"use strict"
// lesson 19

// Task 1-2
// const cat = {
//   color: 'orange',
//   name: 'Peach',
// }
// delete cat.name;
// console.log(cat);
// alert( "name" in cat );

// Task 3
// const student = {
//   name: 'John',
//   age: 19,
//   isHappy: true
// }
// for (let key in student) {
//   console.log( key );
//   console.log( student[key] );
// }
// Task 4
// const colors = {
//   'ru pum pu ru rum': {
//       red: 'красный',
//       green: 'зеленый',
//       blue: 'синий'
//   },
// };
// console.log( colors['ru pum pu ru rum'].red );
// console.log( colors['ru pum pu ru rum'].blue );

// Task 5
// let salaries = {
//   roman: 500,
//   sveta: 413,
//   anton: 987,
//   andrey: 664,
//   alexandra: 199
// }
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// let result = sum / 5;
// console.log(result);

// Task 6
// let login = prompt('Введите логин - e-mail');
// let password = prompt('Введите пароль');
// let userinformation = {
//   login: [login],
//   password: [password],
// }
// confirm( `Ваш логин: ${userinformation.login}`);
// confirm( `Ваш пароль: ${userinformation.password}`);
// alert( `Добро пожаловать`);

// Task 1A
// const numbers = {
//     0: 'Zero',
//     1: 'One',
//     2: 'Two',
//     3: 'Three',
//     4: 'Four',
//     5: 'Five',
//     6: 'Six',
//     7: 'Seven',
//     8: 'Eight',
//     9: 'Nine'
// }
// let score = prompt('Input score, like 2:5');
// let key, key2;
// key = +score[0];
// key2 = +score[2];
// score = numbers[key] + score.substring(1);
// score = score.substring(0, score.length - 1) + formatting[key2];
// console.log(score);

// Task 2A
// let student1 = {
//     name: "Polina",
//     age: 27,
//   };
//   let student2 = {
//     name: "Polina",
//     age: 27,
//   };
//   function deepEqual(student1, student2){
//     return JSON.stringify(student1)===JSON.stringify(student2);
//   }
//   console.log(deepEqual(student1, student2))

  // Task 3A
  // const animals = {
  //   cat: {
  //      name: 'Енчик',
  //      age: 3,
  //   },
  //   dog: {
  //      name: 'Орео',
  //      age: 2,
  //   }
  // }
  // console.log(animals && animals.bird && animals.bird.name)

// lesson 20

// Task 1
// const colors = ['red', 'green', 'blue'];
// console.log(colors.length);

// Task 2
// const animals = ["monkey", "dog", "cat"];
// console.log(animals.pop());

// Task 3
// var numbers = [5, 43, 63, 23, 90];
// console.log( numbers );
// numbers.length = 0;
// console.log( numbers );

// var numbers = [5, 43, 63, 23, 90];
// console.log( numbers );
// numbers.splice(0, 5);
// console.log( numbers );

// Task 4
// const students = ["Polina", "Dasha", "Masha"];
// let newGroup = students.pop();
// students.push( "Borya" );
// console.log( students );
// students.shift();
// students.unshift( "Andrey" );
// console.log( students );

// Task 5
// const cats = ["Gachito", "Tom", "Batman"];
// for (let i = 0; i < cats.length; i++) {
//   alert( cats[i] );
// };

// for (let cat of cats) {
//   alert( cat );
// };

// Task 6
// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const allNumbers = evenNumbers.concat( oddNumbers );
// console.log( allNumbers );
// console.log ( allNumbers.indexOf( 8 ) );

// Task 7
// const binary = [0, 0, 0, 0];
// const allCode = binary.join('1');
// console.log(allCode);
