import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardArea from '../../Component/CardArea'
// import NewProductsData from './data/NewProductsData'

function NewProductsBox() {
  // const cardData = NewProductsData;
  const [cardData, setCardData] = useState('');
  const dataUrl = process.env.PUBLIC_URL + '/data/NewProductsData.json';
  useEffect( ()=>{
    axios(dataUrl)
      .then(code => { setCardData(code.data) })
  }, [])

  return (
    <div>
      <h2>NewProductsBox</h2>
      {<CardArea cardData={cardData} />}
    </div>
  )
}

export default NewProductsBox