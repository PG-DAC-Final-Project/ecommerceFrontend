import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { URLUSER } from "../../utils/config"
import { useNavigate } from "react-router";
import axios from "axios"
import OrderCard from "./OrderCard";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    //
    useEffect(() => {
        getAllOrders();

    }, [])

    const getAllOrders = () => {
        const Url = `${URLUSER}/user/orderdetails/getOrderDetailByUserId/${sessionStorage.id}`;
        axios.get(Url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.tokenId}`
            }
        }).then((response) => {

            // const result = response.data;
            // {
            //     setOrders(result["data"]);
            // }
            setOrders(response.data.data)
            //second request
        }).catch((err) => {
            console.log(err.response)
            //add jumbotron component of bootstrap showing error msg = err.response.message
        })
    }



    return (
        <div>
            <Navbar />
            <div className="row">
                <h3>My Orders</h3>
            </div>
            <div className="row">
                {orders.map((order) => {
                    return <OrderCard ord={order} />;
                })}
                {
                    console.log(orders)
                }
                {/* <AddressCard/>
            <AddressCard/> */}
            </div>
            <Footer />
        </div>
    )
}

export default MyOrders