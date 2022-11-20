import React from "react";
import { useNavigate } from "react-router-dom";
import "../SubtotalComponent/Subtotal.css";
import { useStateValue } from "../Reducer&StateProvider/StateProvider";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  const navigate = useNavigate()

  // Total cart holder function
  const getCartTotal = (cart) => {
    return cart?.reduce((amount, item) => item.price + amount, 0);
  };

  // console.log(cart);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ( {cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate('/payment')} className="subtotal__button" >Proceed to Chechout</button>
    </div>
  );
}

export default Subtotal;
