import React from 'react';
import { Slide } from 'react-slideshow-image';

import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpeg';
import back from '../images/back-icon.png';
import next from '../images/next-icon.png';


const CustomSlideImage = () => {
  const images = [
    image1,
    image2,
    image3
  ];

  const slideInProperties = {
    indicators: true,
    scale: 1.4,
    prevArrow: <div style={{width: '30px', marginRight: "-30px"}}><img src={next} alt='none' style={{ width: '2rem', cursor: 'pointer' }}/></div>,
    nextArrow: <div style={{width: '30px', marginLeft: "-30px"}}><img src={back} alt='none' style={{ width: '2rem', cursor: 'pointer' }}/></div>,
  }
  return (
    <div>
      <Slide easing="ease" {...slideInProperties}>
        <div className="each-slide">
          <div style={{width: "100%"}}>
            <div id='slide-image-container'style={{ objectFit: "cover", width: "100%", height: '80vh', background: `url(${image1}) no-repeat center center`, backgroundSize: 'cover'}} >
              <div id='slide-image-script1-1'>
                <div id='slide-image-1'>
                  (주)엑시콘 천안공장 신축공사
                </div>
              </div>
              <div className='slide-image-script1-2'>
                <div>
                  <span className='slide-script1'>(주)도혜</span>
                  <span id='slide-script-black' className='slide-script1'>  종합건설</span>
                </div>
                <div className='slide-subscript1'>저희는 신뢰를 바탕으로 정직하게 공사합니다</div>
                <div className='slide-subscript1'>이 신뢰를 바탕으로 플렌트건설 및 정무공사 중심으로 거듭 발전하고 있습니다.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{width: "100%"}}>
            <div style={{ objectFit: "cover", width: "100%", height: '80vh', background: `url(${image2}) no-repeat center center`, backgroundSize: 'cover'}} >
              <div id='slide-img-script2'>
                <div>
                  국민연금관리공단 제2사옥
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{width: "100%"}}>
            <div style={{ objectFit: "cover", width: "100%", height: '80vh', background: `url(${image3}) no-repeat center center`, backgroundSize: 'cover'}} >
              <div id='slide-script3'>
                <div>
                  <span className='slide-script3-title'>(주)도혜</span>
                  <span id='slide-script-black' className='slide-script3-title'>종합건설</span>
                </div>
                <div>
                  <div className='slide-script3-sub'>1. 고객신뢰 만족</div>
                  <div className='slide-script3-sub'>2. 내영경영</div>
                  <div className='slide-script3-sub'>3. 품질만족</div>
                  <div className='slide-script3-sub'>4. 서비스만족</div>
                  <div className='slide-script3-sub'>5. 기술 축척</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default CustomSlideImage;



//style={{ objectFit: "cover", width: "100%", height: '80vh'}}