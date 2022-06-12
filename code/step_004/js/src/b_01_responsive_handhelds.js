// b_01_responsive_js.js

//1 .navi_btn내부 button요소를 선택 시 -> 형제요소인 .navi_area를 .action의 add/remove 처리

{
  // 변수 -------------------------------------------------------------------------------

  // 기본 변수
  const naviPart = document.querySelector('.navigation_part');
  const naviH2 = naviPart.querySelector('h2');
  const naviArea = document.querySelector('.navi_area');

  // 기본 기능처리
  const btnCode = `<button type="button"><i class="fa-solid fa-bars"></i><span>네비게이션 버튼</span></button>`;
  const makeNaviBtn = document.createElement('div');
  makeNaviBtn.setAttribute('class', 'navi_btn blind_area');
  makeNaviBtn.innerHTML = btnCode; 
  naviH2.after(makeNaviBtn);

  // 추가 선택자
  const naviBtn = document.querySelector('.navi_btn');  
  const naviBtnSel = [].slice.call(naviBtn.children)[0];
  const naviBtnI = naviBtn.querySelector('i');
  const BTNICON = ['fa-bars','fa-xmark'];
  const naviDisplay = ['flex', 'none'];


  // 이벤트 ------------------------------------------------------
  naviBtnSel.addEventListener('click', function(e){
    e.preventDefault();
    const check = window.getComputedStyle(naviArea).display === 'none';
    if(check){
      naviArea.style.display = naviDisplay[0];
      naviBtnI.classList.remove(BTNICON[0]);
      naviBtnI.classList.add(BTNICON[1]);
    }else{
      naviArea.style.display = naviDisplay[1];
      naviBtnI.classList.remove(BTNICON[1]);
      naviBtnI.classList.add(BTNICON[0]);
    }
  })
}