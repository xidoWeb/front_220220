'use strict';
// a_10_js_class.js

const DataSet = function (first, last, subject, count){
  this.first    = first;
  this.last     = last;
  this.subject  = subject;
  this.count    = count;
  this.fullName = this.first +' '+ this.last; 
};

let myData1 = new DataSet('xido', 'lee', 'math', '60');
console.log( myData1.fullName );
// myData { first:'xido', last:'lee', subject:'math', count:60, fullName:'xido lee'}

// --------------------------------------------------------
class DataSet2 {
  constructor (first, last, subject, count) {
    this.first    = first;
    this.last     = last;
    this.subject  = subject;
    this.count    = count;
    this.fullName = this.first +' '+ this.last; 
  }
}

let myData2 = new DataSet2('xita', 'kim', 'korean', '80');
console.log(myData2);

// ------------------------------------------


