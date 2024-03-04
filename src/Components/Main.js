import React, {useState} from 'react'
import Header from './Header'
import Categories from './Categories';
import Education from './Education';

function Main() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isComponentVisible) => {
    setIsVisible(isComponentVisible);
  };


  return (
    <div id='mainContent'>
    <div id='mainPage'>
        <Header/>
        {/* Passing the callback function handleVisibilityChange as a prop, so isVisible can be passed down */}
        <Categories onVisibilityChange={handleVisibilityChange}/>
       
    </div>
    {/* The Education component is conditionally rendered, based on the value of isVisible, which is handled in this
    component and changed in the Categories component onClick */}
    {isVisible && <Education/>}
    </div>
  )
}

export default Main;
