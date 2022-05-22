'use strict';
// a_02_after_selector.js

{
  // document.getElementById();
  // document.getElementsByClassName()[n];
  // document.getElementsByTagName()[n];
  // selector.children -> .tagName  , toLowercase()
  // selector.parentElement,  selector.closest()
  // selector.getAttribute('속성명')
}


{
  // document.querySelector('wrap > .box');
  // document.querySelectorAll('.box')[0];
  // selector.childNode
  // selector.parentNode

  const elConPart = document.querySelector('.content_part');
  elConPart.style = `
      width:90%; height:auto; margin:auto; margin-top:2rem; padding:1rem; box-sizing:border-box;
      border:1px solid #ccc; background-color:#fdc;
  `;

  const elConPar = elConPart.querySelectorAll('p');
  // const elConPar = elConPart.getElementsByTagName('p');
  console.log( elConPar );
  let style1 = `width:100%; margin-bottom:0.5rem; border-bottom:1px solid #777; background-color:#fff;`;
  
  // elConPar[0].style = style1;
  // elConPar[2].style = style1;

  // let elConParLen = elConPar.length;
  // for(let i=0; i<elConParLen; i++){
  //   elConPar[i].style = style1;
  // }

  elConPar.forEach((el, idx)=>{
    el.style = style1;
    // console.log( el.childNodes );
    // console.log( el.parentNode )
  });

  // const listCon = Array.prototype.slice.call(elConPar);  // [].slice.call(); // Array.from()
  // listCon.forEach((el, idx)=>{
  //   el.style = style1;
  // })

}
