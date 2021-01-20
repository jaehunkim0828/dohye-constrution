import React from 'react';
import Slide from '../components/Slide';

function Technology() {
  const page = 'page3';
  const pageName = '기술자 보유현황';

  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <div>hi</div>
    </div>
  );
}

export default Technology;