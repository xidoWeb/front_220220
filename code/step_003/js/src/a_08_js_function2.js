'use strict';
// a_08_js_function2.js

// 기명함수
console.log( Fn1(1,2) );

function Fn1(a, b) {
  return a + b;
}

console.log( Fn1(4,5) );

// ---------------------------
// 함수표현식, 익명함수 : 권장
// 호이스팅문제 해결, 함수이름 중복 방지
// 함수를 먼저 생성후 이를 호출하기 때문에 원인/근거, 활용에대한 순서를 파악하기 쉽다.
const Fn2 = function(a, b){
  return a * b;
}

console.log( Fn2(5, 6) );

// --------------------------
// 즉시실행함수(IIFE), 익명함수
// 함수를 생성과 동시에 실행시키는 것에 목적
// 외부에 함수내부 자료를 노출시키는것을 막기위해 ...

const Fn3 = function(){ return '던질 값이 없어도 동작 할 수 있다.'; };
console.log( Fn3() );

const Fn4 = function(a){ 
  const b = a || 3 ; 
  return b*b;
}
console.log( Fn4(4) );

(function($){
  console.log($);
  const a = 10;
})('hi');

// ------------------------------
// 화살표 함수, 익명함수, 
// 함수 표현식을 단순하게 명료화 시킨 형태
// this 존재하지 않는다!!

const Fn5 = function(data){ console.log(data) };
Fn5('gogogogoo');

const Fn6 = data => console.log(data);
Fn6('hihihihihihhi');

// ====================================
// new
let arr = [];
console.log( arr );
let arr2 = new Array; // 기본의 배열형식을 새로 생성해서 사용
console.log( arr2 );

let arr3 = [1,2,3,4,5,6,67,7];

let obj = {};
let obj2 = new Object; // 기본의 객체형식을 새로 생성해서 사용
console.log(obj, obj2);

let Funt = function(){};
let Funt2 = new Function;
console.log(Funt);
console.log(Funt2);

// ---------------------------
function DataFn(id, user, gender){
  this.id = id;
  this.user = user;
  this.gender = gender || 'female';
}

let my1 = new DataFn(1,'xido','male');
console.clear();
console.log( my1 );
console.log( my1.user );
console.log( my1.gender );