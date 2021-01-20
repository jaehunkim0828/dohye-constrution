import React from 'react';
import Slide from '../components/Slide';

function Brochure() {
  const page = 'page4'
  return (
    <div>
      <Slide page={page}/>
      <div>hi</div>
    </div>
  );
}

export default Brochure;