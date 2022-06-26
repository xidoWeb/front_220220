// ContentBox.js
import MainSlide from './template/MainSlide';
import Curriculum from './template/Curriculum';

import './ContentBox.css';

function ContentBox(){
 return (
  <main id="ContentBox">
    <MainSlide />
    <Curriculum />
  </main>
 )
}

export default ContentBox;