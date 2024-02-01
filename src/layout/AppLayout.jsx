/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      {/* component navbar */}
      <Navbar/>
      
      {/* content dari router, jika ada children/outlet */}
      <div className="overflow-x-hidden">
        {children ? children : <Outlet />}
      </div>
      
      {/* component footer */}
      <Footer />
    </>
  );
};

export default AppLayout;
