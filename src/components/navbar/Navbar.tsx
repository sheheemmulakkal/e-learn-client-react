import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/userSlice";
import { RootState } from "../../redux/store";
import { Roles } from "../../dtos/Roles";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const user = useSelector((store: RootState) => store.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userActions.userLogout());
    if (user?.role === Roles.student) {
      navigate("/login");
    } else {
      navigate("/instructor/login");
    }
  };
  return (
    <nav className="bg-white dark:bg-sky-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={user?.role === Roles.instructor ? "/instructor" : "/"}>
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white cursor-pointer">
            EduVista
            {user?.role === Roles.instructor && " Instructor"}
          </span>
        </Link>
        <div className="flex md:order-2">
          {user?.role === Roles.student || user?.role === Roles.instructor ? (
            <button
              type="button"
              onClick={handleLogout}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          {!(user?.role === Roles.instructor) && (
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-sky-800 dark:border-gray-700">
              <Link to={"/courses"}>
                <li>
                  <div
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Courses
                  </div>
                </li>
              </Link>
              {user?.role === Roles.student && (
                <li>
                  <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    My Learning
                  </div>
                </li>
              )}
              {user?.role === Roles.student && (
                <Link to={"/profile"}>
                  <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
                    Profile
                  </li>
                </Link>
              )}
              {user?.role === Roles.instructor && (
                <Link to={"/instructor/add-course"}>
                  <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
                    Add course
                  </li>
                </Link>
              )}
            </ul>
          )}
          {user?.role === Roles.instructor && (
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-sky-800 dark:border-gray-700">
              <Link to={"/instructor/add-course"}>
                <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
                  Add course
                </li>
              </Link>
              <Link to={"/instructor/my-courses"}>
                <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
                  My courses
                </li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
