import icon1 from './Icons/icon1.png'
import icon2 from './Icons/icon2.png'
import icon3 from './Icons/icon3.png'
import icon4 from './Icons/icon4.png'
import icon5 from './Icons/icon5.png'
import icon6 from './Icons/icon6.png'

export default function PopularOptions() {
    return (
        <>
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
        </>
    )
}