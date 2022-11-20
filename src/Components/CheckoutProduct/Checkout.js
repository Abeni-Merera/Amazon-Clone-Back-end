import React from "react";
import "../CheckoutProduct/Checkout.css";
import CartProduct from "../CartComponents/CartProduct";
import { useStateValue } from "../Reducer&StateProvider/StateProvider";
import Subtotal from "../SubtotalComponent/Subtotal";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZrlS9Y1Lfj5QxZhcLPDcCMyG_rcz266yOA&usqp=CAU"
          alt=""
        />
        <h3>Hello {user?.email}</h3>
        <h2 className="checkout__title">Your shopping Cart</h2>
        {cart.map((item, i) => (
          <CartProduct
            key={i}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="subtotal__component">
        < Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
