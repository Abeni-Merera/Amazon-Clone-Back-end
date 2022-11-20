import React from "react";
import "../Header/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Location from "../Location/Location";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useStateValue } from "../Reducer&StateProvider/StateProvider";
import GpsLogo from '../Gps-logo-image/images.png'
import { auth } from "../Farebase/firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const loginLogout = () => {
    if (user) {
      signOut(auth);
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXl_zkdU92_MYc2tqty6pIjvG4JMAtJoQ5yA0dE4UfbS2R5l-RUiMczSNtQ1OAKcv-ZU&amp;usqp=CAU"
          alt="amazon_Logo"
        ></img>
      </Link>

      <Link to="/Address">
        <div className="header__options">
          <span className="header__optionOne">Hello</span>
         {/* <img className="gps__logo" src={GpsLogo}/> */}
          <span className="header__optionTwo"><Location/></span>
        </div>
      </Link>
     

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/Login"}>
          <div className="header__options" onClick={loginLogout}>
            <span className="header__optionOne">
              Hello! {!user ? "Guest" : user?.email}{" "}
            </span>
            <span className="header__optionTwo">
              {!user ? "sign In" : "sign Out"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__clearlink">
        <div className="header__options">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">& Orders</span>
        </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionCart">
            <ShoppingCartIcon className=" header__optionTwo" />
            <span className="header__cartCount">{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
