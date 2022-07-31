import React, {useState} from 'react';
import ContainerApp from '../../Component/ContainerApp';
import './Tesimonals.scss';

function Testimonals() {

  const cardList = [];
  const [list, setList] = useState(cardList);
  // for(let i=0; i<35; i++){
  //   setList(list=> {...list, })
  // }
  
  return (
    <article id="testimonals"> 
      <ContainerApp>
        <h3>testimonals</h3>   
        <p>Awesome clientss we've worked with</p>
      </ContainerApp>

      <div className="worked_card_list">
        <div className="indicator"></div>
        
        <ul className='card_list'>
          {
            cardList.map((data,index)=><li key={index}>{index}</li>)
          }
        </ul>
      </div>

    </article>
  )
}

export default Testimonals