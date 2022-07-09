import React from 'react'
import HeadBox from './Component/HeadBox'
import FootBox from './Component/FootBox'
import ViewBox from './Page/Main/ViewBox'
import NewProductsBox from './Page/Main/NewProductsBox'
import './App.scss';

function App() {
  return (
    <div className='App'>
      <HeadBox />
      <ViewBox />
      <NewProductsBox />
      <FootBox />
    </div>
  )
}

export default App