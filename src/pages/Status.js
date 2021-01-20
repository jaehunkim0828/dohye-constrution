import React from 'react';
import Slide from '../components/Slide';

function Status() {
  const page = 'page1';
  const pageName = '조직현황';

  return (
    <div>
      <Slide page={page} pageName={pageName}/>
      <div>hi</div>
    </div>
  );
}

export default Status;