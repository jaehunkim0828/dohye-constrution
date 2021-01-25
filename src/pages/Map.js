import React from 'react';
import Slide from '../components/Slide';
import Title from '../components/Title';
import Image from '../images/map.png';

function Map() {
  const page = 'page4';
  const pageName = '약도';
  const titleObj = {title: 'Dohye', subtitle: 'MAP'};

  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <div id='map-container'>
        <div className='title' id='map-title'>
          <Title pageName={pageName} title={titleObj.title} subtitle={titleObj.subtitle} />  

          <div className='map-address'>
            <div>
              <span className='map-address-red'>주소지: </span>
              <span>경기 수원 영통구 청명남로 60번길2(영통동,3층) </span>
            </div>
            <div>
              <span className='map-address-red'>전화: </span>
              <span>031-202-5200</span>
            </div>
            <div>
              <span className='map-address-red'>대중교통: </span>
              <span>청명역 수인분당선 3번출구 </span>
            </div>
          </div>
        </div>

        <div id='map-img'>
          <img src={Image} style={{width:'42rem'}}/>
        </div>
      </div>
    </div>
  );
}

export default Map;