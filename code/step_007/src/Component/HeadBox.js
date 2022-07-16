import React , {useState} from 'react';
import './HeadBox.scss';

function HeadBox() {
  const [at, setAt] = useState(null);
  const handlerClass = ()=> at==='action' ? setAt(null) : setAt('action');
  const handlerClassOut = () => at==='action' ? setAt(null) : setAt('action');

  return (
    <header id="headBox" 
    onClick={handlerClass} 
    // onMouseLeave={handlerClassOut}
    >
      <span className={at}>HeadBox</span>
    </header>
  )
}

export default HeadBox