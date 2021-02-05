import React from 'react';
import Slide from '../components/Slide';
import image from '../images/status.png';
import Title from '../components/Title';

function Status() {
  const page = 'page1';
  const pageName = '조직현황';
  const titleObj = {title: 'Company', subtitle: 'ORGANIZATION'};

  return (
    <div className='page-padding'>
      <Slide page={page} pageName={pageName}/>
      <Title pageName={pageName} title={titleObj.title} subtitle={titleObj.subtitle} />
      <div id='status-container'>
        <div id='status-image'>
          <img src={image} id='status-img' alt='none' />
        </div>
      </div>

    </div>
  );
}

export default Status;