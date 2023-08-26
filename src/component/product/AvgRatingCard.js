import { Link } from "react-router-dom"
import "./Feedback.css";

const AvgRatingCard = (props) => {
    const {data} = props.arc
    //orderItem


    return (
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">      
            <div class="card">
                <div class="row justify-content-left d-flex">
                    <div class="col-md-4 d-flex flex-column">
                        <div class="rating-box">
                            <h1 class="pt-4">{data}</h1>
                            <p class="">out of 5</p>
                        </div>
                        <div> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-inactive mx-1"></span> </div>
                    </div>
                </div>
            </div>  
          </div> 
        </div>       
        
    )
}
export default AvgRatingCard

