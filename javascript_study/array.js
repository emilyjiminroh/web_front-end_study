'use strict';

// Array๐

// 1. Declaration
// new ์ฌ์ฉ or [] ์ฌ์ฉ
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['๐', '๐'];
console.log(fruits); //๋ฐฐ์ด ์ ๋ณด ์ถ๋ ฅ
console.log(fruits.length); // ๋ฐฐ์ด ํฌ๊ธฐ ์ถ๋ ฅ
console.log(fruits[0]); //0๋ฒ์ฌ ๊ฐ ์ถ๋ ฅ
console.log(fruits[1]); // 1๋ฒ์ฌ ๊ฐ ์ถ๋ ฅ
console.log(fruits[2]); //2๋ฒ์งธ ๊ฐ ์ถ๋ ฅ
console.log(fruits[fruits.length - 1]); //๋ง์ง๋ง ์์น์ ๊ฐ ์ถ๋ ฅ (fruits.length === 2)
console.clear();

// 3. Looping over an array
// print all fruits
// a. for ํฌ๊ธฐ ์ฌ์ฉ
for (let i = 0; i < fruits.length; i++) { 
  console.log(fruits[i]);
}

// b. for of ๋ฐฐ์ด ์์์ ์ ๊ทผํด ์ถ๋ ฅ
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach 
// -> ๋ฐฐ์ด ์์ ๋ค์ด์๋ value๋ค ๋ง๋ค, ๋ด๊ฐ ์ ๋ฌํ ํจ์๋ฅผ ์ถ๋ ฅํด ์ค๋ค.
// anonymous ํจ์ function ๋์  => ์ฌ์ฉ ๊ฐ๋ฅ
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end 
fruits.push('๐', '๐');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('๐', '๐');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push (๋งค์ฐ!!! ๋๋ฆฌ๋ค)
// splice: remove an item by index position
// splice(index,number); (number -> ๋ช ๊ฐ๋ ์ง์ธ๊ฑด์ง)
fruits.push('๐', '๐', '๐');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, '๐', '๐'); //์ง์ฐ๊ณ  ๋ฃ๊ธฐ๋ ๊ฐ๋ฅ!
console.log(fruits);

// combine two arrays
const fruits2 = ['๐', '๐ฅฅ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
// ์์ผ๋ฉด -1 ๋ฐํ
console.clear();
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐ฅฅ'));

// includes
// true / false
console.log(fruits.includes('๐'));
console.log(fruits.includes('๐ฅฅ'));

// lastIndexOf
console.clear();
fruits.push('๐');
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.lastIndexOf('๐ฅฅ'));