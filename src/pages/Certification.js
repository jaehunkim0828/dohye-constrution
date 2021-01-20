import React from 'react';
import Slide from '../components/Slide';

function Certification() {
  const page = 'page1'
  const pageName = '인증서'

  return (
    <div>
      <Slide page={page} pageName={pageName}/>
      <div>hi</div>
    </div>
  );
}

export default Certification;