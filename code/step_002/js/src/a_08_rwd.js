// a_08_rwd.js

// const menu = document.querySelector('.mobile_menu');
// const gnbList  = document.querySelector('.gnb > ul');
const menu = $('.mobile_menu');
const gnbList = $('.gnb > ul');
// menu(버튼)을 클릭하면, gnbList를 나타나게 해라!!!
// 이벤트 : 기본상태에서 무언가 변화가 처리되는 모~~든 것

// menu.addEventListener('click', function(){
//   gnbList.style.display = 'flex';
// })

menu.on('click', function(){
  gnbList.css({display:'flex'});
});


// video, audio {display:none;}