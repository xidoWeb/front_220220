// b_01_responsive_js.js


// @media all and (max-width:1439px) {}
{
/*
const deviceWidth = $(window).outerWidth();
const setWidth = 1440;

$(window).on('resize',function(e){
  const afterWidth = $(window).outerWidth();

  if(deviceWidth !== afterWidth){
    if(setWidth <= afterWidth){
      // desktop 기준
      location.reload();
    }else{
      // tablet 이하 기준
      location.reload();
    }
  }
})
*/
}

const dataFile = {
  handhelds: '../js/src/b_01_responsive_handhelds.js'
};

const body = document.querySelector('body');

const desktopWidth = 1440;
const widthCheck = window.matchMedia(`(max-width:${desktopWidth - 1}px)`);

console.log( widthCheck );

widthCheck.addEventListener('change', function(e){
  // change값이 true이면 tablet기기에 대한 값이므로, b_01....파일을 불러와서 사용
  // console.log( e.matches );
  
  const makeScript = document.createElement('script');

  if(e.matches){
    makeScript.setAttribute('src', dataFile.handhelds);
    body.append(makeScript);
  }  
});