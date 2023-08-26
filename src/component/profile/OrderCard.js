import axios from "axios";
import { useEffect, useState } from "react"
import { URLUSER } from "../../utils/config"
import { Link } from "react-router-dom"
import OrderItemCard from "./OrderItemCard";

const OrderCard = (props) => {
    const { orderId, orderNumber, orderStatus, orderDate, totalAmount, numberOfOrderedProduct } = props.ord
    //orderItem
    const [orderitems, setOrderItems] = useState([]);

    useEffect(() => {
        getAllOrderItems();

    }, [])

    const getAllOrderItems = () => {
        const Url = `${URLUSER}/user/orderdetails/allOrderItemOfOrderId/${orderId}`;
        axios.get(Url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.tokenId}`
            }
        }).then((response) => {

            setOrderItems(response.data.data)
            console.log(response.data)
            //second request
        }).catch((err) => {
            console.log(err.response)
            //add jumbotron component of bootstrap showing error msg = err.response.message
        })
    }
    const changeOrderStatus = () => {
        const Url = `${URLUSER}/user/orderdetails/updateOrderStatus/${orderId}`;
        axios.post(Url, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.tokenId}`
            }
        }).then((response) => {

            // setOrderItems(response.data.data)
            console.log(response.data.data)
            //second request
        }).catch((err) => {
            console.log(err)
            //add jumbotron component of bootstrap showing error msg = err.response.message
        })
        window.location.reload()
    };

    return (
        <div>
            <div class="container">
                <div class="card px-2">
                    <div class="card-header p-3 mb-2 bg-light text-dark">
                        <div class="row justify-content-between">
                            <div class="col">
                                <p class="text-muted"> Order Number <span class="font-weight-bold text-dark">{orderNumber}</span></p>
                                <p class="text-muted"> Place On <span class="font-weight-bold text-dark">{orderDate}</span> </p>
                            </div>
                            <div class="col">
                                <p class="text-muted"> Total <span class="font-weight-bold text-dark">&#x20B9; {totalAmount}</span> </p>
                                <p class="text-muted"> Items <span class="font-weight-bold text-dark">{numberOfOrderedProduct}</span> </p>
                            </div>
                            <div class="col">
                                {/* <h6 class="ml-auto mr-3"> <a href="#">View Details</a> </h6> */}
                                <p class="text-muted"> Order Status <span class="font-weight-bold text-dark">{orderStatus}</span> </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {orderitems.map((orderitem) => {
                            return <OrderItemCard oit={orderitem} />;
                        })}
                        {
                            console.log(orderitems)
                        }
                    </div>

                    <div class="card-footer bg-white px-sm-3 pt-sm-4 px-0">
                        <div class="row text-center ">

                            <div class="col my-auto border-line ">
                                <button className="btn btn-danger" onClick={() => changeOrderStatus()}>
                                    Cancel Order
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderCard