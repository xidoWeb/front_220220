import logo from './logo.svg';
import './App_source.scss';

function App() {

  const audioImg = `url(${process.env.PUBLIC_URL}img/Audio.svg)`;

  return (
    <div className="App">
      <h1 className='blind_area'>
        <a href="#" style={{backgroundImage : `url(${logo})`}}>
          <span>compony</span>
        </a>
      </h1>
      <div className='size' style={{backgroundImage : audioImg}}></div>
      <div className='size'>
        <img src={`${process.env.PUBLIC_URL}img/Audio.svg`} alt='#' />
      </div>

    </div>
  );
}

export default App;
