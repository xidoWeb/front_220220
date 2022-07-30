import React from 'react'
import './CardLink.scss';

function CardLink(props) {
  return (
    <div className='card_link' style={{backgroundImage:`url(${props.bgImg})`}}>
      <a href='#'>
        <dl className="user_name">
          <dt>{props.userName}</dt> 
          <dd>{props.useFamily}</dd>
        </dl>
      </a>
    </div>
  )
}

export default CardLink