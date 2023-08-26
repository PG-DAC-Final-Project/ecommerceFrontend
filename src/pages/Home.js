import Footer from "../component/footer/Footer";
import BestProducts from "../component/home/BestProducts";
import ExploreProducts from "../component/home/ExploreProducts";
import ShowStoppingTrios from "../component/home/ShowStoppingTrios";
import Slider from "../component/home/Slider";
import Navbar from "../component/navbar/Navbar"
const Home = () => {
    return (
        <div style={{ marginTop: ' 67px' }}>
            <Navbar/>
            <Slider />
            <ExploreProducts/>
            <ShowStoppingTrios/>
            <BestProducts/>
            <Footer />
        </div>
    )
}

export default Home