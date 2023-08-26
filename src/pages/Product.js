import { useLocation, useParams } from "react-router";
import Card from "../component/product/Card";
import Navbar from "../component/navbar/Navbar";
import { useEffect, useState } from "react";
import WebService from "../component/service/WebService";

import axios from "axios";

const Product = (props) => {
  const { catg } = useLocation().state;
  //************************************************** */ by amit (yet to complete)
  // const productInfo = [
  //   {
  //     productName: "product1",
  //     productPrice: 700,
  //     productDescription: "This is product 1 ",
  //     size: "small",
  //   },
  //   {
  //     productName: "product2",
  //     productPrice: 700,
  //     productDescription: "This is product 2 ",
  //     size: "large",
  //   },
  // ];

  //const { id } = useParams();
  // Create your own Mock API: https://mockapi.io/
  // const url = `http://localhost:8080/product/user/allProduct`;

  //let productInfo = useAxiosGet(url);

  const [products, setProducts] = useState([]);
  const params = useParams();

  // const searchProducts = () => {
  //   // const url = `http://localhost:8080/api/public/product/user/allProduct`; //****************url to shwo all product */
  //   const url = `http://localhost:8080/api/public/product/user/productByCategory/${catg}`
  //   axios.get(url).then((response) => {
  //     const result = response.data;
  //     {
  //       setProducts(result["data"]);
  //     }
  //   });
  // };
  let searchData = () => {
    WebService.getAllProductsByCatName(catg)
      .then((response) => {
        const result = response.data;
        setProducts(result["data"]);
      })
      .catch((err) => {
        console.log("error occured " + err);
      });
  }

  // load the data in the beginning
  useEffect(() => {
    searchData();
    console.log("getting called");
  }, []);




  // useEffect(() => {

  //   console.log("getting called");
  // }, [products]);

  //************************************************** */ by amit
  return (
    <div>
      {/* private int id;
	private String productName;
	private String productDescription;
	private double productPrice;
	private String size; */}

      <Navbar />
      <div
        className="d-flex flex-row bd-highlight mb-3"
        style={{ marginTop: " 67px" }}
      >
        <div>
          <aside className="wdth">
            <h3>Filter</h3>
            <hr />
            <h5>Price</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                500-999
              </label>
              <br />
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                1000-1499
              </label>
              <br />
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                1500-1999
              </label>
              <br />
            </div>
            <hr />
            <h5>Size</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                S
              </label>
              <br />
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                M
              </label>
              <br />
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                L
              </label>
              <br />
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                XL
              </label>
            </div>
            <hr />
          </aside>
        </div>
        <div className="p-2">
          <div className="row prodTitlePad">{catg} </div>
          <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-3">

            {products.map((product) => {
              return <Card productI={product} />;
            })}

            {/* {productInfo.map((product) => {
              return <Card productI={product} />;
            })}
            {productInfo.map((product) => {
              return <Card productI={product} />;
            })}
            {productInfo.map((product) => {
              return <Card productI={product} />;
            })} */}
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
