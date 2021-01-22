import React from 'react';
import Slide from '../components/Slide';

import Image1 from '../images/corporation1.png';
import Image2 from '../images/corporation2.png';

function Coporation() {
  const page = 'page3';
  const pageName = '공사실적현황';
  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <div id='corporation-container'>
        <div className='title' id='corporation-title'>
          <div className='title-korean'>
          공사실적현황
          </div>
          <div className='title-english'>
            <div className='title-english-top'>Details of</div>
            <div className='title-english-bottom'>Completed Projects</div>
          </div>
          <div className='title-korean2'>
            고객의 만족을 최우선으로 생각합니다.
          </div>  
        </div>

        <div id='corporation-img'>
          <img src={Image1} style={{width: '48rem'}}/>
          <img src={Image2} style={{width: '48rem'}}/>
        </div>
      </div>
    </div>
  );
}

export default Coporation;