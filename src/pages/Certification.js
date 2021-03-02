import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Slide from '../components/Slide';
import image1 from '../images/first.jpg';
import image2 from '../images/second.jpg';
import image3 from '../images/third.jpg';
import image4 from '../images/fourth.jpg';
import image5 from '../images/fifth.jpg';
import image6 from '../images/sixth.jpg';
import image7 from '../images/seventh.jpg';
import image8 from '../images/eighth.jpg';
import image9 from '../images/ninth.jpg';
import image13 from '../images/thirteenth.jpg';
import Title from '../components/Title';

function Certification() {
  const page = 'page1';
  const pageName = '인증서';
  const titleObj = {title: 'Company', subtitle: 'CERTIFICATION'};
  const [isOpen, changeBool] = useState(false);

  const showImage = () => {
    changeBool(true);
  }

  const leaveImage = () => {
    changeBool(false);
  }

  return (
    <div className='page-padding'>
      <Slide page={page} pageName={pageName}/>
      <Title pageName={pageName} title={titleObj.title} subtitle={titleObj.subtitle} />
      <div id='certification-container'>
        <div id='certification-registration'>
          <button 
            style={{border: 'none', background: 'none'}}
            onClick={() => {
              showImage();
            }}
          >
            <img src={image1} style={{width: '12rem'}} alt='none' />
          </button>
          <div id='certification-registration-intro'>
            <div id='certification-intro-name'>사업자 등록증</div>
            <div className='certification-intro-text'>법인명: (주) 도혜종합건설</div>
            <div className='certification-intro-text'>주관기관: 경기 도지사</div>
            <div className='certification-intro-text'>개업일: 2009/07/09</div>
            <div className='certification-intro-text'>사업자 등록증을 클릭하시면 자세히 확인하실 수 있습니다.</div>
          </div>
        </div>
        <div id='certification-img'>
          <div className='certification-row'>
            <div className='img-box'>
              <img src={image13} style={{width: '9rem'}} alt='none' />
              <div className='img-box-title'>
                사업자 등록증
              </div>
            </div>
            <div className='img-box'>
              <img src={image2} style={{width: '9rem'}} alt='none' />
              <div className='img-box-title'>
                건설업 등록증
              </div>
            </div>
            <div className='img-box'>
              <img src={image3} style={{width: '9rem'}} alt='none'/>
              <div className='img-box-title'>
                해외건설업 신고확인증
              </div>
            </div>
          </div>
          <div className='certification-row'>
            <div className='img-box'>
              <img src={image4} style={{width: '9rem'}} alt='none'/>
              <div className='img-box-title'>
                베트남 하노이 법인설립증
              </div>
            </div>
            <div className='img-box'>
              <img src={image5} style={{width: '9rem'}} alt='none'/>
              <div className='img-box-title'>
                외국인 투자허가증(1)
              </div>
            </div>
            <div className='img-box'>
              <img src={image6} style={{width: '9rem'}} alt='none'/>
              <div className='img-box-title'>
                외국인 투자허가증(2)
              </div>
            </div>
          </div>
          <div className='certification-row'>
            <div className='img-box'>
              <img src={image7} style={{width: '9rem'}} alt='none'/>
              <div className='img-box-title'>
                베트남 하노이 법인설립증
              </div>
            </div>
            <div className='img-box'>
              <img src={image8} style={{width: '9rem'}} alt='none'/>
              <div className='img-box-title'>
                건설업 등록수첩(1)
              </div>
            </div>
            <div className='img-box'>
              <img src={image9} style={{width: '9rem'}} alt='none'/>
              <div className='img-box-title'>
                건설업 등록수첩(2)
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
          <Lightbox
            mainSrc={image1}
            onCloseRequest={() => {
              leaveImage();
            }}
          />
        )}
    </div>
  );
}

export default Certification;