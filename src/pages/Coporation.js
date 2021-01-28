import React from 'react';

import Slide from '../components/Slide';
import Title from '../components/Title';
import Image1 from '../images/corporation1.png';
import Image2 from '../images/corporation2.png';

function Coporation() {
  const page = 'page3';
  const pageName = '공사실적현황';
  const titleObj = {title: 'Details of ', subtitle: 'Completed Projects'};

  return (
    <div className='page-padding'>
      <Slide page={page} pageName={pageName} />
      <Title pageName={pageName} title={titleObj.title} subtitle={titleObj.subtitle} />
      <div id='corporation-container'>
        <div id='corporation-img'>
          <img src={Image1} style={{width: '100%'}} alt='none' />
          <img src={Image2} style={{width: '100%'}} alt='none' />
        </div>
      </div>
    </div>
  );
}

export default Coporation;