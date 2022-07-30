import React, {useEffect, useState} from 'react';
import CardApp from '../Component/CardApp';
import CardUser from '../Component/CardUser';
import CardLink from '../Component/CardLink';
import axios from 'axios';

function Main() {
  const [isDark, setisDark] = useState(true);
  const [photoJson, setPhotoJson] = useState(null);

  const cardStyle = { 
    width:'100%', height:'auto', padding:'30px 0',
    backgroundColor:'#cff', display:'flex',justifyContent:'center', gap:'40px',
    flexWrap:'wrap'
  };

  useEffect( ()=>{
    axios('https://randomuser.me/api/?results=10')
    .then(response => setPhotoJson(response.data.results))
  }, []);

  const userCode = photoJson && photoJson.map(
        (data, index)=> ({num: index,
                          position:data.id.value,
                          first:data.name.first, 
                          last:data.name.last,  
                          image: data.picture.large}) )
  return (    
    <div>
      {/* Main */}
      <article id="main"> <h3>main title</h3> </article>

      <article id="amazing"> 
        <h3>amazing service</h3> 
        <p>Lorem ipsum dolor, sit amet <br />
           consectetur adipisicing elit. Eveniet, quos.</p>
        <div className='card_wrap' style={cardStyle}>
          {/* {userCode && userCode.map(data=>
            <CardUser key={data.num} 
                      bgImg={data.image} 
                      userName={data.first} 
                      useFamily={data.last} 
                      userPosition={data.position} />
          )} */}

          {userCode && userCode.map((data) => 
            <CardUser
                key={data.num}
                bgImg={data.image}
                userName={data.first} 
                useFamily={data.last} 
                userPosition={data.position} />
            ) }



          <CardApp isDark={isDark}>
            {/* <CardUser></CardUser>
            <CardLink></CardLink>
            <CardMore></CardMore> */}
            <h3>title_01</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardApp>

          
        </div>  
      </article>



      <article id="compony"> <h3>compony info</h3> </article>
      <article id="pricing"> <h3>pricing plans</h3> </article>
      <article id="testimonals"> <h3>testimonals</h3> </article>
      <article id="lastest"> <h3>lastest news</h3> </article>
      <article id="experience"> <h3>experience</h3> </article>

    </div>
  )
}

export default Main