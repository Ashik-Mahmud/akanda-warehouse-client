import { createContext, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Auth/RequireAuth';
import { auth } from './Firebase/Firebase.config';
import Token from './Helpers/Token';
import useFirebase from './Hooks/useFirebase';
import About from './Pages/About/About';
import { AddProduct } from './Pages/AddProduct/AddProduct';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import Blogs from './Pages/Blogs/Blogs';
import AddBlog from './Pages/BlogsManagement/AddBlog/AddBlog';
import BlogsManagement from './Pages/BlogsManagement/BlogsManagement';
import ManageBlog from './Pages/BlogsManagement/ManageBlog/ManageBlog';
import UpdateBlog from './Pages/BlogsManagement/UpdateBlog/UpdateBlog';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import EditProduct from './Pages/MyItems/EditProduct/EditProduct';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
export const AppContext = createContext(null)
function App() {
    const {user, isAuth} = useFirebase();
    useEffect(()=>{
        if(isAuth){
            Token(auth?.currentUser?.uid)
        }
    }, [isAuth])
  
  return (
    <>
    <Toaster />
    <AppContext.Provider value={{user, isAuth}}>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog-details/:BlogId' element={<BlogDetails />} />
        <Route path='/about' element={<About />} />

        {/* login page  */}
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />

        {/* protected routes  */}
        <Route path='/manage-products' element={<RequireAuth><ManageProducts /></RequireAuth>} />
        <Route path='/my-items' element={<RequireAuth><MyItems /></RequireAuth>} />
        <Route path='/inventory/:inventoryId' element={<RequireAuth><Inventory /></RequireAuth>} />
        <Route path='/add-product' element={<RequireAuth><AddProduct /></RequireAuth>} />
        <Route path='/edit-product/:productId' element={<RequireAuth><EditProduct /></RequireAuth>} />
        <Route path='/management-blogs' element={<RequireAuth><BlogsManagement /></RequireAuth>} >
            <Route  index element={<AddBlog />} />
            <Route path='add-blog' element={<AddBlog />} />
            <Route path='manage-blog' element={<ManageBlog />} />
        </Route>
        <Route path='/update-blog/:blogId' element={<RequireAuth><UpdateBlog /></RequireAuth>} />
        
        

        {/* not found route  */}
        <Route path='*' element={<NotFound />} />
    </Routes>
      <Footer />
     </AppContext.Provider>
    </>
  );
}

export default App;
