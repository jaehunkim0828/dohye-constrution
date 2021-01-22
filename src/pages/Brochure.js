import React from 'react';
import Slide from '../components/Slide';
import Image from '../images/brochureLogo.png';
function Brochure() {
  const page = 'page4';
  const pageName = '브로셔';

  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <div id='brochure-container'>
        <div className='title' id='brochure-title'>
          <div className='title-korean'>
            지명원
          </div>
          <div className='title-english'>
            <div class='title-english-bottom'>BROCHURE</div>
          </div>
          <div className='title-korean2'>
            고객의 만족을 최우선으로 생각합니다.
          </div>  
        </div>

        <div id='brochure-container-bottom'>
          <div id='brochure-logo'>
            <img src={Image} style={{width:'35rem'}}/>
          </div>
          <div id='brochure-download'>
            <div id='brochure-korean'>
              도혜종합건설의 PDF자료를 다운 받으실수 있습니다.
            </div>
            <div id='brochure-download-button'>
              <button id='brochure-download-button2'>
                브로슈어 다운로드
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Brochure;