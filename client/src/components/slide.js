import React from 'react';
import { Fade } from 'react-slideshow-image';
import'./slide.css';
// const fadeImages = [
//   'images/slide_5.jpg',
//   'images/slide_6.jpg',
//   'images/slide_7.jpg'
// ];
 
const fadeProperties = {
  duration: 2000,
  transitionDuration: 800,
  infinite: true,
  indicators: true
}
 
const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={require('./images/3.jpg')}  />
          <div class="text-block"> 
   
          <p>Pakistan</p>
          </div>
        </div>
        
      </div>
      <div className="each-fade">
        <div className="image-container">
        <img src={require('./images/2.jpg')} />
        </div>
        
      </div>
      
    </Fade>
    
  )
}
 export default Slideshow;