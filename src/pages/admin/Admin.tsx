import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/navbar/AdminNavbar";

const Admin = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
};

export default Admin;
