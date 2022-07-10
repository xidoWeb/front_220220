import React from 'react';

function CardList({attr}) {  
  const style = {backgroundImage:`url(${process.env.PUBLIC_URL}img/cardList/${attr.img})`};
  
  return (
    <li>
      <a 
      href={attr.link} 
      style={style}>
        <dl>
          <dt>{attr.title}</dt>
          <dd>{attr.content}</dd>
        </dl>
      </a>
    </li>
  )
}

export default CardList