export default function Header() {
    return (
        <>
          <div className="header">
    <div className='top-buttons'>
      <button className='header-button'>Cars</button>
      <button className='header-button'>Turners Subscription</button>
      <button className='header-button'>Trucks & Machinery</button>
      <button className='header-button'>Damaged & End of Life</button>
      <button className='header-button'>Motorcycles</button>
      <button className='header-button'>General Goods</button>
      <button className='header-button' id='header-button-last'>Buses, Caravans & Motorhomes</button>
    </div>
    <div className='turners-logo-header'>
     <a target='_blank' href='www.turners.co.nz'><img id='img' src={'https://media.licdn.com/dms/image/C5616AQERMRg3kCNy1Q/profile-displaybackgroundimage-shrink_200_800/0/1580702530772?e=2147483647&v=beta&t=q8tfDheY7EBXEZLz90Fq6gNaVT0_U_a8M98MktKkbUs'} /></a>
    </div>
    <div className='buttons-right-side-container'>
    <div className='center-buttons-header'>
      <button className='header-button-second-set' id='btn1'>LOGIN</button>
      <p id='or'>OR</p>
      <button className='header-button-second-set' id='btn2'>REGISTER</button>
      <button className='header-button-second-set' id='btn3'>0800 887 637</button>
      <button className='header-button-second-set' id='btn4'>Find Us</button>
      <button className='header-button-second-set' id='btn5'>中文</button>
    </div>
    </div>
  </div>
        </>
    )
}