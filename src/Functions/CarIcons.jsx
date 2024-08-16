import carIcon1 from './CarIcons/Mazda.png'
import carIcon2 from './CarIcons/station-wagon.png'
import carIcon3 from './CarIcons/ute-icon.jpg'
import carIcon4 from './CarIcons/coupe.png'
import carIcon5 from './CarIcons/hatchback2.png'
import carIcon6 from './CarIcons/van-icon.jpg'
import carIcon7 from './CarIcons/sedan2.png'
import carIcon8 from './CarIcons/suv.jpg'

const CarIcons = () => {
    return (
        <div className='car-icons'>
                    <span className='car-icons-span'>
                        <img src={carIcon1} alt='mazda icon' className='icon'/>
                        <br />
                        <input type='checkbox' id='convertible-icon-checkbox' className="checkbox"/><label htmlFor='convertible-icon-checkbox'>Convertible(?)</label>
                    </span>
                    <span className='car-icons-span'>
                    <img src={carIcon2} id='car-icon-2'alt='station wagon icon' className='icon'/>
                        <br />
                        <span id='wagon-input'><input type='checkbox' id='wagon-icon-checkbox' className="checkbox"/><label htmlFor='wagon-icon-checkbox' id='input-for-wagon'>Station Wagon(?)</label></span>
                    </span>
                    <span className='car-icons-span' id='ute-span'>
                    <img src={carIcon3} alt='ute icon' className='icon' id='ute-icon'/>
                        <br />
                        <span id='ute-input'><input type='checkbox' id='ute-icon-checkbox' className="checkbox"/><label htmlFor='ute-icon-checkbox' id='label-for-ute'>Utility(?)</label></span>
                    </span>
                    <span className='car-icons-span'><img src={carIcon4} alt='coupe icon' className='icon' id='coupe-img'/>
                        <br />
                        <span id='coupe-input'><input type='checkbox' id='coupe-icon-checkbox' className="checkbox"/><label htmlFor='coupe-icon-checkbox'>Coupe(?)</label></span>
                        </span>
                    <span className='car-icons-span'>
                    <img src={carIcon5} alt='hatchback icon' className='icon'/>
                        <br />
                       <span id='span-for-hatchback-input'><input type='checkbox' id='hatchback-icon-checkbox' className="checkbox"/><label htmlFor='hatchback-icon-checkbox'>Hatchback(?)</label></span>
                    </span>
                    <span className='car-icons-span'>
                    <img src={carIcon6} alt='van icon' className='icon'/>
                        <br />
                      <span id='span-for-van-input'><input type='checkbox' id='van-icon-checkbox' className="checkbox"/><label htmlFor='van-icon-checkbox'>Van(?)</label></span>
                    </span>
                    <span className='car-icons-span'><img src={carIcon7} alt='sedan icon' className='icon'/>
                        <br />
                        <span id='span-for-sedan-input'><input type='checkbox' id='sedan-icon-checkbox' className="checkbox"/><label htmlFor='sedan-icon-checkbox'>Sedan(?)</label></span></span>
                    <span className='car-icons-span'>
                    <img src={carIcon8} alt='mazda icon' className='icon'/>
                        <br />
                       <span id='span-for-suv-input'><input type='checkbox' id='suv-icon-checkbox' className="checkbox"/><label htmlFor='suv-icon-checkbox'>SUV(?)</label></span>
                    </span>
                </div>
    )
}

export default CarIcons;