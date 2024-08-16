import './car-stock.css'
import { useState } from 'react'
import CarForms from './CarForms'
import CarIcons from './CarIcons'

export default function CarStock() {
    const [leftButton, setLeftButton] = useState(false)
    const [rightButton, setRightButton] = useState(false)
    const toggleButton = () => {
    setLeftButton(!leftButton)
    setRightButton(!rightButton)
    }    
    return (
        <>
        <div className='parent-div-for-car-stock'>
            <div className='info-on-cars'>
                <h2>1000's of Quality Cars for Sale</h2>
                <p>Turners Cars is the largest used car network in New Zealand with 20 <a href='https://www.turners.co.nz/Cars/Dealers/' target='_blank'>car dealer</a> locations nationwide. With a huge range of around 3,000 cars for sale (and another 1,500 being prepared for sale at any one time) there is truly something for everyone. We’ve been helping Kiwis buy and sell <a href='https://www.turners.co.nz/Cars/Used-Cars-for-Sale/?sortorder=7&pagesize=20&pageno=1&issearchsimilar=true' target='_blank'>used cars</a> for almost 60 years. And if you want <a href='https://www.turners.co.nz/Cars/finance-insurance/' target='_blank'>car finance</a> or <a href='https://www.turners.co.nz/Cars/finance-insurance/car-insurance/' target='_blank'>car insurance</a>, we can sort that out for you as well.</p>
            </div>
             {/* this class will have a useState hook to toggle between cars in stock and helping find car */}
             <div className='toggle-buttons-car-stock'>
                <button className='toggle-buttons' id={leftButton ? `toggle-btn1-toggled` : `toggle-btn1`} onClick={toggleButton}>Search all our cars in stock</button>
                <button className='toggle-buttons' id={rightButton ? `toggle-btn2-toggled` : `toggle-btn2`} onClick={toggleButton}>Let us help you find the right car for you</button>
             </div>
             <div className='car-stock'>
                <CarIcons />

            {/* CAR ICONS DIV COMPLETE - MOVING ON TO FORMS (COMPONENT) */}
               
               <CarForms />
                            
 
                {/* SECOND DIV */}
                <div className='vehicle-info'></div>
                <div className='popular-options'></div>
             </div>
        </div>
        </>
    )
}