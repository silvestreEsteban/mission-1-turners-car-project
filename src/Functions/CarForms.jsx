const CarForms = () => {
    return (
        <>
                        <div className='type-of-vehicle-div'>
                    <form className='type-of-vehicle-form'>
                        <input type='text' id='search-for-car' className='type-of-vehicle-input' placeholder='e.g. Nissan Skyline R34'/>
                        <br />
                        <span id='make-span'>
                        <label htmlFor='make'>Make</label>
                        <select name='make' id='make'>
                            <option value='placeholder value' disabled selected>Select Your Desired Make</option>
                            <option value='toyota'>Toyota</option>
                            <option value='subaru'>Subaru</option>
                            <option value='mazda'>Mazda</option>
                            <option value='nissan'>Nissan</option>
                            <option value='honda'>Honda</option>
                            <option value='holden'>Holden</option>
                            <option value='ford'>Ford</option>
                            <option value='hyundai'>Hyundai</option>
                            <option value='mercedes'>Mercedes</option>
                            <option value='bmw'>BMW</option>
                            <option value='audi'>Audi</option>
                        </select>
                        </span>
                        <br />
                        <span id='model-span'>
                            <label htmlFor='model'>Model</label>
                            <select name='model' id='model'>
                            <option value='placeholder' disabled selected>Select Model</option>
                                <option value='skyline'>Skyline R34</option>
                                <option value='chaser'>Chaser</option>
                                <option value='WRX STi'>WRX Sti</option>
                                <option value='rx7'>Rx7</option>
                                <option value='civic'>Civic</option>
                                <option value='commodore'>Commodore</option>
                                <option value='falcon'>Falcon</option>
                                <option value='corolla'>Corolla</option>
                                <option value='elantra'>Elantra</option>
                                <option value='m3'>M3</option>
                                <option value='rs6'>RS6</option>
                                <option value='G63 AMG'>G63-AMG</option>
                                <option value='patrol'>Patrol</option>
                                <option value='silvia s15'>Silvia S15</option>
                                <option value='supra'>Supra</option>
                            </select>
                        </span>
                        <span id='year-span'>
                            <label htmlFor='year-first' id='year-first-label'>Year</label>
                            <span id='inline'>
                            <select name='year-first' id='year-first'>
                                <option value='placeholder' disabled selected>Any Year</option>
                                <option value='1970'>1970's</option>
                                <option value='1980'>1980's</option>
                                <option value='1990'>1990's</option>
                                <option value='2000'>2000</option>
                                <option value='2001'>2001</option>
                                <option value='2002'>2002</option>
                                <option value='2003'>2003</option>
                                <option value='2004'>2004</option>
                                <option value='2005'>2005</option>
                                
                            </select>
                            <label htmlFor='year-second' id='year-second-label'>To</label>
                            <select name='year-second' id='year-second'>
                                <option value='placeholder' disabled selected>Any Year</option>
                                <option value='1970'>1970's</option>
                                <option value='1980'>1980's</option>
                                <option value='1990'>1990's</option>
                                <option value='2000'>2000</option>
                                <option value='2001'>2001</option>
                                <option value='2002'>2002</option>
                                <option value='2003'>2003</option>
                                <option value='2004'>2004</option>
                                <option value='2005'>2005</option>
                                <option value='2006'>2006+</option>
                            </select>
                            </span>
                        </span>
                    </form>
                </div>
        </>
    )
}

export default CarForms;