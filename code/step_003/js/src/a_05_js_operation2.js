'use strict';
// a_05_js_operation2.js

let num = 10;
let num2 = 20;
let num3 = 15;
let rel, rel2;

// let [num, num2, num3, rel, rel2] = [10, 20, 15];

(num > num2) ? rel = true :  rel = false ;

console.log( rel );

if(num > num2) {
  rel = rel + ' 입니다';
  rel2 = !rel;
} else {
  rel = rel + " 입니다요";
  rel2 = !!rel;
}

console.log( rel , rel2);

// -------------------------------------
console.clear();

if( (num < num3) && (num3 > num2) ) { 
  console.log(true); 
} else if (num3 < num ) {
  console.log( 'num3는 10보다 작다' );
} else {
  console.log( 'num3는 10보다 크다' );
}

// -------------------------------------
 (num3 > num2 || num3 === num2) ? 
  console.log('num3는 num2보다 작거나 같다'): 
  console.log('num3는 num2보다 크다');
// -------------------------------------


