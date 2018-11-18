import React from 'react';


const Blogpost = ({title, subtitle, date}) => {
    
  return (
    <div>
        <div className='blogEntry'>
            <h2 className='blogTitle'>{title}</h2>
            <h3 className='blogSubtitle'>{subtitle}</h3>
            <h4 className='blogDate'>{date}</h4>
        </div>
    </div>
  );
}

export default Blogpost;