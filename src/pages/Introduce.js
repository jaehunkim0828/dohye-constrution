import React from 'react';
import Slide from '../components/Slide';

function Introduce() {
  const page = 'page1';
  const pageName = '인사말';
  return (
    <div>
      <Slide pageName={pageName} page={page}/>

      <div id='intro-container'>

        <div className='title'>
          <div className='title-korean'>
            CEO 인사말
          </div>
            <div className='title-english'>
              <div>
                <span id='intro-english-top-red' className='intro-english-top'>President</span>
                <span className='intro-english-top'>'s</span>
              </div>
              <div id= 'intro-english-bottom' className='title-english-bottom'>
                MESSAGES
              </div>
            </div>
            <div className='title-korean2'>
            고객의 만족을 최우선으로 생각합니다.
            </div>  
          </div>
      
        <div id='introduction'>
          <div>
          <span className='intro-first'>저희는 </span>
          <span id='intro-bold-first' className='intro-first'>신뢰</span>
          <span className='intro-first'>를 바탕으로 </span>
          <span id='intro-bold-second' className='intro-first'>정직</span>
          <span className='intro-first'>하게 공사합니다.</span>
          </div>
          <div id='intro-middle1'>
          안녕하십니까!
          </div>
          <div id='intro-middle2'>
          2008년 설립하여 2020년까지 플렌트건설 및 정무공사 중심으로 
          </div>
          <div id='intro-middle3'>
          고객 여러분의 신뢰를 바탕으로 거듭 발전하고 있습니다.
          </div>
          <div id='intro-middle4'>
          당사는 반도체 및 다양한 플렌트 건축으로 사업영역을 넓혀가고
          </div>
          <div id='intro-middle5'>
          있으며 도전과 열정에 변함없는 사랑으로 지켜봐주시기 바랍니다.
          </div>
          <div id='intro-bottom'>
          <span className='intro-bottom'> (주) </span>
          <span id='intro-bottom-red' className='intro-bottom'> 도혜 </span>
          <span className='intro-bottom'> 종합건설 대표이사 </span>
          </div>
          <div id='intro-name'>
            최 병재
          </div>
        </div>

      </div>
    </div>
  );
}

export default Introduce;