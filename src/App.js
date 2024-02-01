// src/App.js
import React from 'react';
import OnboardingCarousel from './components/OnboardingCarousel';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app">
      <OnboardingCarousel />
    </div>
  );
}

export default App;


// src/index.js or src/App.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//  // Import your global styles here

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// export default App;