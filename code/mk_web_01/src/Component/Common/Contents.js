import React from 'react';
import { Routes as RoutesWrap, Route } from 'react-router-dom';
import About from '../../Pages/About';
import Work from '../../Pages/Work';
import Services from '../../Pages/Services';
import Technologies from '../../Pages/Technologies';
import Modern from '../../Pages/Modern';
import Faq from '../../Pages/Faq';
import Supports from '../../Pages/Supports';
import Blog from '../../Pages/Blog';
import Main from '../../Pages/Main';
import Error from '../../Pages/Error';

function Contents() {
  const pageList = [ 
    {link:'/', page:<Main /> },
    {link:'home', page:<Main /> },
    {link:'about', page:<About /> },
    {link:'work', page:<Work /> },
    {link:'services', page:<Services /> },
    {link:'technologies', page:<Technologies /> },
    {link:'modern', page:<Modern /> },
    {link:'faq', page:<Faq /> },
    {link:'supports', page:<Supports /> },
    {link:'blog', page:<Blog /> },
    {link:'*', page:<Error />}
  ];

  return (
    <main className='content_area'>
      <h2>Contents</h2>
      <RoutesWrap>
        {/* <Route path="/" element={<Main />} /> */}
        {pageList.map((component, index) =>
            <Route key={index} path={component.link} element={component.page} />)}
      </RoutesWrap>
    </main>
  )
}

export default Contents