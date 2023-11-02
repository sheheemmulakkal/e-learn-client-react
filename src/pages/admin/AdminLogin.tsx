import AdminLoginForm from "../../components/auth/AdminLoginForm";

const AdminLogin = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="md:w-3/5 w-4/5 grid grid-cols-1 md:grid-cols-2 flex-row justify-center items-center shadow-2xl rounded-md bg-slate-300">
        <div className="h-full md:justify-center hidden md:flex md:items-center">
          <img
            src="/banners/admin login.jpeg"
            alt=""
            className="h-full object-none rounded-l-md"
          />
        </div>
        <div className="w-full h-full flex md:rounded-r-md rounded-md justify-center flex-col py-8 bg-slate-300">
          <h1 className="text-center text-2xl font-bold text-sky-800">
            Admin Login
          </h1>
          <AdminLoginForm />
        </div>
      </div>
    </div>
  )
}

export default AdminLogin