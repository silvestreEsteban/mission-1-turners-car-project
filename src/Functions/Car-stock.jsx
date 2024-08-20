import './car-stock.css'
import { useState } from 'react'
import CarForms from './CarForms'
import CarIcons from './CarIcons'
import VehicleInfo from './VehicleInfo'
import icon1 from './Icons/icon1.png'
import icon2 from './Icons/icon2.png'
import icon3 from './Icons/icon3.png'
import icon4 from './Icons/icon4.png'
import icon5 from './Icons/icon5.png'
import icon6 from './Icons/icon6.png'

import skyline2 from './SkylinePhotos/7.jpg'




export default function CarStock() {




    const [content, setContent] = useState('content-not-hidden');
    const [hiddenContent, setHiddenContent] = useState('hidden-div')

    const showContent = () => {
        setContent('content-not-hidden')
        setHiddenContent('hidden-div')
        setLeftButton(!leftButton)
        setRightButton(!rightButton)
    }
    
    const showHiddenContent = () => {
        setContent('content');
        setHiddenContent('hidden-div-visible');
        setLeftButton(!leftButton)
        setRightButton(!rightButton)
    }


    const [leftButton, setLeftButton] = useState(false)
    const [rightButton, setRightButton] = useState(false)
       
    return (
        <>


        {/*  THIS DIV IS AUTOMATICALLY HIDDEN AND THEN SHOWN ON CLICK, HIDING THE NORMAL SPACE IN THE DIV */}
        <div id={hiddenContent}>
            <div id="hidden-div-content-left-side">
                <img id='fav-img'src={skyline2} />
            </div>
            <div id='hidden-div-content-right-side'>
                <h4>This is one of my favorite cars</h4>
                <h5>The Nissan Skyline R32 GT-R</h5>
                <p>Nicknamed the GODZILLA</p>
                <p>In my opinion, one of the best looking and coolest sounding cars made to this day. </p>
            </div>
        </div>
        
        
        
        
        
        
        {/* This is the main div */}
        <div className='info-on-cars'>
                <h2>1000's of Quality Cars for Sale</h2>
                <p>Turners Cars is the largest used car network in New Zealand with 20 <a href='https://www.turners.co.nz/Cars/Dealers/' target='_blank'>car dealer</a> locations nationwide. With a huge range of around 3,000 cars for sale (and another 1,500 being prepared for sale at any one time) there is truly something for everyone. We’ve been helping Kiwis buy and sell <a href='https://www.turners.co.nz/Cars/Used-Cars-for-Sale/?sortorder=7&pagesize=20&pageno=1&issearchsimilar=true' target='_blank'>used cars</a> for almost 60 years. And if you want <a href='https://www.turners.co.nz/Cars/finance-insurance/' target='_blank'>car finance</a> or <a href='https://www.turners.co.nz/Cars/finance-insurance/car-insurance/' target='_blank'>car insurance</a>, we can sort that out for you as well.</p>
            </div>
        <div className='parent-div-for-car-stock'>
            
             {/* this class will have a useState hook to toggle between cars in stock and helping find car */}
             
             <div className='toggle-buttons-car-stock'>
                <button className='toggle-buttons' id={leftButton ? `toggle-btn1-toggled` : `toggle-btn1`} onClick={showContent}>Search all our cars in stock</button>
                <button className='toggle-buttons' id={rightButton ? `toggle-btn2-toggled` : `toggle-btn2`} onClick={showHiddenContent}>Let us help you find the right car for you</button>
             </div>
             <span id='space-filler'>
                <span id={content}>
             <div className='car-stock'>
                <CarIcons />
            {/* CAR ICONS DIV COMPLETE - MOVING ON TO FORMS (COMPONENT) */}              
               <CarForms />                       
                {/* SECOND DIV */}
                <VehicleInfo />
                <div className='popular-options'>
                    <h4 id='header4'>Popular Options</h4>
                    <span id='popular-option-left-side'>
                       <button><img src={icon1}/></button>
                       <button><img src={icon2}/></button>
                       <button><img src={icon3}/></button>
                       <button><img src={icon4}/></button>
                       <button><img src={icon5}/></button>
                       <button><img src={icon6}/></button>
                    </span>
                    <span id='popular-option-right-side'>
                        <div id='popular-options-form'>
                            <span>
                            <input type='checkbox' id='discounted'></input>
                            <label htmlFor='discounted'>Discounted</label>
                            </span>
                            <span>
                            <input type='checkbox' id='four-wheel-drive'></input>
                            <label htmlFor='four-wheel-drive'>4 Wheel Drive</label>
                            </span>
                            <span>
                            <input type='checkbox' id='six-plus-seats'></input>
                            <label htmlFor='six-plus-seats'>Six Plus Seats</label>
                            </span>
                            <span>
                            <input type='checkbox' id='turners-certified'></input>
                            <label htmlFor='turners-certified'>Turners Certified</label>
                            </span>
                            <span>
                            <input type='checkbox' id='ex-lease'></input>
                            <label htmlFor='ex-lease'>Ex Lease</label>
                            </span>
                            <span>
                            <input type='checkbox' id='ev'></input>
                            <label htmlFor='ev'>EV/Hybrid</label>
                            </span>
                            
                        </div>
                        <button type='button' id='find-a-car-button'>Find a Car</button>
                    </span>
                </div>
             </div>
             </span>
             </span>
        </div>
        </>
    )
}