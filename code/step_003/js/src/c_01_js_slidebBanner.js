// c_01_js_slidebBanner.js
(function(){
// ==========================
// 시나리오
// 1~2줄짜리 설명
// 버튼 클릭시 원하는 화면이 가로로 이동하여 배치되게 제작

// 상세 시나리오 
// 1. 다음버튼 클릭
// 2. 이전버튼 클릭
// 3. 인디케이터 선택
// 4. 버튼기능 공유
// 5. 처음/마지막에서 자연스럽게 이동
// 6. 일정시간마다 수행
// 7. 외부데이터 불러와서 적용



// slide banner
// 변수 =======================================================
  const viewBox = document.querySelector('#viewBox');
  const slideBtnArea = viewBox.querySelector('.slide_buttons');
  const slideNextBtn = slideBtnArea.querySelector('.next');
  const slidePrevBtn = slideBtnArea.querySelector('.prev');

  const indicatorList = viewBox.querySelector('.indicators > ul');
  const indicatorItems = indicatorList.querySelectorAll('li');

  const slideViewArea = viewBox.querySelector('.view_area');
  const slideViewAreaList = slideViewArea.querySelector('ul');

// 기능수행 / 추가변수 ------------------------------------------------------------------

  const preSlideListItems = slideViewAreaList.querySelectorAll('li');
  const lastSlideItem = preSlideListItems[preSlideListItems.length-1].cloneNode(true);
  slideViewAreaList.prepend(lastSlideItem)

  const slideViewItems = slideViewAreaList.querySelectorAll('li');

  let COUNT = 0;
  let PRECOUNT = COUNT;
  let slideLen = slideViewItems.length - 1;
  let ACTIONNAME = 'action';
  let PERMISSION = true;
  let TIMED = 600;
  let ANINONE = 'transition_none';


// 함수 =======================================================
  const fnUlMove = (num) => {
    if( PRECOUNT === 0 && num === slideLen-1 ){
      slideViewAreaList.style.left = '100%';
      setTimeout(()=>{
        slideViewAreaList.classList.add(ANINONE);
        slideViewAreaList.style.left = num * -100 + '%';
        setTimeout(()=>{
          slideViewAreaList.classList.remove(ANINONE);          
        },0)
      }, TIMED)
    }else if( PRECOUNT === slideLen -1 && num === 0 ){
      slideViewAreaList.classList.add(ANINONE);
      slideViewAreaList.style.left = '100%';
      setTimeout(()=>{
        slideViewAreaList.classList.remove(ANINONE);   
        slideViewAreaList.style.left = num * -100 + '%';       
      },0)
    }else{
      slideViewAreaList.style.left = num * -100 + '%';
    }
  }

  const fnIndigatorCheck = (num) => {
    indicatorItems.forEach((el, idx) => {
      (num === idx) ? 
        el.classList.add(ACTIONNAME) :
        el.classList.remove(ACTIONNAME)
    })
  }

  const fnTimedSet = ()=>{
    setTimeout( ()=>{
      PERMISSION = true;
      PRECOUNT = COUNT;
    }, TIMED);
  }

  const handlerNextClick = function(e){
      e.preventDefault();     
      if(PERMISSION) {
        PERMISSION = false;
        PRECOUNT = COUNT;
        (COUNT >= slideLen-1) ? COUNT = 0 : COUNT += 1;     
        fnUlMove(COUNT);
        fnIndigatorCheck(COUNT);
        fnTimedSet();
      }
  }

  const handlerPrevClick = function(e){
    e.preventDefault();    
    if(PERMISSION){
      PERMISSION = false;
      PRECOUNT = COUNT;
      (COUNT <= 0) ? COUNT = slideLen-1 : COUNT -= 1;
      fnUlMove(COUNT);
      fnIndigatorCheck(COUNT);
      fnTimedSet();
    }
  }

// 이벤트 =======================================================
  slideNextBtn.addEventListener('click', handlerNextClick);
  slidePrevBtn.addEventListener('click', handlerPrevClick);

  indicatorItems.forEach((el,idx)=>{
    el.addEventListener('click', function(e){
      e.preventDefault();
      if(PERMISSION){
        PERMISSION = false;
        PRECOUNT = COUNT;
        COUNT = idx;
        fnUlMove(COUNT);
        fnIndigatorCheck(COUNT);
        fnTimedSet();
      }
    })
  })

})()

