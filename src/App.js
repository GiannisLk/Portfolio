import './App.css';
import {useEffect} from 'react';
import Main from './Components/Main';



function App() {

  useEffect( ()=>{
    const setPlaybackRate = () => {
      const video = document.getElementById('bg-video');
      if (video){
        video.playbackRate = 2.5;
      }
    }
    setPlaybackRate();
  },[])
  
  return (
    <div className="App">
      <div className="video-container">
      <video autoPlay muted loop id="bg-video">
        <source src="https://static.vecteezy.com/system/resources/previews/002/016/656/mp4/minimal-stars-motion-loop-background-for-project-overlay-free-video.mp4" type="video/mp4"></source>
      </video></div>
      
      <Main/>
    </div>
  );
}

export default App;
