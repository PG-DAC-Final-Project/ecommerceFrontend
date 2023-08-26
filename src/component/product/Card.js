import { Link } from "react-router-dom";
import React from "react";

const Card = (props) => {
  const { id, productName, productPrice, productDescription, size, imageUrl } =
    props.productI;
  // const productName = props.productI.productName;
  // const date = props.comment.date
  // const details = props.comment.details
  var rand = Math.floor(Math.random() * (5 - 3 + 1) + 3);
  let index = 0;

  return (
    <div className="container">
      <div className="col">
        <div className="p-2 bg-light">
          <div className="card imageDimension">
            <Link to={`/product/${id}`}>
              {/* http://localhost:8080/product/user/productDetails/${props.productI.id} */}
              <div className="inner">
                <img
                  width="193"
                  height="370"
                  src={imageUrl}
                  // ../../images/1.jpg
                  class="w-100"
                  alt="card_image"
                />
              </div>
            </Link>

            <div className="card-body">
              <h5 className="card-title">{productName}</h5>
              <p className="card-text" class="text-success">
                ₹{productPrice}{" "}
                <strike class="text-danger">
                  {" "}
                  ₹{Math.ceil((productPrice * 11) / 10)}
                </strike>{" "}
                (10% OFF){" "}
              </p>
              <div class="d-flex justify-content-center">
                <div class="content text-center">
                  <div class="ratings">
                    {" "}
                    <span class="product-rating">{rand}</span>
                    <span>/5</span>
                    <div class="stars">
                      {" "}
                      {/* <table>
                      for ({index} ; {index} < {rand} ; {index}) { 
                      }</table> */}
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-primary">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// return (
//   <div>
//     <div className="col">
//       <div className="p-2 bg-light">
//         <div className="card imageDimension">
//           <img
//             src={require("../../images/1.jpg")}
//             className="card-img-top imageDimension"
//             alt="card_image"
//           />
//           <div className="card-body">
//             <h5 className="card-title">{productName}</h5>
//             <p className="card-text">
//               Rs.{productPrice} <strike>{(productPrice * 11) / 10}</strike>{" "}
//               (10%){" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };
