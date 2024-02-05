import { Routes, Route } from "react-router-dom";
import Outlet from './Outlet.js'
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Unauthorized from "../Pages/Unauthorized/Unauthorized";
import NotFound from "../Pages/NotFound/NotFound";
import ProductDetails from "../Pages/ProductDetails/ProductDetails.js";


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/signup" exact element={<SignUp />} />
        </Route>
      <Route path="/unauthorized" exact element={<Unauthorized />} />
      <Route path="/*"  element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
