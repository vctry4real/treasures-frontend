// src/components/OnboardingCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OnboardingCarousel.css';
import { imageSlider} from './data';

const OnboardingCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {imageSlider.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-top">
              <img src={process.env.PUBLIC_URL + item.linkImg} alt={item.title} />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="content">{item.content}</span>
            </div>
            {item.id === 5 && (
              <button className="get-started-button">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
                  <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="0.5s" values="0 0; 10 0; 0 0;" repeatCount="indefinite" />
                </svg>              

              </button>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OnboardingCarousel;