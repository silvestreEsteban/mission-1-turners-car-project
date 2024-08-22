import './CSS/Slider.css'
import { useState } from 'react'
import image1 from './Slider-Images/Supra2.jpg'
import image2 from './Slider-Images/MclarenSenna.jpg'
import image3 from './Slider-Images/r34Skyline1.jpg'
import image4 from './Slider-Images/WRXSTI.jpg'
import image5 from './Slider-Images/Chaser.jpg'
import leftArrow from './Slider-Images/left-arrow.png'
import rightArrow from './Slider-Images/right-arrow.png'



 export default function Slider() {
    const vehicleArray = [image1, image2, image3, image4, image5]
    
    
  const [activeIndex, setActiveIndex] = useState(0)
    const sliderButtonRight = (e) => {
      e.preventDefault()  
      setActiveIndex((prevIndex) => 
        prevIndex === vehicleArray.length - 1 ? 0 : prevIndex + 1)
    }
    const sliderButtonLeft = (e) => {
      e.preventDefault()
      setActiveIndex((prevIndex) =>
       prevIndex === 0 ? vehicleArray.length - 1 : prevIndex - 1)
    }
     
    return (
        <>
        <div id='white-space-above-slider'></div>
        <div className="photo-slider" id='image-for-slider'>
           <button className='slider-button left' onClick={sliderButtonLeft}><img className='arrows' src={leftArrow}/></button>
           <img src={vehicleArray[activeIndex]} alt={`Slide ${activeIndex}`} id="image-for-slider2"/>
           <button className='slider-button right'onClick={sliderButtonRight}><img className='arrows' src={rightArrow}/></button> 
        </div>
        </>
    )
     
 }