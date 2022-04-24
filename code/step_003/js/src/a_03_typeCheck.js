'use strict';
// a_03_typeCheck.js

let num = 10;
let likeNum = '10';

let checkType; 

checkType = typeof(num);
console.log( num + ':' + checkType );

checkType = typeof(likeNum);
console.log( likeNum + ":" + checkType );

let bool = true;
checkType = typeof(bool);
console.log( bool + ":" + checkType );

let check = 0 !== '0';
console.log( bool );

let num2;
console.log( !!num2 );

console.clear();

// --------------------------
/*
let confirmText = '나이를 입력하세요.';
let inputMessage = prompt(confirmText);
let convertNumber = parseInt(inputMessage);
console.log( convertNumber );

if( !!convertNumber){
  console.log( '입력한 숫자는 0이 아닌숫자')
}

if( convertNumber < 20 ){
  console.log( '현재 나이는 20세 이하');
}
*/
// --------------------------------------
let variable;
checkType = typeof variable;
console.log( checkType );
checkType = undefined;
console.log( checkType );

let nothing = 10;
console.log( nothing );
nothing = null;
console.log( nothing );

checkType = typeof nothing;
console.log( checkType );

// #wrap { width:100px; height:100px; }
// <div class="box" title="hi"></div>

// 노트, 노트북, 펜, 

// JS 형타입 / 자료구조
/* 
  원시형태 (기본형): number, string, boolean(논리), undefined, null, bigInt, symbol
  특수형태 : object( object, array ), function
*/

let ch = NaN;
checkType = typeof ch;
console.log(checkType);