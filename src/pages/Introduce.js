import React from 'react';
import Slide from '../components/Slide';


function Introduce() {
  const page = 'page1'
  return (
    <div>
      <Slide page={page}/>
      <div>hi</div>
    </div>
  );
}

export default Introduce;