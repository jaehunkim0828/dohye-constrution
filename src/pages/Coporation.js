import React from 'react';
import Slide from '../components/Slide';

function Coporation() {
  const page = 'page3';
  const pageName = '공사실적현황';
  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <div>hi</div>
    </div>
  );
}

export default Coporation;