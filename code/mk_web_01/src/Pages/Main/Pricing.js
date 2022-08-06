import React from 'react';
import PricingList from '../../Component/PricingList';
import './Princing.scss';

function Pricing() {
  const pList = [
    {point:null, id:'pricing1'},
    {point:true, id:'pricing2'},
    {point:null, id:'pricing3'}
  ];

  return (
    <article id="pricing"> 
      <h3>pricing plans</h3> 
      <p>let's find the perfect plan</p>
      <ul className='pricing_list'>
        {pList.map( (data) => <PricingList key={data.id} point={data.point} />)}
      </ul>
    </article>
  )
}

export default Pricing