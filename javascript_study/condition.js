'use strict';

const age = parseInt(prompt("How old are you?"));
// parseInt --> Int로 바꿔주는 함수
//          --> 만약 수가 아니라면 NaN을 반환한다.
// prompt --> 고전이라 현재는 사용을 거어어어의 하지 않는다.
//        --> 모든 값은 string으로 받아진다.

console.log(typeof age,typeof parseInt(age));

if(isNaN(age)  || age<0){
  // if true
  console.log("Please Write Real Number!!");
} else{
  //if false
  if(age<= 18){
    console.log("you are too young... you can't drink!!");
  } else if (age <=60){
    console.log("you can drink!! enjoy~~!");
  } else {
    console.log("less drink for your health!");
  }
}

if (isNaN(age) || age<0 ){
  // if true
  console.log("Please Write Real Number!!");
} else if(age<= 18){
  console.log("you are too young... you can't drink!!");
} else if (age <=60){
  console.log("you can drink!! enjoy~~!");
} else {
  console.log("less drink for your health!");
}
