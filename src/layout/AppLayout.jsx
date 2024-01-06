/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      {/* component navbar */}
      <Navbar />

      {/* content dari router, jika ada children/outlet */}
      <div className="overflow-x-hidden">
        {children ? children : <Outlet />}
      </div>
    </>
  );
};

export default AppLayout;
