import React from 'react';
import './ViewBox.scss';

function ViewBox() {
  return (
    <section id="viewBox">
      <h2 className='blind'>광고 영역</h2>
      <div className='buttons'>
        <button type="button" className='next'>
          <span>next</span>
        </button>
        <button type="button" className='prev'>
          <span>prev</span>
        </button>
      </div>
      <div className='indicators'>
        <ul>
          <li><a href="#">0</a></li>
          <li><a href="#">0</a></li>
          <li><a href="#">0</a></li>
          <li><a href="#">0</a></li>
          <li><a href="#">0</a></li>
        </ul>
        <p>
          <span className='total'>5</span>
          /
          <span className='now'>1</span>
        </p>
      </div>
      <div className='slide_wrapper'></div>
    </section>
  )
}

export default ViewBox