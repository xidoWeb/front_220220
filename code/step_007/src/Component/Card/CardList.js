import React from 'react'

function CardList({attr}) {  
  return (
    <li>
      <a herf={attr.link}>
        <dl>
          <dt>{attr.title}</dt>
          <dd>{attr.content}</dd>
        </dl>
      </a>
    </li>
  )
}

export default CardList