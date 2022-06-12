'use strict';
// b_02_responsive_multiDevice.js

// 반응형 3가지 타입 체크하여 수행

// step1 : 하나씩 체크
{
/*
const deviceSize = [600, 1024, 1366]; 

const phoneCheck = window.matchMedia(`(max-width:${deviceSize[0] - 1}px)`);
const tabletCheck = window.matchMedia(`(min-width:${deviceSize[0]}px) and (max-width:${deviceSize[1] - 1}px)`);
const laptopCheck = window.matchMedia(`(min-width:${deviceSize[1]}px) and (max-width:${deviceSize[2] - 1}px)`);
const desktopCheck = window.matchMedia(`(min-width:${deviceSize[2]}px)`);
const deviceCheck = [phoneCheck, tabletCheck, laptopCheck, desktopCheck];

deviceCheck.forEach((type,index)=>{
  type.addEventListener('change', function(e){
    if(e.matches){
      console.log('변화!!!!', index);
    }
  })
});
*/
}
// step2 : 한번에 관리
const deviceSize = [
  {type:'phone', size : 600}, 
  {type:'tablet', size : 1024}, 
  {type:'laptop', size : 1366},
  {type:'desktop'}
];
// const phoneCheck = window.matchMedia(`(max-width:${deviceSize[0] - 1}px)`);
const check = [];
deviceSize.forEach((device, index)=>{
  if(index === 0){
    check.push( window.matchMedia(`(max-width:${deviceSize[index].size - 1}px)`) );
  }else if(index === deviceSize.length - 1){
    check.push( window.matchMedia(`(min-width:${deviceSize[index-1].size}px)`) );
  }else{
    check.push( window.matchMedia(`
                    (min-width:${deviceSize[index-1].size}px) and 
                    (max-width:${deviceSize[index].size - 1}px)`));
  } 
});
// console.log( check );
check.forEach((type, index)=>{
  type.addEventListener('change', e => {
    if(e.matches){
      console.log(deviceSize[index].type);
    }
  });
});
