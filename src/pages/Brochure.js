import React from 'react';
import Slide from '../components/Slide';
import Image from '../images/brochureLogo.png';
import Title from '../components/Title';
function Brochure() {
  const page = 'page4';
  const pageName = '브로셔';
  const titleObj = {title: 'BROCHURE'};

  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <Title />
        <div id='brochure-container-bottom'>
          <div id='brochure-logo'>
            <img src={Image} style={{width:'35rem'}} alt='none' />
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
  );
}

export default Brochure;