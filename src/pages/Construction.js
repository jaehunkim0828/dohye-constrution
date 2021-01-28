import React from 'react';

import Slide from '../components/Slide';
import Title from '../components/Title';
import image1 from '../images/cst1.jpg';
import image2 from '../images/cst2.jpg';
import image3 from '../images/cst3.JPG';
import image4 from '../images/cst4.jpg';
import image5 from '../images/cst5.jpg';
import image6 from '../images/cst6.jpg';
import image7 from '../images/cst7.jpg';
import image8 from '../images/cst8.jpg';
import image9 from '../images/cst9.png';
import image10 from '../images/cst10.jpg';
import image11 from '../images/cst11.jpg';
import image12 from '../images/cst12.jpg';
import image13 from '../images/cst13.jpg';
import image14 from '../images/cst14.jpg';

function Construction() {
  const page = 'page2';
  const pageName = '준공/ 시공사진';
  const titleObj = {title: 'Company', subtitle: 'PORTPOLIO'};

  return (
    <div className='page-padding'>
      <Slide page={page} pageName={pageName} />
      <div className='construction-container'>
        <Title pageName={pageName} title={titleObj.title} subtitle={titleObj.subtitle} />
        <div id='construction-row-list'>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image1} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>공사명: (주)경동세라텍아산공장증축공사</div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>발주처: (주)경동세라텍</div>
                  <div className='construction-text-items'>공사기간: 09.12.17 ~ 10.08.11</div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'>
              <img src={image2} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>공사명: (주)엑시콘 천안공장 신축공사</div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>발주처: (주)엑시콘</div>
                  <div className='construction-text-items'>공사기간: 10.05.23 ~ 10.12.15</div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'>
               <img src={image3} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>
                  공사명: 가야미(주) 증축공사
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: 가야미(주)
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 10.07.12 ~ 11.03.30
                  </div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image4} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>
                  공사명: (주)엑시콘 천안공장 신축공사
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: (주)엑시콘
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 10.05.23 ~ 10.12.15
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image5} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>
                  공사명: (주)영재철강 안산공장 신축공사
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: (주)영재철강
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 2014.04.15 ~ 2014.10.31
                  </div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image6} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>
                  공사명: 중앙고속 화성 정비공장 증·개축공사
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: (주)중앙고속
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 14. 06. 09 ~ 15. 02. 13
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image7} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>
                  공사명: 왕림개발(주) 근린생활 신축공사
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: 왕림개발(주)
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 14.12.01 ~ 15.05.10
                  </div>
                  <div className='construction-text-items'></div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image8} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>
                  공사명: (주)벨란 안산공장 신축공사
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: (주) 벨란
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 15.07.13 ~ 15.12.24
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image9} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>
                  공사명: YIK(주) 아산공장 신축공사
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: 와이아이케이(주)
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 16.02.28 ~ 16.05.30
                  </div>                  
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image10} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div className='construction-text-title'>
                  공사명: (주)샘텍 아산공장 신축공사
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: (주) 샘텍
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 17.10.26 ~ 18.03.31
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image11} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />  
              </div>
              <div className='construction-text'>
                <div>  
                  <div className='construction-text-title'>
                    공사명: 베트남 하노이 하이퐁공단
                  </div>
                  <div className='construction-text-title'>
                    동남석유공업공장 신축공사
                  </div>
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: 동남석유(주)
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 16.02.15 ~ 16.07.30
                  </div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image12} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div>
                  <div className='construction-text-title'>
                    공사명: 국민연금관리공단 제2사옥
                  </div>
                  <div className='construction-text-title'>
                    신축사업 건축공사
                  </div>
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: 국민연금관리공단
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 19. 03. 04 ~ 20. 12. 22
                  </div>                  
                </div>
              </div>
            </div>
          </div>
          <div className='construction-row-container'>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image13} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div>  
                  <div className='construction-text-title'>
                    공사명: ㈜대한제이디 자동차관련시설
                  </div>
                  <div className='construction-text-title'>
                    신축공사
                  </div>
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: (주)대한제이디
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 19.10.29 ~ 20.01.31
                  </div>
                </div>
              </div>
            </div>
            <div className='construction-item-container'>
              <div className='construction-image'>
                <img src={image14} alt='none' style={{minWidth: '7rem',width: '12rem', height: '100%',}} />
              </div>
              <div className='construction-text'>
                <div>
                  <div className='construction-text-title'>
                    공사명: ㈜지투비 평택 
                  </div>
                  <div className='construction-text-title'>
                    드림테크공장 신축공장
                  </div>
                </div>
                <div className='construction-text-content'>
                  <div className='construction-text-items'>
                    발주처: (주)지투비  
                  </div>
                  <div className='construction-text-items'>
                    공사기간: 20.06.01 ~ 20.12.31  
                  </div>
                  <div className='construction-text-items'>

                  </div>
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