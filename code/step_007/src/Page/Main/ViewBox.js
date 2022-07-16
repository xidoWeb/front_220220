import React, {useEffect, useState, useRef} from 'react';
// import { v4 as uuidv4 } from 'uuid';
import uuid from 'react-uuid';


import './ViewBox.scss';
import ViewList from './ViewBox/ViewList';
// let listData = {current:null};

function ViewBox() {
  const total = 4;
  const timed = 1000;

  const [count, setCount] = useState(0);
  const listData = [ 
    { num:1, color:'#adf', id:'slide_001'},
    { num:2, color:'#f4a', id:'slide_002'},
    { num:3, color:'#af7', id:'slide_003'},
    { num:4, color:'#ccf', id:'slide_004'},
    { num:5, color:'#faa', id:'slide_005'}
  ];
  const moveSlide = useRef();

  // const listData = [1,2,3,4,5];
  // const listColor = ['#adf', '#f4a', '#af7', '#ccf', '#faa'];
  // const setUUID = [uuid(), uuid(), uuid(), uuid(), uuid()];

  const handlerNextClick = (e) => { 
    e && e.preventDefault();
    count >= listData.length - 1 ? setCount(0) : setCount(count + 1);    
  }
  const handlerPrevClick = (e) => {
    e.preventDefault();
    count <= 0 ? setCount(listData.length - 1) : setCount(count - 1);
   }

  const startSlide = ()=> moveSlide.current = setInterval(()=>{  handlerNextClick() }, timed);
  const stopSlide = ()=> clearInterval(moveSlide.current);


  useEffect( () => {
    startSlide();
    return ()=> stopSlide();
  })
 

  return (
    <section id="viewBox" onMouseEnter={stopSlide} onMouseLeave={startSlide} >
      <h2 className='blind'>광고 영역</h2>
      <div className='buttons'>
        <button type="button" className='next' onClick={handlerNextClick}>
          <span className='blind'>next</span>
        </button>
        <button type="button" className='prev' onClick={handlerPrevClick}>
          <span className='blind'>prev</span>
        </button>
      </div>
      <div className='indicators'>
        <ul className='blind_area'>
          {
            listData.map((data, index) =>  {
                return ( <li key={uuid()} className={count === index ? 'action' : null}>
                    <a href="#" onClick={(e)=> {e.preventDefault(); return setCount(index)} }>
                      <span>{data.num}번째 광고 요약 설명</span>
                    </a>
                  </li>)
                }            
            )}
        </ul>
        <p>
          <span className='now'>{ count + 1 }</span>/
          <span className='total'>{ total + 1 }</span>
        </p>
      </div>
      <div className='slide_wrapper fade_area'>
        <ul>
          {listData.map((data, index)=>             
              <ViewList 
                key={data.id} 
                action={count === index ? 'action' : null} 
                bgColor={data.color}
                content={data.num} />          
          )}
        </ul>
      </div>
    </section>
  )
}

export default ViewBox