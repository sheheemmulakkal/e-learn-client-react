import { Link } from "react-router-dom";
import Dashboard from "../../components/instructor/Dashboard";
function InstructorHome() {
  return (
    <div className="w-full">
      <div
        className="h-[80vh] w-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/banners/instructor bg.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="font-extrabold text-5xl my-3">
            Create your own course
          </h1>
        </div>
        <Link to={"/instructor/add-course"}>
          <button className="px-8 py-2 my-3 bg-black font-semibold text-white">
            Create now
          </button>
        </Link>
      </div>
      <div className="flex justify-center py-16 px-10">
        <Dashboard />
      </div>
    </div>
  );
}

export default InstructorHome;
