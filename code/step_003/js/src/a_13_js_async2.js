'use strict';
// a_13_js_async2.js

// ----------------------------------
// promise : 비동기처리방식 -> 하나의 기능을 수행하고, 이후에 그내용을 기준으로 수행

// 생성자 new Promise();


// function promise() { 
//   return new Promise(function(resolve, reject){ // 승인, 거부
//     // if(true){    resolve();  }else{    reject();  }
//     resolve(true);
//   });
// }

const promise = function(){
  return new Promise(function(resolve, reject){ // 승인, 거부
    // resolve('!!!!!');
    reject('내용 없다~~~~');
  });
}

promise()
  .then( data => console.log(data))
  .catch( data => console.log(data));

// 1. Pending(대기) : 비동기 처리에대한 내용이 완료되지 않은 상태
// 2. Fullfilled(수행) : 비동기처리가 완료되어 결과를 반환한 상태
// 3. Rejected(실패) : 반환이 되지않은 실패한 상태

// a를 클릭했을때, 해당 내용에 값이 존재하는가? 존재하지 않는가? 
// a를 클릭했을때, 승인이 되었는가? 아닌가?

// fetch()는 promise를 기반으로, 데이터를 가져올 수 있느냐 없느냐를 판단하여 사용하는 기법

// @media screen
// matchMedia
