import React from "react";
import "./Home.css";
import Product from "../ProductComponent/Product";
import ImageSlider from "../ImageSlider/ImageSlider";
import { SliderData } from "../SliderBanner/SliderData";

function Home() {
  return (
    <div className="home__container">

          <div>
            <ImageSlider className='home__image' slides={SliderData} />
          </div>


      {/* <img
        className="home__image"
        src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
        alt="banner"
      /> */}

      <div className="home__row">
        <Product
          id="9"
          title="Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)       "
          price={99.98}
          rating={5}
          image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX679_.jpg"
        />
        <Product
          id="1"
          title="All-New Echo Dot (5th Gen, 2022 release) with clock | Smart speaker with clock and Alexa | Cloud Blue."
          price={59.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61s30lrLDSL._AC_SX466_.jpg"
        />
        <Product
          id="2"
          title="IOTXY Wooden Open Shelf Bookcase - 3-Tier Floor Standing Display Cabinet Rack with Legs, 5 Cubes Bookshelf, Bright Blue."
          price={77.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61L13rm4G3L._AC_UL450_SR450,320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="8"
          title="DuroMax XP13000EH Dual Fuel Portable Generator 13000 Watt Gas or Propane Powered Electric Start-Home Back Up, Blue/Gray       ."
          price={15.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81cDkavQ1wS._AC_SX425_.jpg"
        />
        <Product
          id="3"
          title="Soccer Gifts Night Light for Kids, Dimmable 3D LED Nightlight, 16 Colors Changing Lamp with Touch &amp; Remote Control."
          price={99.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81Uhp4FMwmL._AC_SY450_.jpg"
        />
        <Product
          id="4"
          title="Greesum 4 Pieces Patio Furniture Set, Outdoor Conversation Sets for Patio, Lawn, Garden, Poolside with A Glass Coffee Table, Beige       ."
          price={153}
          rating={4}
          image="https://m.media-amazon.com/images/I/91+43BCPFmL._AC_SX425_.jpg"
        />

        <Product
          id="5"
          title="AsterOutdoor Sun Shade Sail Rectangle 16' x 20' UV Block Canopy for Patio Backyard Lawn Garden Outdoor Activities, Sand."
          price={76}
          rating={4}
          image=" https://m.media-amazon.com/images/I/81n1XVDsiFL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="10"
          title="Kahuna Chair EM-Arete Ivory/Brown - Fully-Assembled 3D Full-Body Zero Gravity with auto footrest with Passive Stretching and Excellent Foot Reflexology Massage, Bluetooth Speakers, Heating       ."
          price={6499}
          rating={4}
          image="https://m.media-amazon.com/images/I/712Eq8HSVXS._AC_SY450_.jpg"
        />
        <Product
          id="6"
          title="Shintenchi 4-Piece Outdoor Patio Furniture Set, Wicker Rattan Sectional Sofa Couch with Glass Coffee Table | Black."
          price={359}
          rating={4}
          image="https://m.media-amazon.com/images/I/81vG-UShBjL._AC_SX425_.jpg"
        />
        <Product
          id="7"
          title="If You Tell: A True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood Paperback – December."
          price={11.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41NGxKy-N1L._SX331_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="11"
          title="Panasonic LUMIX S5 Full Frame Mirrorless Camera, 4K 60P Video Recording with Flip Screen &amp; WiFi, LUMIX S 20-60mm F3.5-5.6 Lens, L-Mount, 5-Axis Dual I.S, DC-S5KK (Black)       ."
          price={2297.99}
          rating={7}
          image="https://m.media-amazon.com/images/I/71qbqidoY5L._AC_SY355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
