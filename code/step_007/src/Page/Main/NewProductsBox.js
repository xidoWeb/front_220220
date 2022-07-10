// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import CardArea from '../../Component/CardArea';
import cardData from '../../data/newProductsData.json';
import './newBox.scss';

function NewProductsBox() {

  // const [cardData, setCardData] = useState('');
  // const dataUrl = process.env.PUBLIC_URL + '/data/NewProductsData.json';
  // useEffect( ()=>{
  //   axios(dataUrl)
  //     .then(code => { setCardData(code.data) })
  // }, [])

  return (
    <article id="newBox">
      <h2>NewProductsBox</h2>
      {<CardArea cardData={cardData} />}
    </article>
  )
}

export default NewProductsBox