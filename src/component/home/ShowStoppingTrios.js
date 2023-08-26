import HeadLine from "./HeadLine"
import trioImg from "../../images/TrioBanner.jpg"
const ShowStoppingTrios = () => {
return (
    <div>
        <HeadLine text = "Show Stopping Trios" subText = "Shop any 3 of your Favorite Shirts now to unlock the Exclusive Offer"/>
        <div className="container-fluid" style={{marginTop: 0}}>
            <img src={trioImg} className="trioDimension"/>
            </div>
    </div>
)
}

export default ShowStoppingTrios