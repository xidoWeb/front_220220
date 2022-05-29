'use strict';

// a_04_accordion.js

/** // 시나리오 : 아코디언 메뉴를 형성
 *  1. dt(button)를 클릭시, 뒤에오는 dd를 나타나게 만들자!
 *  2. dt를 클릭시 dd가 나타나는데 다른 dl에 있는 dd는 사라지게 만들자! (선택 순번/다른순번을 체크)
 *  3. dd를 나타나게 만들때 animation을 적용해 주세요. (펼쳤을 경우의 높이값이 필요.: 0값 -> 적용높이값까지 움직임)
 *  4. dd를 나타나게 만들때 다른 dd에서도 animation을 적용하여 사라지게 만들기 
 *  5. dt를 클릭시 이미 펼쳐져 있는 dd라면 animation을 이용하여 사라지게 만들기
 */

// 변수 ----------------------------------------------------
const elAccorArea = document.querySelector('.accordion_area');
const elAccorDl = elAccorArea.querySelectorAll('dl');
const ACTIONTEXT = 'action';
let checkHeight = [];
let timed = 500;

// 함수 ----------------------------------------------------
const fnDdHeightCheck = function(){
  elAccorDl.forEach((el,idx)=>{
    const dd = el.querySelector('dd');
    dd.style.display = 'block';
    setTimeout(()=>{
      checkHeight.push( dd.clientHeight );
      dd.removeAttribute('style');
    }, 0);
  });
};

const fnSlideDown = function(el, n){
  const elDd = el.querySelector('dd');
  elDd.style = `height:0; 
                overflow:hidden; 
                transition:height ${timed}ms ease`;
  setTimeout(()=>{
    elDd.style.height = checkHeight[n] + 'px';
    console.log( checkHeight[n] ); 
  }, 0)
};

const fnSlideUp = function(el, n){
  const elDd = el.querySelector('dd');
  elDd.style.height = 0;
  setTimeout(()=>{
    el.classList.remove(ACTIONTEXT);
    elDd.removeAttribute('style');
  }, timed);
}

const fnRemoveAction = function(n){
  elAccorDl.forEach((el, idx)=>{
    if(n === idx){
      el.classList.add(ACTIONTEXT);
      fnSlideDown(el, idx);
      // console.log( el.clientHeight );
    }else{
      fnSlideUp(el, idx);
      // el.classList.remove(ACTIONTEXT);
    }
  });
}

// 기능수행 ----------------------------------------------
fnDdHeightCheck();

// 이벤트 수행 -------------------------------------------
// dt클릭시 아코디언 수행 

elAccorDl.forEach((el, idx) => {
  let elDt = el.querySelector('dt');
  elDt.addEventListener('click', function(e){
    e.preventDefault();
    // const target = e.target;
    // target.closest('dl').classList.add(ACTIONTEXT);
    const check = el.classList.contains(ACTIONTEXT);
    if( check ){
      fnSlideUp(el);
      // el.classList.remove(ACTIONTEXT);
    }else{
      // el.classList.add(ACTIONTEXT);
      fnRemoveAction(idx);    
    }
  });
})