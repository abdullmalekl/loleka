import { BrowserRouter ,Link ,Route , Routes } from "react-router-dom";
import About from '../Basic_pages/about';
import Contact from '../Basic_pages/contact';
import FAQ from '../Basic_pages/faq';
import Home from '../Basic_pages/home';
import News from '../Basic_pages/news';
import Products from '../Basic_pages/products';
import styles from './navBar.module.css';

const Navbar = ()=>{

    return (

      <div className={styles.NavBar}>
        <BrowserRouter>
        <nav id={styles.navBar} className="navbar navbar-expand-lg bg-body-tertiary">
  <div  className="container-fluid">
  <Link to="/" id={styles.home} className="navbar-brand"  >Home</Link>
    <button id={styles.toggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li  className="nav-item">
          <Link to="/products" id={styles.products} className="nav-link" >Products</Link>
        </li>
        <li  className="nav-item">
        <Link id={styles.about} to="/about" className="nav-link" >About</Link>
        </li>
        <li  className="nav-item">
        <Link to="/news" id={styles.news} className="nav-link" >News</Link>
        </li>
        <li  className="nav-item">
        <Link to="/faq" id={styles.faq} className="nav-link" >FAQ</Link>
        </li>
        <li  className="nav-item">
        <Link id={styles.contact} to="/contact" className="nav-link" >Contact</Link>
        </li>
        <li  className="nav-item dropdown">
          <a id={styles.language} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Launguage
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">English</a></li>
            <li><a className="dropdown-item" href="#">Arabic</a></li>
            <li><hr className="dropdown-divider"/></li>
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input id={styles.search} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button id={styles.sbutton}  type="submit">Search</button>
      </form>
    </div>
  </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/news" element={<News  />}></Route>
          <Route path="/faq" element={<FAQ  />}></Route>
          <Route path="/contact" element={<Contact  />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
        
    );
}
export default Navbar;