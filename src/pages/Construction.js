import React from 'react';

import Slide from '../components/Slide';
import Title from '../components/Title';
import image1 from '../images/cst1.jpg';
import image2 from '../images/cst2.jpg';

function Construction() {
  const page = 'page2';
  const pageName = '준공/ 시공사진';
  const titleObj = {title: 'Company', subtitle: 'PORTPOLIO'};

  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <div className='construction-container'>
        <Title pageName={pageName} title={titleObj.title} subtitle={titleObj.subtitle} />
        <div id='construction-row-list'>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image1} alt='none' style={{minWidth: '7rem',width: '14rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>공사명: (주)경동세라텍아산공장증축공사</div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>발주처: (주)경동세라텍</div>
                  <div className='construction-text-items'>공사기간: 09.12.17 ~ 10.08.11</div>
                  <div className='construction-text-items'>공사금액: 1,474백만원</div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'>
              <img src={image2} alt='none' style={{minWidth: '7rem',width: '14rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>공사명: (주)엑시콘 천안공장 신축공사</div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>발주처: (주)엑시콘</div>
                  <div className='construction-text-items'>공사기간: 10.05.23 ~ 10.12.15</div>
                  <div className='construction-text-items'>공사금액: 3,300백만원</div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'></div>
              <div className='construction-text'>
                <div className='construction-text-title'></div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Construction;