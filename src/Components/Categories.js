import React, {useState} from 'react'
import App from '../App'
import Main from './Main';

const ListHover = () => {
    const video = document.getElementById('bg-video');
    if (video) {
        video.playbackRate = 1;
    }
};

const HoverEnd = () => {
    const video = document.getElementById('bg-video');
    if (video) {
        video.playbackRate = 2.5;
    }    
}

const sectionMove = () => {
    const block = document.getElementById('mainComponent');
    if (block) {
        block.style.transform = 'translateX(-100%)';
    }
}


function Categories() {

  return (
    <div>
        <ul id='categoriesList'>
            <li onMouseOver={ListHover} onMouseOut={HoverEnd}> 
                <h2>Education</h2>
                <p>Explore my academic journey and qualifications</p>
                <p className='showMore' onClick={sectionMove}>Show more</p>
            </li>
            <li onMouseOver={ListHover} onMouseOut={HoverEnd}>
                <h2>Career</h2>
                <p>Discover my professional experiences and accomplishments</p>    
                <p className='showMore'>Show more</p>                
            </li>
            <li onMouseOver={ListHover} onMouseOut={HoverEnd}>
                <h2>Skills</h2>
                <p>Browse through the skills I've honed over the years</p>
                <p className='showMore'>Show more</p>
            </li>
            <li onMouseOver={ListHover} onMouseOut={HoverEnd}>
                <h2>CV</h2>
                <p>Access my CV for a detailed overview of my credentials, with an option to download</p>
                <p className='showMore'>Show more</p>
            </li>
        </ul>
    </div>
  )
}

export default Categories
