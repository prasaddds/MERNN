import {Routes, Route} from 'react-router-dom';
import Login from './1LoginSignup/Pages/Login';
import Register from './1LoginSignup/Pages/Register';
import Navbar from './1LoginSignup/Components/Navbar';
import Home from './1LoginSignup/Pages/Home';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
axios.defaults.baseURL=`http://localhost:8000`
axios.defaults.withCredentials=true
function App() {
  return (
    <>
    <Navbar/> <br/>
    <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
