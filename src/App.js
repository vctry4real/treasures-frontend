import {Route, Routes} from 'react-router-dom'
import Registration from './components/Registration'
import LandingPage from './pages/LandingPage';
function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/registration' element={<Registration/>}></Route>
        
      </Routes>
    </>
  )
}

export default App;
