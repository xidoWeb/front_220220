import './App.css';

function ListItem(props){
  return (
    <li>
      <a href={props.link}>
        <div className='roundImage' style={{backgroundImage:`url(${props.image})`}}></div>
        <p>{props.content}</p>
      </a>
    </li>
  )
}

function App() {
  const listData = [
    {content:'content_001', image:'https://picsum.photos/id/237/200/200', link:'#'},
    {content:'content_002', image:'https://picsum.photos/id/247/200/200', link:'#'},
    {content:'content_003', image:'https://picsum.photos/id/257/200/200', link:'#'},
    {content:'content_004', image:'https://picsum.photos/id/267/200/200', link:'#'},
  ];
  let itemCode = [];
  itemCode = listData.map((data,index)=>{
    return <ListItem 
      key={index}
      content={data.content} 
      image={data.image}
      link={data.link}
      />
  })

  return (
    <div className='App'>
      <h2>지인몰</h2>
      <ul className='roundCard'>      
       {itemCode}
      </ul>
    </div>
  )
}

export default App;