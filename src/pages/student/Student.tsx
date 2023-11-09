import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Student = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Student;
