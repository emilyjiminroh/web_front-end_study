'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 변수안에 인자를 지정함으로써 좀 더 관리, 활용하기 편리하게 도와준다.

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name); // 인자에 접근 시 점 . 사용!
  console.log(person.age);
}

const rotoma = { name: 'rotoma', age: 4 };
print(rotoma);

// with JavaScript magic (dynamically typed language)
// can add properties later
rotoma.hasJob = true;
console.log(rotoma.hasJob);

// can delete properties later
delete rotoma.hasJob;
console.log(rotoma.hasJob);

// 하지만, 가능한 뒤에 수정하는 것은 피하자!!

// 2. Computed properties
// key should be always string
console.log(rotoma.name); // 코딩하는 그 순간 키에 해당하는 값을 받아오고 싶을 때
console.log(rotoma['name']); // 정확하게 어떤 key가 필요한지 모를 때, 즉 runtime 에서 결정될 때!!
//이런식으로도 접근이 가능하다. 주의!! 항상 key는 string type으로 입력!!
rotoma['hasJob'] = true;
console.log(rotoma.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(rotoma, 'name'); //필요한 value를 받아올 때 유용하다
printValue(rotoma, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// 이렇게 동일한 형태를 반복하는것은 너무 비효울적!
// 함수를 사용하자!

const person4 = new Person('rotoma', 20);
console.log(person4);

// 4. Constructor Function
function Person(name, age) { //순수하게 object를 생성하고자 할땐 명사형의 함수 이름을 주로 사용한다/
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj 확인)
console.log('name' in rotoma);
console.log('age' in rotoma);
console.log('random' in rotoma);
console.log(rotoma.random); //undefined


// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 콘솔 전체 삭제
for (let key in rotoma) { //key라는 지역변수에 할당
  console.log(key); //모든 key 출력
}

// for (value of iterable) //순차적으로 배열 같을 때 사용
const array = [1, 2, 4, 5];
for (let value of array) { //array 값들이 value에 할당
  console.log(value); 
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'rotoma', age: '20' };
const user2 = user;
console.log(user); 
//cloning 되어서 user2.name을 바꾸면 user.name도 바뀐다.

// old way
const user3 = {};
for (let key in user) { //수동적으로 할당(복사)
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user); //내장 함수 사용
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue
console.log(mixed.size);  //big
// 앞쪽부터 차례대로 덮어씌우기 때문에 뒤쪽에 있는 파라미터 값이 최종 혼합된 mixed 인자 값이 된다.