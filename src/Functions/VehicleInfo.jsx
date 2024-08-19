const VehicleInfo = () => {
    return (
        <div className='vehicle-info'>
            <span id="first-inputs">
                <label htmlFor="odometer" id="label-for-odometer">Odometer</label>
                <select name="odometer" id="odometer" className="odometer-input">
                <option value={`any`}>Any</option>
                </select>
                <h3 id="any-km-to-any-km">To</h3>
                <select name="odometer" id="odometer-2" className="odometer-input">
                <option value={`any`}>Any</option></select></span>
            <span id="second-inputs">
            <label htmlFor="price" id="label-for-price">Price</label>
                <select name="price" id="price" className="price-input">
                    <option value={`any`}>Any</option>
                </select>
                <h3 id="any-price-to-any-price">To</h3>
                <select name="price" id="price-2" className="price-input">
                <option value={`any`}>Any</option>
                </select>
            </span>
            <span id="third-input">
                <label htmlFor="location" id="label-for-location">Location</label>
                <br />
                <select name="location" id="location">
                    <option value={`Any Location`} disabled selected>Any Location</option>
                    <option value={`Auckland`}>Auckland</option>
                </select>
            </span>
            <span id="fourth-input">
            <label htmlFor="sale-method" id="label-for-sale-method">Sale Method</label>
                <br />
                <select name="sale-method" id="sale-method">
                    <option value={`Any Method`} disabled selected>Any Method</option>
                    <option value={`Eftpos`}>Eftpos</option>
                </select>
            </span>
        </div>
    )
}

export default VehicleInfo;