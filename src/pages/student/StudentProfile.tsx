import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
function StudentProfile() {
  const user = useSelector((store: RootState) => store.user.user);

  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className=" justify-center grid grid-cols-1 md:grid-cols-3 mt-28 w-full">
          <div className="flex  w-full flex-col justify-center items-center h-64">
            <div className="shadow-md rounded-md flex w-3/5 flex-col min-h-full justify-center items-center border pb-4 ">
              <div className="w-2/5 py-6 flex justify-center">
                <img src="/banners/profile.png" className="w-4/5" alt="" />
              </div>
              <h1 className="text-lg font-bold">
                {user?.firstname + " " + user?.lastname}
              </h1>
              <h1 className="text-base font-semibold">{user?.email}</h1>
              <h1 className="text-sm pt-4 font-semibold text-blue-500 cursor-pointer">
                Edit profile
              </h1>
            </div>
          </div>

          <div className="w-full flex flex-col border-l-2 p-4">
            <div className="w-full pr-5">
              <h1 className="underline font-bold">Joined date</h1>
              <h3 className="text-sm font-semibold text-slate-500">
                28-12-2023
              </h3>
              <hr className="" />
              <h1 className="underline font-bold pt-6">Date of birth</h1>
              <h3 className="text-sm font-semibold text-slate-500">
                08-12-2003
              </h3>
              <hr className="" />
              <h1 className="underline font-bold pt-6">Mobile</h1>
              <h3 className="text-sm font-semibold text-slate-500">
                {user?.mobile}
              </h3>
              <hr className="" />
              <h1 className="underline font-bold pt-6">Courses enrolled</h1>
              <div className="flex flex-row justify-between">
                <h3 className="text-sm font-semibold text-slate-500">
                  3 courses
                </h3>
                <h3 className="text-sm font-semibold cursor-pointer text-blue-500">
                  See courses
                </h3>
              </div>
              <hr className="" />
              <h1 className="underline font-bold pt-6">Wallet balance</h1>
              <div className="flex flex-row justify-between">
                <h3 className="text-sm font-semibold text-slate-500">
                  ₹ {user?.wallet}
                </h3>
                <h3 className="text-sm font-semibold cursor-pointer text-blue-500">
                  Wallet history
                </h3>
              </div>
              <hr className="" />
            </div>
          </div>

          <div className="w-full flex flex-col border-l-2 p-4">
            <div className="w-full pr-5">
              <h1 className="font-bold">Privacy and security</h1>
              <Link to={"/change-password"}>
                <h1 className=" cursor-pointer hover:underline  text-blue-500 font-semibold pt-6">
                  Change password
                </h1>
              </Link>

              <h1 className="cursor-pointer hover:underline text-blue-500 font-semibold pt-2">
                Delete account
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
