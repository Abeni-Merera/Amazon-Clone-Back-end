import React, {useState, useEffect} from "react";
import { SliderData } from "../SliderBanner/SliderData";
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../ImageSlider/ImageSlider.css'

function ImageSlider({slides}) {
const [current, setCurrent] = useState(0);
const length = slides.length

const nextSlider = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
}
const prevSlider = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}

// console.log(current)


if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}



  return (
    <section className="slider">
        <ArrowBackIosIcon className="left__arrow" onClick={prevSlider} />
        <ArrowForwardIosIcon className="right__arrow" onClick={nextSlider} />
      {SliderData.map((slide, index) => {

        
        return (
            <div key={index} className={index === current ? 'slide active' : 'slide'}>
                {index === current && (<img src={slide.image} alt="Banner images" className="image"/>)}
            </div>
        )
      })}
    </section>
  );
}

export default ImageSlider;
