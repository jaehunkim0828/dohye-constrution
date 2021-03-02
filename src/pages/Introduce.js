import React from 'react';
import Slide from '../components/Slide';
import Title from '../components/Title';

function Introduce() {
  const page = 'page1';
  const pageName = '인사말';
  const titleObj = {title: 'President', subtitle: 'MESSAGES'};

  return (
    <div>
      <Slide page={page} pageName={pageName}/>
      <div id='intro-container'>
        <div id='intro-title'>
          <div className='page-title'>CEO인사말</div>
          <div className='page-subtitle'>
            <div className='page-subtitle-black'>President</div>
            <div className='page-subtitle-red'>MESSAGES</div>
            <div className='title-korean2'>
              고객의 만족을 최우선으로 생각합니다.
            </div> 
          </div>
        </div>
        <div id='introduction'>
          <div id='intro-text-container'>
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
              (주)도혜종합건설은 2009년 창시이래, 공장 plant 건축의  
            </div>
            <div id='intro-middle3'>
              꾸준한 기술혁신을 추구해 왔으며, 책임시공, 고객신뢰 라는  
            </div>
            <div id='intro-middle4'>
              사명 아래, 전 임,직원이 최고의 품질경영에 매진하여,
            </div>
            <div id='intro-middle5'>
              경제적 가치를 소중히 생각하는 종합건설회사 입니다.
            </div>
            <div>
              저희 (주)도혜종합건설은 과거와 햔재에 만족하지 않고 
            </div>
            <div>
              다양한 기술개발과인재양성에 투자하며, 새로운 plant
            </div>
            <div>
              건축문화를 추구하는 선두적인 종합건설회사가 되겠습니다.
            </div>
            <div>
              꾸준한 관심과 성원을 부탁드립니다. 감사합니다.
            </div>
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