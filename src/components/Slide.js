import React , { useEffect } from 'react';
import { withRouter } from 'react-router';

function Slide(props) {
  const page = props.page;
  const pageName = props.pageName;
  const { history } = props;

  const checkpage = () => {
    let arr;
    if (page === 'page1') {
      arr = [
        {
           name: '인사말',
           page: '/page1-1'
        }, 
        {
          name: '경영이념',
          page: '/page1-2'
        }, 
        {
          name: '조직현황',
          page: '/page1-3'
        },
        {
          name: '인증서',
          page: '/page1-4'
        },
      ];
      return arr;
    } else if (page === 'page2') {
      arr = [
        {
          name: '준공/ 시공사진',
          page: '/page2-1'
        },
      ];
      return arr;
    } else if (page === 'page3') {
      arr = [
        {
          name: '공사실적현황',
          page: '/page3-1',
        },
      ];
      return arr;
    } else {
      arr = [
        {
          name: '약도',
          page: '/page4-1'
        },
      ];
      return arr;
    }
  }

  useEffect(() => {
    checkpage();
  });


  return (
    <div id='slide-backgroud'>
      <div id ='slide-container'>
      {
        checkpage().map((data) => (
          data.name === pageName
            ? 
            <button
            className='list-button'
            key={data.name}
            onClick={() => {
              history.push(data.page);
            }} 
            style={{backgroundColor: 'rgb(107, 92, 82)', color: 'white'}}
          >
            {data.name}
          </button> 
            :
          <button
            className='list-button'
            key={data.name}
            onClick={() => {
              history.push(data.page);
            }} 
          >
            {data.name}
          </button>
        ))
      }
      </div>
    </div>
  )
}

export default withRouter(Slide);