import { Link } from "react-router-dom"
import "./Feedback.css";

const FeedbackCard = (props) => {
    const { feedbackId, comment, commentDate, rating, username } = props.fed
    //orderItem


    return (
        <div class="container-fluid px-1 py-5 mx-auto">
            <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
                    <div class="card">
                        <div class="row d-flex">
                            <div class="d-flex flex-column">
                                <h3 class="mt-2 mb-0">{username}</h3>
                                <div>
                                    <p class="text-left"><span class="text-muted">{rating}</span> <span class="fa fa-star star-active ml-3"></span> </p>
                                </div>
                            </div>
                            <div class="ml-auto">
                                <p class="text-muted pt-5 pt-sm-3">{commentDate}</p>
                            </div>
                        </div>
                        <div class="row text-left">
                            <h4 class="blue-text mt-3">{comment}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default FeedbackCard

