import React from 'react';

function Title(props) {
  const { pageName, title, subtitle } = props;
  return (
    <div className='page-title-container'>
      <div className='page-title'>{pageName}</div>
      <div className='page-subtitle'>
        <div className='page-subtitle-black'>{title}</div>
        <div className='page-subtitle-red'>{subtitle}</div>
      </div>
    </div>
  )
}

export default Title;