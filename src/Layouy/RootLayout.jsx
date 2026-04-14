
import { Outlet } from "react-router";
import Navbar from "../Component/SharedItem/Navbar"
import Footer from "../Component/SharedItem/Footer";

// import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

      {/* Toast container
      <ToastContainer /> */}
    </div>
  );
};

export default RootLayout;
