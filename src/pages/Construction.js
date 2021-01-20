import React from 'react';
import Slide from '../components/Slide';

function Construction() {
  const page = 'page2';
  const pageName = '준공/ 시공사진';

  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <div>hi</div>
    </div>
  );
}

export default Construction;