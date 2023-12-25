import {Routes, Route} from 'react-router-dom';
import Login from './1LoginSignup/Pages/Login';
import Register from './1LoginSignup/Pages/Register';
import Navbar from './1LoginSignup/Components/Navbar';
import Home from './1LoginSignup/Pages/Home';
function App() {
  return (
    <>
    <Navbar/> <br/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
