import React from 'react';
import Slide from '../components/Slide';

function Brochure() {
  const page = 'page4';
  const pageName = '브로셔';

  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <div>hi</div>
    </div>
  );
}

export default Brochure;