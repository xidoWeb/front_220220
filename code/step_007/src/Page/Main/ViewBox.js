import React, {useEffect, useState, useRef} from 'react';

import Buttons from './ViewBox/Buttons';
import ViewList from './ViewBox/ViewList';
import Indicators from './ViewBox/Indicators';

import ListData from './ViewBox/ListData';

import './ViewBox.scss';

function ViewBox() {

  const total = ListData.length - 1;
  const timed = 1000;
  const [count, setCount] = useState(0);
  const [intervalState, setIntervalState] = useState(true); // PERMOSSION = true
  const moveSlide = useRef(null); // moveSlide.current = null

  const handlerNextClick = (e) => { 
    e && e.preventDefault();
    // count >= ListData.length - 1 ? setCount(0) : setCount(count + 1);    
     setCount( count >= total ?  0 : count + 1 );    
  }
  const handlerPrevClick = (e) => {
    e.preventDefault();
    // count <= 0 ? setCount(ListData.length - 1) : setCount(count - 1);
     setCount( count <= 0 ? total : count - 1 );
   }

  const startSlide = () => {
    setIntervalState(true);
    if( moveSlide.current !== null ) { return }
    moveSlide.current = setInterval(()=> handlerNextClick(), timed);
  }
  const stopSlide = () => { 
    setIntervalState(false);
    if( moveSlide.current === null ) { return }
    clearInterval(moveSlide.current);
    moveSlide.current = null;
  }

  useEffect( () => {
    intervalState && startSlide();
    return ()=> stopSlide();
  }, [count, intervalState])

  return (
    <section id="viewBox" onMouseEnter={stopSlide} onMouseLeave={startSlide} >
      <h2 className='blind'>광고 영역</h2>

      <Buttons 
        nextEvent={handlerNextClick} 
        prevEvent={handlerPrevClick} />

      <Indicators 
        ListData={ListData} 
        count={count} 
        total={total} 
        setCount={setCount} />

      <div className='slide_wrapper fade_area'>
        <ul>
          {ListData.map((data, index)=>             
            <ViewList 
              key={data.primaryKey} 
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