//use strict
// added in ES5
//use this for Vanila Javascript
'use strict';

//2. Variable , rw(read/write)
// let (added in ES6)
// Mutable type
let globalName = 'global name';
{
    let name = 'rotoma';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (Don't ever use this!!)
// var hoisting (move declaration from bottom to top) //끌어올리다.
// has no block scope
{
    age=4;
    var age;
}
console.log(age);

//호환성 생각하기!

// 3. constant , r(read only)
// 가리키고 있는 포인터가 잠겨있음 값을 변경할 수 없음. 
// only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!!
//jImutable date types: premitive types, frozen objects (i,e. object.freeze())
//Mutable data types: all objects by default are mutable in JS.
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

//4. Variable types
// primative, single item: number, string, boolean, null, undefinedn,symbol
// object, box container
// function, first-class function

const count = 17;  //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - specla numeric values: infinity, infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const rotoma = 'rotoma';
const greeting = 'hello' + rotoma;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloRo = `hi ${rotoma}!`; //template literals (string)
console.log(`value: ${helloRo}, type: ${typeof helloRo}`);

//boolean
// flase: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1 ;  // false
console.log(`vlaue: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//stmbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const Rotoma = {name:'rotoma', age:20};
rotoma.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 오류 발생