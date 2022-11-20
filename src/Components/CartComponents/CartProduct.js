import React from "react";
import "./CartProduct.css";
import GradeIcon from "@mui/icons-material/Grade";
import { useStateValue } from "../Reducer&StateProvider/StateProvider";

function CartProduct({ id, title, image, price, rating, hideButton}) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="cartProduct">
      <img className="cartProduct__img" src={image} alt="" />
      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i} className="cartProduct__rating"><GradeIcon/></p>
            ))}
        </div>
       {!hideButton && (<button onClick={removeFromCart}>Remove from cart</button>)}
       {/* {''} */}
      </div>
    </div>
  );
}

export default CartProduct;
