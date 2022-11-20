import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/CheckoutProduct/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginComponent/Login";
// import Address from "./Components/Address/Address";
import { useStateValue } from "./Components/Reducer&StateProvider/StateProvider";
import { useEffect } from "react";
import { auth } from "./Components/Farebase/firebase";
import Payment from "./Components/PaymentComponent/Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/OrderProducts/Orders";

const promise = loadStripe(
  "pk_test_51Lwp3oEVKXKlf8FPdy0DWFxeqvmLEDSO2MPSA3ecjrLXDcMrIdtBETNOA2YDCcKtk6FvXsPlVMGukJa957sPj0h700u94i7sWv"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/Orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
               <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              </>
            }
          />
          {/* <Route path="/address" element={<Address />} /> */}
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
