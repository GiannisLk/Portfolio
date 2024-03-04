import React, {useState} from 'react'
import App from '../App'
import Main from './Main';
import Education from './Education';


// List Hover and Hover end to apply speed up and slow down effect on background video 
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

// Move section effect when a category is clicked
const sectionMove = () => {
    const block = document.getElementById('mainPage');
    if(block) {
        block.style.transform = 'translateX(-200%)';
        setTimeout(() => {
            block.style.display = "none";
        }, 750);
    }
}


//The function receives the prop 'onVisibilityChange', which is a callback function passed from the parent component,
//which is Main
function Categories({onVisibilityChange}) {
    const [isComponentVisible, setIsComponentVisible] = useState(false);

//When the a element is clicked, in this function, the state in this component is set to 'true', as well as the value
//in the callback function, so that it can be sent to the parent component and render the new component
    const  handleComponentVisibility = () =>{
        setTimeout(() => {
            setIsComponentVisible(true);
            onVisibilityChange(true);
        }, 750);
    }

  return (
    <div>
        <ul id='categoriesList'>
            <li onMouseOver={ListHover} onMouseOut={HoverEnd}> 
                <h2>Education</h2>
                <p>Explore my academic journey and qualifications</p>
                <p className='showMore' onClick={() => {sectionMove(); handleComponentVisibility();}}>Show more</p>
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
                <p>View and download my CV for a detailed overview of my credentials</p>
                <p className='showMore'>Show more</p>
            </li>
        </ul>

        {isComponentVisible && <Education/>}
    </div>
  )
}

export default Categories
