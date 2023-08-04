
const logo = ()=>{
    return (
        <div className="Applogo">
           <div className='rown'>
           <div className="navbar"> <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img className="navbar-brand" src={Applogo}></img>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li><a className="dropdown-item" href="#">English</a></li>
            <li><a className="dropdown-item" href="#">Arabic</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li className="nav-item">
      <a id='FacebookButtons' className='btn btn-primary' href='https://www.facebook.com/khrwat.kh'><b>F</b></a>
        </li>
        <li className="nav-item">
        <a id='telegramButtons' className='btn btn-primary' href='https://www.facebook.com/khrwat.kh'><b>T</b></a>
        </li>
        
      </ul>
      
    </div>
  </div>
        </nav>
            </div>
            
           </div>
        </div>
    )
}
export default logo;