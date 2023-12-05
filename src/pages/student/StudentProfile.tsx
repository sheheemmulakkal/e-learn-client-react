import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/userSlice";
import { RootState } from "../../redux/store";
import React, { useState } from "react";
import { updateProfileImage, updateProfile } from "../../api/studentApi";
import EditProfileModal from "../../components/student/EditProfileModal";

function StudentProfile() {
  const user = useSelector((store: RootState) => store.user.user);

  const dispatch = useDispatch();
  const [err, setErr] = useState("");
  const [updating, setUpdating] = useState(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleAddModuleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAddModuleSubmit = async (moduleData: {
    firstname: string;
    lastname: string;
  }) => {
    try {
      const response = await updateProfile({
        firstname: moduleData.firstname,
        lastname: moduleData.lastname,
      });
      if (response) {
        dispatch(userActions.saveUser({ ...response, role: "student" }));
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      return { success: false };
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      try {
        setUpdating(true);
        const response = await updateProfileImage(file);
        if (response) {
          dispatch(userActions.saveUser({ ...response, role: "student" }));
          setUpdating(false);
        }
      } catch (error) {
        setErr("Fail to update image");
        setTimeout(() => {
          setErr("");
        }, 1000);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className=" justify-center grid grid-cols-1 md:grid-cols-3 mt-28 w-full">
          <div className="flex  w-full flex-col justify-center items-center h-64">
            <div className="shadow-md rounded-md flex w-3/5 flex-col min-h-full justify-center items-center border pb-4 ">
              <div className="w-2/5 py-6 flex justify-center rounded-md">
                <label htmlFor="fileInput" className="cursor-pointer w-4/5">
                  {err && <p className="text-red-700 text-xs">{err}</p>}
                  {updating ? (
                    <div
                      className="w-12 h-12 rounded-full animate-spin
                      border-8 border-solid border-blue-700 border-t-transparent"
                    ></div>
                  ) : (
                    <img
                      src={
                        user?.image ? `${user?.image}` : "/banners/profile.png"
                      }
                      className={"rounded-sm object-cover"}
                      alt=""
                    />
                  )}
                </label>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
              <h1 className="text-lg font-bold">
                {user?.firstname + " " + user?.lastname}
              </h1>
              <h1 className="text-base font-semibold">{user?.email}</h1>
              <h1
                className="text-sm pt-4 font-semibold text-blue-500 cursor-pointer"
                onClick={handleAddModuleClick}
              >
                Edit profile
              </h1>
              {showPopup && (
                <EditProfileModal
                  onClose={handleClosePopup}
                  onSubmit={handleAddModuleSubmit}
                />
              )}
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
                  {user?.courses?.length} courses
                </h3>
                <Link to={"/my-learnings"}>
                  <h3 className="text-sm font-semibold cursor-pointer text-blue-500">
                    See courses
                  </h3>
                </Link>
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
