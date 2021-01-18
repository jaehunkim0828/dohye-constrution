import React from 'react';
import { withRouter } from 'react-router';

import CustomSlideImage from '../components/CustomSlideImages';
import image1 from '../images/mainLogo.png';
import image2 from '../images/building.png';
import image3 from '../images/hook.png';
import image4 from '../images/search.png';



function Home(props) {
  const { history } = props;

  return (
    <div>
      <CustomSlideImage />
      <div id='home-container'>
        <div id='home-text'>
          <span className='home-information' style={{color: 'rgb(179, 35, 24)',}}>Dohye</span>
          <span className='home-information'> information</span>
        </div>
        <div id='home-box'>
          <div className='home-rowbox'>
            <button id='home-firstbox' style={{cursor: 'default'}}>
            <img src={image1} alt="도혜 종합건설" style={{width: '14rem'}}/>
            </button>
            <button
              onClick={() => {
                history.push('/page2')
              }} 
              className='home-onebox'
            >
              <div className='home-image-name'>시공현장</div>
              <img src={image2} alt="시공현장" style={{width: '6rem'}}/>
            </button>
          </div>
          <div className='home-rowbox'>
            <button
              onClick={() => {
                history.push('/page3-1')
              }} 
              className='home-onebox'
            >
            <div className='home-image-name'>공사현황</div>
              <img src={image3} alt="공사현황" style={{width: '6rem'}}/>
            </button>
            <button
              onClick={() => {
                history.push('/page4-1')  
              }} 
              className='home-onebox'
            >
              <div className='home-image-name'>홍보센터</div>
              <img src={image4} alt="공사현황" style={{width: '6rem'}}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);