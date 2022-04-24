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

// ---------------------------------------------
console.clear();

// Object -> Object

let obj = {
  'apple':'red', 
  'banana':'yellow', 
  'grape':'perple', 
  '파인 애플':'갈색'
};

console.log( obj );
console.log( obj.apple );
console.log( obj['파인 애플'] );

let arr = [
  'apple', 
  'banana', 
  'grape', 
  '파인 애플'
];
console.log( arr );
console.log( arr[3] );

let gnbList = [
  {'name':'about us' , 'href':''}, 
  {'name':'product' , 'href':'#'},
  {'name':'gallery' , 'href':'#'},
  {'name':'notice' , 'href':'#'},
  {'name':'event' , 'href':'#'},
  {'name':'sns' , 'href':'#'}
];


for(let i = 0;i < gnbList.length; i = i + 1){
  // console.log( arr[i] );
  console.log( gnbList[i].name );
}


/*
console.clear();
let data = ['pen', 'cup', 'mic']; 
// data[2]
let data2 = {'pen':'red' , 'cup':'white', 'mic':'black'}; 
// data2['mic'] || data.mic 

let data3 = [
  {'pen':'red' , 'cup':'white', 'mic':'black'},
  {'pen':'white' , 'cup':'red', 'mic':'gray'}, 
  {'pen':'red' , 'cup':'white', 'mic':'black'}
];  // data3[1].mic
*/
