import React from 'react';
import Blogpost from './Blogpost'

const Bloglist = () => {
  return (
    <div className='blogList'>
        <Blogpost 
            title='Blogs are cool'
            subtitle='Click here to read more'
            date='created and posted today'
        />
        <Blogpost 
            title='Man must explore, and this is exploration at its greatest'
            subtitle='Problems look mighty small from 150 miles up'
            date='Posted by Start Bootstrap on September 24, 2018'
        />
        <Blogpost 
            title='I believe every human has a finite number of heartbeats. I dont intend to waste any of mine.'
            subtitle=''
            date='Posted by Start Bootstrap on September 18, 2018'
        />
        <Blogpost 
            title='Science has not yet mastered prophecy'
            subtitle='We predict too much for the next year and yet far too little for the next ten.'
            date='Posted by Start Bootstrap on August 24, 2018'
        />
        <Blogpost 
            title='Failure is not an option'
            subtitle='Many say exploration is part of our destiny, but it’s actually our duty to future generations.'
            date='Posted by Start Bootstrap on July 8, 2018'
        />
        <Blogpost 
            title=''
            subtitle=''
            date=''
        />

    </div>
  );
}

export default Bloglist;