import React, { useState, useEffect } from "react";
import axios from "axios";
import './UserCart.css';
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const UserCart = (props) => {
    const [cartView, setCartView] = useState(null);
    const currentUserId = sessionStorage.id;

    useEffect(() => {
        // Fetch cart view data from the API
        axios.get(`http://localhost:8080/api/cart/viewcart/${currentUserId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.tokenId}`
            }
        }).then(response => {
            console.log(response.data.data);
            setCartView(response.data.data);
        })
            .catch(error => {
                console.log(error.response)
                console.error('Error fetching cart view:', error.response);
            });
    }, []);

    if (!cartView) {
        return <div>Loading...</div>;
    }

    // return (
    //     <div>
    //         <div>
    //             <h1>Cart</h1>
    //             {cartView.cartItems.map(item => (
    //                 <div key={item.productId}>
    //                     <img src={item.imageUrl} alt="product img" />
    //                     <h2>{item.productName}</h2>
    //                     <p>Size: {item.sizeName}</p>
    //                     <p>Unit Quantity: {item.unitQuantity}</p>
    //                     <p>Unit Price: {item.unitPrice}</p>
    //                     <p>Total Price: {item.totalPrice}</p>
    //                 </div>
    //             ))}
    //             <p>Total Cart Price: {cartView.totalCartPrice}</p>
    //         </div>
    //     </div>
    // );

    return (
        <div>
            <Navbar />
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {cartView.totalQuantity} items</h5>
                                </div>
                                <div className="card-body">
                                    {cartView.cartItems.map(item => (
                                        <div key={item.productId}>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                    {/* Image */}
                                                    <div
                                                        className="bg-image hover-overlay hover-zoom ripple rounded"
                                                        data-mdb-ripple-color="light"
                                                    >
                                                        <img
                                                            src={item.imageUrl}
                                                            className="w-100"
                                                            alt="product img"
                                                            width="50px"
                                                            height="200px"
                                                        />
                                                        <a href="#!">
                                                            <div
                                                                className="mask"
                                                                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    {/* Image */}
                                                </div>
                                                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                    {/* Data */}
                                                    <p>
                                                        <strong>{item.productName}</strong>
                                                    </p>
                                                    <p>Size: {item.sizeName}</p>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary btn-sm me-1 mb-2"
                                                        data-mdb-toggle="tooltip"
                                                        title="Remove item"
                                                    >
                                                        <i className="fas fa-trash" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-sm mb-2"
                                                        data-mdb-toggle="tooltip"
                                                        title="Move to the wish list"
                                                    >
                                                        <i className="fas fa-heart" />
                                                    </button>
                                                    {/* Data */}
                                                </div>
                                                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                    {/* Quantity */}
                                                    <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                                                        <button
                                                            className="btn btn-primary px-3 me-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                        >
                                                            <i className="fas fa-minus" />
                                                        </button>
                                                        <div className="form-outline">
                                                            <input
                                                                id="form1"
                                                                min={0}
                                                                name="quantity"
                                                                defaultValue={item.unitQuantity}
                                                                type="number"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form1">
                                                                Quantity
                                                            </label>
                                                        </div>
                                                        <button
                                                            className="btn btn-primary px-3 ms-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                        >
                                                            <i className="fas fa-plus" />
                                                        </button>
                                                    </div>
                                                    {/* Quantity */}
                                                    {/* Price */}
                                                    <p className="text-start text-md-center">
                                                        <strong>{item.unitPrice}</strong>
                                                    </p>
                                                    {/* Price */}
                                                </div>
                                            </div>
                                            {/* Single item */}
                                            <hr className="my-4" />
                                            {/* Single item */}

                                        </div>
                                    ))}
                                    {/* Single item */}

                                    {/* Single item */}
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p>
                                        <strong>Expected shipping delivery</strong>
                                    </p>
                                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body">
                                    <p>
                                        <strong>We accept</strong>
                                    </p>
                                    <img
                                        className="me-2"
                                        width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa"
                                    />
                                    <img
                                        className="me-2"
                                        width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express"
                                    />
                                    <img
                                        className="me-2"
                                        width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard"
                                    />
                                    <img
                                        className="me-2"
                                        width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                                        alt="PayPal acceptance mark"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Subtotal
                                            <span>{cartView.totalCartPrice}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>$100</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including GST)</p>
                                                </strong>
                                            </div>
                                            <span>
                                                <strong>{cartView.totalCartPrice + 100}</strong>
                                            </span>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}

export default UserCart;