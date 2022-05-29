'use strick';
// a_03_cardList.js
/**
 // 시나리오
 * 카드리스트 만들기
 * 1. html 문서로 카드 리스트 형태 만들기
 * 2. 1개의 html문서를 js로 생성 or 여러개 card틀을 생성되게 만들기
 * 3. 2번의 내용중 처리하지 않은 기능 생성
 * 4. 모든 코드를 한군데 넣지 말고 하나의 기능별로 함수화 처리해서 연결되게 생성
 * 5. 하나의 기능안에 다시 복잡한 기능이 들어갈 경우 외부의 함수로 따로 처리해서 사용
 * 6. 변수, 함수, 기능, 이벤트, 추가변수/기능설정 내용별로 영역을 나눠서 작업
 */
/**
 * this가 가지는 의미 
 * 1. window
 * 2. 생성자함수를 사용하여 생성된 객체
 * 3. 이벤트 발생시 처리된 이벤트 주체 (단, 화살표 함수 사용시 this는 window)
 */
// ==============================================================================
// [cardList.html] 탭 기능처리내용 ============================================
// 변수 ----------------------------------------------------------------------
const sourcePath = {img : '../img/', font: '../fonts/'};
const dataFile = '../data/drink_menuList.json';
const elMenuItems = document.querySelector('.content__part__menu_type');
let elMenuUl = elMenuItems.querySelector('ul');
let elMunuList; // = elMenuUl.querySelectorAll('li');

const elItems = document.querySelector('.content__area__menu__items');
let elItemsUl;
let TABCOUNT = 0;

// 함수 ----------------------------------------------------------------------
// 탭메뉴 리스트 기능




// 탭메뉴 항목 내용처리 기능
const fnMakeUl = function(){
  elItems.innerHTML = '<ul></ul>'; 
  elItemsUl = elItems.querySelector('ul');
};

const fnCategoryFilter = function(cate, cardList){
  return cardList.filter((data, index)=>{
    return data.category === cate;
  });
};

const fnSpanInsert = function(data){
  let code = '';
  data.forEach((con) => {   
   let span = `<span>${con}</span>`;
   code += span;
  });
  return code;
};

const itemsCode = function(obj){  
  // const imagPath = '../img/'+ obj.path + '/'+ 'obj.filename';
  const imagPath = `${sourcePath.img}${obj.path}/${obj.filename}`;
  const sliceData = obj.option.split(', ');
  const elMakeSpan = fnSpanInsert(sliceData); 

  return `
  <div class="outline"><a href="#">
  <div class="image" style="${imagPath}"></div>
    <dl>
      <dt class="title">${obj.product}</dt>
      <dd class="narr">${obj.narr}</dd>
      <dd class="price">${obj.price}</dd>
      <dd class="option">${elMakeSpan}</dd>
    </dl></a>
  </div>`;
};

// li 하나의 함수를 생성 후 삽입
const fnMakeLi = function(obj){
  const makeLi = document.createElement('li');
  makeLi.innerHTML = itemsCode(obj);
  elItemsUl.append(makeLi);
};

// 선택된 li요소의 위치에 class이름(action) 활성화, 나머지 비활성화
const fnAddActive = function(n){
  elMunuList.forEach((el, index) => {
    (index === n) ? el.classList.add('action'): el.classList.remove('action');
  });
};

// 함수기능 우선 수행 ------------------------------------------------------------


// 기능 수행 --------------------------------------------------------------------
fetch(dataFile)
  .then((response)=>response.json())
  .then(function(data){
    // 탭 리스트
    let arrTabList = [];
    // data.forEach(function(d){
    //   let check = arrTabList.includes(d.category);
    //   if(!check){ arrTabList.push(d.category); }
    // });
    data.filter(d => {
      let check = arrTabList.indexOf(d.category) === -1;
      if(check){ arrTabList.push(d.category); }
    });
    // console.log( arrTabList );

    elMenuItems.innerHTML = '<ul></ul>';
    elMenuUl = elMenuItems.querySelector('ul');
    let tabLi;
    arrTabList.forEach((el,index)=>{
      tabLi = document.createElement('li');
      tabLi.innerHTML = `<button type="button">${arrTabList[index]}</button>`;
      elMenuUl.append(tabLi);
      // console.log(tabLi);
    });    

    // 탭 내용 처리
    const fnFilterContent = (menu) => {
      let m = menu || 0;     
      const dataFilter = fnCategoryFilter(arrTabList[m], data);  // console.log( dataFilter );
      fnMakeUl();
      dataFilter.forEach(fnMakeLi);
    }

    elMunuList = elMenuUl.querySelectorAll('li');
    fnFilterContent();
    fnAddActive(TABCOUNT);

    elMunuList.forEach((el, index) => {
      el.addEventListener('click', function(e){
        e.preventDefault();
        fnFilterContent(index);
        TABCOUNT = index;
        fnAddActive(TABCOUNT);
      });
    });

  })
  .catch(console.log);
// ==============================================================================







const arrList = [
  {name:'samsung', product:'product_01'},
  {name:'samsung', product:'product_04'},
  {name:'samsung', product:'product_06'},
  {name:'iphone', product:'product_02'},
  {name:'iphone', product:'product_03'},
  {name:'iphone', product:'product_08'},
  {name:'lg', product:'product_03'},
  {name:'xaomi', product:'product_04'},
  {name:'motorola', product:'product_05'}
];


let arrTabList = [];

// arrList.forEach((d,i)=>{
//   let insertCheck = arrTabList.includes(d.name);
//   if(!insertCheck) { arrTabList.push(d.name);  }
// });

arrList.filter( (d,i) => {
  if(arrTabList.indexOf(d.name) === -1){
    arrTabList.push(d.name);
  }
});
console.log(arrTabList);
