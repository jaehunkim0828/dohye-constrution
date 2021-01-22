import React from 'react';
import Slide from '../components/Slide';
import image from '../images/status.png';

function Status() {
  const page = 'page1';
  const pageName = '조직현황';

  return (
    <div>
      <Slide page={page} pageName={pageName}/>

      <div id='status-container'>
        <div className='title'>
          <div className='title-korean'>
            조직현황
          </div>
          <div className='title-english'>
            <div className='title-english-top'>Company</div>
            <div className='title-english-bottom'>ORGANIZATION</div>
          </div>
          <div className='title-korean2'>
            고객의 만족을 최우선으로 생각합니다.
          </div>  
        </div>

        <div id='status-image'>
          <img src={image} style={{width: '55rem'}}/>
        </div>
      </div>

    </div>
  );
}

export default Status;