import { Outlet } from "react-router-dom";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";


const Layout = () => {
    return (
        <>
          <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
          </div>
        </>
      );
}

export default Layout