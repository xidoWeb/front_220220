// math.js

  const box = {};
  const fnSum = (a, b) => a + b;
  const fnMulti = (a, b) => a * b;
  
  function fnDiv(a,b){
    return a / b;
  };

  box.sum = fnSum;
  box.mul = fnMulti;
  box.div = fnDiv;

  // window.box = box;

  export default box;


