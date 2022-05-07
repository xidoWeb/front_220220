'use strict';
// a_09_js_method.js

(function(){
  let arr = [1,4,5];
  arr[3] = 10;

  arr.push('apple','kiwi');
  arr.push('banana');

  arr.pop();
  arr.pop();

  arr.shift();
  arr.unshift(7);

  console.log( arr );
  
  // console.log( arr.length );
  // arr.forEach(function(d, i){ console.log(i, d)});

  arr.splice(3,2);
  console.log( arr );
  const arr2 = [...arr];

  let addr = '서울시 마포구 연남동';
  const arrAdd = addr.split(' ');
  console.log( arrAdd );
  let num = '010-2244-7865';
  const arrNum = num.split('-');
  console.log( arrNum );
  let joinNum = arrNum.join('');
  console.log(joinNum);



})();
