// import SimpleSlider from './home_helper/slick';
import { useState } from "react";
import Modal from "../Modals/Modal";
import Slider from "../Slider/swiper";
import ProductsComp from "./home_helper/Products/products";
import HeadingTag from "./home_helper/headingTag";



const Home = ()=>{
    const [showModal , setShowModal] = useState(false);
    return (
        <div className="App-header">
            
            <Slider />
            {/* <button style={{display:'flex', position: 'relative' , left:'48.5x%' , top:'50vh'}} onClick={()=> setShowModal(true)} type="button" class="btn btn-info">Show</button> */}
            <Modal show={showModal} close={()=> setShowModal(false)} />
            <HeadingTag show={()=> setShowModal(true)} />
            <ProductsComp />
           
            
        </div>
    )
}
export default Home;