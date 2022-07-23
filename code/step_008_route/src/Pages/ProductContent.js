import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ProductContent() {
  const navigate = useNavigate();

  return (
    <>
      <h2>ProductContent</h2>
      <ul>
        <li>
          <div className='image'></div>
          <p>1. Lorem, ipsum dolor.</p>
          <div className='link'>
            <Link to='about'>about페이지 이동</Link>
            <button type="button" onClick={ ()=> navigate('about')  }>상세 내용 보기</button>
          </div>
        </li>
        <li>
          <div className='image'></div>
          <p>2. Lorem, ipsum dolor.</p>
          <div className='link'>
            <button type="button">상세 내용 보기</button>
          </div>
        </li>
        <li>
          <div className='image'></div>
          <p>3. Lorem, ipsum dolor.</p>
          <div className='link'>
            <button type="button">상세 내용 보기</button>
          </div>
        </li>
        <li>
          <div className='image'></div>
          <p>4. Lorem, ipsum dolor.</p>
          <div className='link'>
            <button type="button">상세 내용 보기</button>
          </div>
        </li>
        <li>
          <div className='image'></div>
          <p>5. Lorem, ipsum dolor.</p>
          <div className='link'>
            <button type="button">상세 내용 보기</button>
          </div>
        </li>
      </ul>
    </>
  )
}

export default ProductContent