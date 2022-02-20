// 1. String concatenation
console.log('my'+ 'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment  and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;  // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);  // less than
console.log(10 <= 6);  // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6);  // greater than or equal

// 6. Logical operators: || (or), %% (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or) finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// or 사용시 복잡한 코드를 뒤로가게끔!!
// 왜냐? or 연산자 같은 경우에는 앞쪽이 true이면 더 이상 다른 변수를 고려하지 않음
// wasting time이 적어짐!

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null){
    nullalbeObject.something;
}

function check(){
    for (let i = 0; i < 10; i++){
        // wasting time
        console.log('ㅠ');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

//  == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//  === strict equality, no type conversion //타입까지 신경써서 비교
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const rotoma1 = {name:'rotoma'};
const rotoma2 = {name:'rotoma'};
const rotoma3 = rotoma1;
console.log(rotoma1 == rotoma2);  //f
console.log(rotoma1 === rotoma2); //f
console.log(rotoma1 === rotoma3); //t

// equality - puzzler
console.log(0 == false);   //t
console.log(0 === false);  //f
console.log('' == false);  //t 
console.log('' === false); //f
console.log(null == undefined);  //t
console.log(null === undefined); //f

// 8. Conditional operators: if
// if, else if, else
const name = 'rotoma';
if (name === 'rotoma'){
    console.log('welcome, Rotoma!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'rotoma' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
let i = 0;
for(i;i<11;i++){
    if(i%2 != 0){
    continue;
    }
    console.log(`${i}`);
}

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
      console.log(`q1. ${i}`);
    }
  }

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}