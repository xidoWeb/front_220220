'use strick';
// a_03_cardList.js

const dataFile = '../data/drink_menuList.json';

fetch(dataFile)
  .then((response)=>response.json())
  .then(function(data){
    const dataList = data;
    const fnCategoryFilter = function(cate){
      return dataList.filter((data, index)=>{
        return data.category === cate;
      });
    };
    const dataFilter = fnCategoryFilter('커피류');
    console.log( dataFilter );

    const elItems = document.querySelector('.content__area__menu__items');
    elItems.innerHTML = '<ul></ul>';
    const elItemsUl = elItems.querySelector('ul');
    
    const itemsCode = `<div class="outline">
      <div class="image"></div>
        <dl>
          <dt class="title"></dt>
          <dd class="narr"></dd><dd class="price"></dd><dd class="option"></dd>
        </dl>
      </div>`;    

    const fnMakeLi = function(){
      const makeLi = document.createElement('li');
      makeLi.innerHTML = itemsCode;
      elItemsUl.append(makeLi);
    };

    dataFilter.forEach((data, index) => {
      fnMakeLi();
    });    

  })
  .catch(console.log);