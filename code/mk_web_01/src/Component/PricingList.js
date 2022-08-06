import React, { useState } from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './PricingList.scss';

function PricingList(props) {
  const [point, setPoint] = useState(props.point);
  const listData = ['lorem1','lorem2','lorem3','lorem4'];

  return (
    <li className={point ? 'point' : null} >
      <dl>
        <dt>basic</dt>
        <dd>
          <span className='count'>80</span>
          <span className='unit'>&#36;</span>
        </dd>
        <dd className='day_check'>monthly</dd>
      </dl>
      <ul>
        {
        listData.map((data, index)=> 
          <li key={index}>
            <FontAwesomeIcon              
              icon={faCheck} 
              style={{color:'#6c73b5', marginRight:'1rem'}} /> 
             {data}
          </li>)  
        }
       
      </ul>
      <div className='link'>
        <a href="#">sign up</a>
      </div>
    </li>
  )
}

export default PricingList