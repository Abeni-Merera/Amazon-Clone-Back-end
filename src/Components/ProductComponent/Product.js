import React from "react";
// import { FcRating } from 'react-icons/fc';
import "../ProductComponent/Product.css";
import { useStateValue } from "../Reducer&StateProvider/StateProvider";
import GradeIcon from "@mui/icons-material/Grade";

function Product({ id, title, rating, price, image }) {
  const [{ cart }, dispatch] = useStateValue();
  // console.log(`This is the cart ${cart}`)
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="product__rating" key={i}>
                <GradeIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button className="product__button" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
