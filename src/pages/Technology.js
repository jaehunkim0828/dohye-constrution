import React from 'react';
import Slide from '../components/Slide';
import image from '../images/technology.png';

function Technology() {
  const page = 'page3';
  const pageName = '기술자 보유현황';

  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <div id='technology-container'>
       
        <div className='title' id='tech-title'>
          <div className='title-korean'>
          기술자 보유현황
          </div>
          <div className='title-english'>
            <div className='title-english-top'>Details of</div>
            <div className='title-english-bottom'>Employed Engineers</div>
          </div>
          <div className='title-korean2'>
          고객의 만족을 최우선으로 생각합니다.
          </div>  
        </div>
        

        <div id='technology-image'>
          <img src={image} style={{width: '48rem'}}/>
        </div>
      </div>
    </div>
  );
}

export default Technology;