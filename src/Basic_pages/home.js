// import SimpleSlider from './home_helper/slick';
import Slider from "../Slider/swiper";
import ProductsComp from "./home_helper/Products/products";
import HeadingTag from "./home_helper/headingTag";



const Home = ()=>{
    return (
        <div className="App-header">
            <Slider />
            <HeadingTag />
            <ProductsComp />
        </div>
    )
}
export default Home;