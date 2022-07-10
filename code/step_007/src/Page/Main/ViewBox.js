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
        <ul className='blind_area'>
          <li className='action'><a href="#">
            <span>1번째 광고 요약 설명</span>
          </a></li>
          <li><a href="#">
            <span>2번째 광고 요약 설명</span>
          </a></li>
          <li><a href="#">
            <span>3번째 광고 요약 설명</span>
          </a></li>
          <li><a href="#">
            <span>4번째 광고 요약 설명</span>
          </a></li>
          <li><a href="#">
            <span>5번째 광고 요약 설명</span>
          </a></li>
        </ul>
        <p>
          <span className='now'>1</span>/
          <span className='total'>5</span>
        </p>
      </div>
      <div className='slide_wrapper fade_area'>
        <ul>
          <li>광고1</li>
          <li>광고2</li>
          <li>광고3</li>
          <li>광고4</li>
          <li>광고5</li>
        </ul>
      </div>
    </section>
  )
}

export default ViewBox