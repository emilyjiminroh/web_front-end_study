'use strict';

// Array🎉

// 1. Declaration
// new 사용 or [] 사용
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits); //배열 정보 출력
console.log(fruits.length); // 배열 크기 출력
console.log(fruits[0]); //0번재 값 출력
console.log(fruits[1]); // 1번재 값 출력
console.log(fruits[2]); //2번째 값 출력
console.log(fruits[fruits.length - 1]); //마지막 위치의 값 출력 (fruits.length === 2)
console.clear();

// 3. Looping over an array
// print all fruits
// a. for 크기 사용
for (let i = 0; i < fruits.length; i++) { 
  console.log(fruits[i]);
}

// b. for of 배열 요소에 접근해 출력
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach 
// -> 배열 안에 들어있는 value들 마다, 내가 전달한 함수를 출력해 준다.
// anonymous 함수 function 대신 => 사용 가능
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end 
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push (매우!!! 느리다)
// splice: remove an item by index position
// splice(index,number); (number -> 몇 개나 지울건지)
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉'); //지우고 넣기도 가능!
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
// 없으면 -1 반환
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

// includes
// true / false
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));