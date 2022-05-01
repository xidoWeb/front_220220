'use strict';
// a_07_js_function.js
// function : 함수 - 복잡한 식을 하나의 묶음으로 수행하게 만드는 것

console.log( 1 + 1 );
console.log( 3 + 4 );

let num1 = 4;
let num2 = 7;
let result = num1 + num2;
console.log( result ); 


const add = function(n1, n2){
  let rel = n1 + n2;
  // return rel;
  return false;
};

let r = add(50, 5);
console.log( r );

console.log( add(5,1) );

// functionCode()   // 내장함수
// .functionCode()  // 메소드
// .functionCode    // 프로퍼티

const objLikeFn = {
  minus : function(n1, n2){
    let rel = n1 - n2;
    return rel;
  }
};

let m1 = objLikeFn.minus(5, 5);
console.log( m1 );

const eachFn = function(data, index){
  console.log( 'data: ', data, ', index: ', index)
};

[1,4,5,6,7].forEach(eachFn);

const evt = function(){};
el.addEventListener('click', evt);

// function -> 선언식, 표현식(익명함수: 함수, 즉시실행, arrow함수)
// 객체, 배열, 함수