import React from 'react';
import Slide from '../components/Slide';


function Ideology() {
  const page = 'page1';
  const pageName = '경영이념';

  return (
    <div>
      <Slide page={page} pageName={pageName}/>
      <div>hi</div>
    </div>
  );
}

export default Ideology;