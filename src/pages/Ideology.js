import React from 'react';
import Slide from '../components/Slide';
import Title from '../components/Title';

import image from '../images/ideology.png';


function Ideology() {
  const page = 'page1';
  const pageName = '경영이념';
  const titleObj = {title: 'Company', subtitle: 'MOTTO'};

  return (
    <div className='page-padding'>
      <Slide page={page} pageName={pageName}/>
      <Title pageName={pageName} title={titleObj.title} subtitle={titleObj.subtitle} />
      <div id='id-container'>
        <div id='id-image'>
          <div>
            <span id='id-image-title-red' className='id-image-title'> 도혜 </span>
            <span className='id-image-title'>종합건설</span>
            <span id='id-image-title-black' className='id-image-title'> 경영이념</span>
          </div>
          <img src={image} style={{width: '30rem'}} alt='none' />
        </div>
      </div>
    </div>
  );
}

export default Ideology;