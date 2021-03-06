// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// 함수 이름은 동사형태로 만들면, 분명하게 목적을 알 수 있어서 좋다.
// 함수 기능을 세분화해, 나눠서 구현하자!
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// +) TypeScript를 활용해서 명확하게 함수를 작성할 수 있도록 하자!
// function log(message: string): number {
//   console.log(message);
//   return 0;
// } 

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') { // default값 지정해놓으면 값이 대체되어 적용된다.
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) { //...변수 배열 호출
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) { // 간단히
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg)); // 더 간단히
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
}
printMessage();
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다!!!
// 함수 안에서의 지역변수는 밖에서 호환 X


// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}
// 조건에 맞지 않다면 과감히 종료해버리자!!
// 필요한 로직은 뒤에..!!


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { //anonymous function
  // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
//할당이 된 다음부터 호출이 가능
// function declaration은 hoisting이 된다.

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous 항상 이름이 없다!
// function 키워드 필요없고, 블럭도 필요없다!
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more 한 줄 이상으로 작성해야 한다면 return 꼭 해주기!!
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();
// 선언을 해줌과 동시에 호출 괄호로 묶기 

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3));