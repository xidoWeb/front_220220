// HeadBox.js


import PageTitle from './PageTitle';
import Navigation from './Navigation';
import './HeadBox.css';

function HeadBox(){
  return (
    <header id="HeadBox">
        <div className="container">
          <PageTitle />
          <Navigation />          
        </div>
    </header>
  )
}

export default HeadBox;