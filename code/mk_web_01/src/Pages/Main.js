// import React, {useEffect, useState} from 'react';
import MainView from './Main/MainView';
import Amazing from './Main/Amazing';
import Company from './Main/Company';
import Pricing from './Main/Pricing';
import Testimonals from './Main/Testimonals';
import Lastest from './Main/Lastest';
import Experience from './Main/Experience';

function Main() {

  return (    
    <div>
      <MainView />
      <Amazing />
      <Company />
      <Pricing />
      <Testimonals />
      <Lastest />
      <Experience />
    </div>
  )
}

export default Main