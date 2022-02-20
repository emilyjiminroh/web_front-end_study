'use strict';

const calculator = {
  plus: function(a,b){
    return a+b;
  },
  minus: function(a,b){
    return a-b;
  },
  divide: function(a,b){
    return a/b;
  },
  multiply: function(a,b){
    return a*b;
  },
  powerof: function(a,b){
    return a**b;
  },
};

console.log(calculator.plus(10,7));
console.log(calculator.minus(10,7));
console.log(calculator.divide(10,7));
console.log(calculator.multiply(10,7));
console.log(calculator.powerof(10,7));