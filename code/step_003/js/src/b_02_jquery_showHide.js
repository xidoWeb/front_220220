// 

(function($){
  const jqArea = $('.jquery_area');
  const btn_01 = jqArea.find('.btn_01');
  const btn_01Dt = btn_01.find('dt');
  const btn_01Dd = btn_01.find('dd');

  const btn_02 = jqArea.find('.btn_02');
  const btn_02Dt = btn_02.find('dt');
  const btn_02Dd = btn_02.find('dd');

  let   timed = 500;

  // 이벤트 수행

  // 1. btn_01Dt를 클릭시, btn_01Dd를 나타나게 만들기
  // fadeIn 기능 => dd-> display:block -> opacity:0 -> opacity:1

  btn_01Dt.on('click', function(event){
    event.preventDefault();
    
    // let ddState = btn_01Dd.css('display');
    // (ddState === 'none') ? 
    //   btn_01Dd.fadeIn(timed*2) : 
    //   btn_01Dd.fadeOut(timed*2);

    let i=0;
    btn_01Dd.css({display:'block', opacity:0});
    let runInterval = setInterval(function(){
      btn_01Dd.css({opacity:i += 0.01});
      if(i>=1){ clearInterval(runInterval); }
    },timed/100);
  });


  // 2. btn_02Dt를 클릭시 btn_02Dd를 나타나게(slideDown)
  let PERMISSION = true; 
  btn_02Dt.on('click', function(event){
    event.preventDefault(); 
    if(PERMISSION){
      PERMISSION = false;
    
      let i = 0;
      let btnDDHeight = btn_02Dd.innerHeight(); 
      const ddState = btn_02Dd.css('display') === 'none';
      // ========================================
      //** jQuery 기본형태
      // (ddState === 'none') ? 
      //   btn_02Dd.slideDown(timed*2): 
      //   btn_02Dd.slideUp(timed*2);
      // ========================================
      
      if(ddState){
        i=0;
        btn_02Dd.css({display:'block', height:i, overflow:'hidden'});
        let runInterval = setInterval(()=>{
          if(i < btnDDHeight){
            i += 1;
            btn_02Dd.css({height:i+'px'})
          }else{
            clearInterval(runInterval);
            PERMISSION = true;
          }
        }, timed/100); // setInterval()

      } else { // ddState !== 'none'
        i = btnDDHeight; 
        let runInterval = setInterval(()=>{
          if(i > 0) {
            i -= 1;
            btn_02Dd.css({height:i+'px'})
          } else {
            clearInterval(runInterval);
            btn_02Dd.removeAttr('style');
            PERMISSION = true;
          }
        }, timed/100); // setInterval()
      } 
    } // if(PERMISSION)   
  }); // btn_02Dt.on('click')

})(jQuery);
//높이파악메소드: height(), innerHeight(), outerHeight(), outerHeight(true)

