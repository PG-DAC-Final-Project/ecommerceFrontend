import { Link } from "react-router-dom"

const OrderItemCard = (props) => {
    const {orderItemId, productPrice, productQuantity, productId, productName, imageUrl} = props.oit
    //orderItem


    return (
        <div>
            <div class="container">
                <div class="card px-2">
                
                    <div class="p-3 mb-2 bg-light text-dark">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h5 class="bold">{productName}</h5>
                                    <p class="text-muted"> Qt: {productQuantity}</p>
                                    <h4 class="mt-3 mb-4 bold"> <span class="mt-5">&#x20B9;</span> {productPrice} <span class="small text-muted"> via (COD) </span></h4>
                                    {/* <p class="text-muted">Tracking Status on: <span class="Today">11:30pm, Today</span></p> */}
                                </div>
                                <div class="col">
                                    <img class="align-self-center img-fluid" src={imageUrl} width="80" height="80"/>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>  
        </div>
    )
}
export default OrderItemCard