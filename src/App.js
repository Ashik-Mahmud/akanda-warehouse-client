import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />

        {/* login page  */}
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />

        {/* protected routes  */}
        <Route path='/manage-products' element={<ManageProducts />} />
        <Route path='/my-items' element={<MyItems />} />
    </Routes>
     <Footer />
    </>
  );
}

export default App;
