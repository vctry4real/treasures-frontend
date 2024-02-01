// src/components/OnboardingCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OnboardingCarousel.css';

const OnboardingCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="onboarding-carousel">
      <Slider {...settings}>
        <div className="carousel-item">
          <h1>Welcome to Onboarding</h1>
          <p>Discover amazing features with our app.</p>
        </div>
        <div className="carousel-item">
          <h1>Easy to Use</h1>
          <p>Intuitive design for a seamless experience.</p>
        </div>
        <div className="carousel-item">
          <h1>Get Started Today</h1>
          <p>Sign up and explore the possibilities.</p>
        </div>
      </Slider>
    </div>
  );
};

export default OnboardingCarousel;

// src/components/OnboardingCarousel.js
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './OnboardingCarousel.css'; // Import your custom styles here

// const OnboardingCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="onboarding-carousel">
//       <Slider {...settings}>
//         <div className="carousel-item">
//           <h1 style={{ color: 'var(--color-secondary)' }}>Welcome to Onboarding</h1>
//           <p style={{ color: 'var(--text-white-bg)' }}>Discover amazing features with our app.</p>
//         </div>
//         <div className="carousel-item">
//           <h1 style={{ color: 'var(--color-secondary)' }}>Easy to Use</h1>
//           <p style={{ color: 'var(--text-white-bg)' }}>Intuitive design for a seamless experience.</p>
//         </div>
//         <div className="carousel-item">
//           <h1 style={{ color: 'var(--color-secondary)' }}>Get Started Today</h1>
//           <p style={{ color: 'var(--text-white-bg)' }}>Sign up and explore the possibilities.</p>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default OnboardingCarousel;
