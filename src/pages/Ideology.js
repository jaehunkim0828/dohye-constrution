import React from 'react';
import Slide from '../components/Slide';

import image from '../images/ideology.png';


function Ideology() {
  const page = 'page1';
  const pageName = '경영이념';

  return (
    <div>

      <Slide page={page} pageName={pageName}/>

      <div id='id-container'>
        <div className='title'>
          <div className='title-korean'>
            경영이념
          </div>
          <div className='title-english'>
            <div className='title-english-top'>Company</div>
            <div className='title-english-bottom'>MOTTO</div>
          </div>
          <div className='title-korean2'>
            고객의 만족을 최우선으로 생각합니다.
          </div>  
        </div>

        <div id='id-image'>
          <div>
            <span id='id-image-title-red' className='id-image-title'> 도혜 </span>
            <span className='id-image-title'>종합건설</span>
            <span id='id-image-title-black' className='id-image-title'> 경영이념</span>
          </div>
          <img src={image} style={{width: '30rem'}}/>
        </div>
      </div>

    </div>
  );
}

export default Ideology;