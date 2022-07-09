import React , {useState, useEffect} from 'react'
import CardList from './Card/CardList'

function CardArea({cardData}) { 
  // console.log( cardData )

  const [attr, setAttr] = useState(cardData);
  useEffect(()=>{ setAttr(cardData); }, [attr])
  const codeList = attr.map(data => <CardList attr={data} key={data.id} />);
    return (
    <div>
      <ul>
        {codeList}
      </ul>
    </div>
  )
}

export default CardArea