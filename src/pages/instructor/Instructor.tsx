import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Instructor = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Instructor;
