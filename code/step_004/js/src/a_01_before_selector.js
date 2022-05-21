// a_01_before_selector.js

const wrap = document.getElementById('wrap');
// console.log( wrap );
wrap.style = `width:900px; height:auto; 
              min-height:500px; margin:auto;
              background-color:#ddd;`;

const h1 = document.getElementsByTagName('h1')[0];
// console.log( h1 );

h1.style = `width:auto; height:50px; background-color:#afa;`

const h2 = wrap.getElementsByTagName('h2');
 console.log(h2);

 const h2Style = `width:100%; height:auto; 
 margin-bottom:1rem; box-sizing:border-box; 
 padding:1rem; border-bottom:1px solid #333;
 background-color:#fcc`;

const fnHStyle = (n) => {
  h2[n].style = h2Style; 
};

// fnHStyle(0);
// fnHStyle(1);

for(let i=0; i<2; i+=1){
  // h2[i].style = h2Style; 
  fnHStyle(i);
}

// ----------------------------------
const elCardWrap = wrap.getElementsByClassName('card_wrap');
// console.log(elCardWrap);

const cardWrapStyle = `width:90%; height:auto; min-height:300px;
  box-sizing:border-box; padding:0.5rem; background-color:#fff;
`;
{
// elCardWrap.style = cardWrapStyle;

// for , forEach
// for(let i=0; i<2; i++){  console.log( elCardWrap[i] ) }

//  elCardWrap.forEach((element, index)=>{
//    console.log( element );
//  });

// const array = ['a', 'b', 'c'];
// console.log( array );
// array.forEach((el, index)=>{ console.log(index, el); });

  // 유사배열(like array)
  // 배열처럼 보이지만 실제로는 배열이 아닌 것!!!
  // 이러한 형태는 배열에서 사용하는 대부분의 기능을 사용 할 수 없다.(forEach)
  // 유사배열을 '강제로' 배열화 시켜야 하는기능이 필요하다!
}

// new Array  => Array.protype => []

// const elList = Array.prototype.slice.call(elCardWrap);
// const elList = [].slice.call(elCardWrap);
const elList = Array.from(elCardWrap);
console.clear();
// console.log('elCardWrap', elCardWrap);
// console.log('elList', elList);
elList.forEach((el, idx)=>{
  console.log( idx, el );
});

{
  const elNewPart = wrap.getElementsByClassName('new__part')[0];
  // console.log( elNewPart )
  const elNewPartList = elNewPart.getElementsByTagName('li');
  // console.log( elNewPartList );

  const elNewPartList2 = elNewPart.children;
  // console.log(elNewPartList2);

}


{
  const elFootBox = document.getElementById('footBox');
  const elFootBoxChildren = elFootBox.children;
  // console.log( elFootBoxChildren );
/* //for를 이용하여 순환 선택
  let elLeng = elFootBoxChildren.length;
  for(let i=0; i<elLeng; i++){
    let elChild = elFootBoxChildren[i];
    let elName  = elChild.tagName.toLowerCase();
    if(elName === 'h2'){
      // console.log('요소이름', elFootBoxChildren[i]);  
      elChild.style.backgroundColor = '#7a5';
      elChild.style.color = '#fff';
      break;
    }
  }
*/
// const elFootChildConvert = Array.prototype.slice.call(elFootBoxChildren);
// const elFootChildConvert = [].slice.call(elFootBoxChildren);
const elFootChildConvert = Array.from(elFootBoxChildren);
elFootChildConvert.forEach(function(element, index){
  const elName = element.tagName.toLowerCase();
  if(elName === 'h2'){
    element.style.backgroundColor = '#3a0';
    element.style.color = '#fa0';
  }
});

// 선택자는 단수형인 id선택자를 제외하고 모두 getElements가 붙는다.
// 해당 선택요소는 배열처럼 보이지만 실제로는 유사배열이기에 배열메소드는 동작하지 않는다.
// 유사배열을 배열로 바꿔주어야 하는데 이때 필요한 기능은
// 1. Array.prototype.slice.call()
// 2. [].slice.call()
// 3. Array.from()
  
}

{
  const elFamilySite = document.getElementsByClassName('family__site')[0];
  const elFamilySiteParent = elFamilySite.parentElement;
  // console.log(elFamilySiteParent);
  elFamilySiteParent.style = 'box-sizing:border-box; border:1px solid #f07;'
  const elFamilySiteOuter = elFamilySite
                            .closest('footer');
                          
  console.log(elFamilySiteOuter);
  elFamilySiteOuter.style.backgroundColor = '#f88';

  console.log( elFamilySite.children );
  console.log( elFamilySite.childNodes );


}


