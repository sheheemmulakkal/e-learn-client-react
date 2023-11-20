import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/userSlice";
import { RootState } from "../../redux/store";
import { Roles } from "../../dtos/Roles";

import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-white dark:bg-sky-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link to={user?.role === Roles.instructor ? "/instructor" : "/"}>
//           <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white cursor-pointer">
//             EduVista
//             {user?.role === Roles.instructor && " Instructor"}
//           </span>
//         </Link>
//         <div className="flex md:order-2">
//           {user?.role === Roles.student || user?.role === Roles.instructor ? (
//             <button
//               type="button"
//               onClick={handleLogout}
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link to={"/login"}>
//               <button
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Login
//               </button>
//             </Link>
//           )}
//         </div>
//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-sticky"
//         >
//           {!(user?.role === Roles.instructor) && (
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-sky-800 dark:border-gray-700">
//               <Link to={"/courses"}>
//                 <li>
//                   <div
//                     className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                     aria-current="page"
//                   >
//                     Courses
//                   </div>
//                 </li>
//               </Link>
//               {user?.role === Roles.student && (
//                 <li>
//                   <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//                     My Learning
//                   </div>
//                 </li>
//               )}
//               {user?.role === Roles.student && (
//                 <Link to={"/profile"}>
//                   <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
//                     Profile
//                   </li>
//                 </Link>
//               )}
//               {user?.role === Roles.instructor && (
//                 <Link to={"/instructor/add-course"}>
//                   <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
//                     Add course
//                   </li>
//                 </Link>
//               )}
//             </ul>
//           )}
//           {user?.role === Roles.instructor && (
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-sky-800 dark:border-gray-700">
//               <Link to={"/instructor/add-course"}>
//                 <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
//                   Add course
//                 </li>
//               </Link>
//               <Link to={"/instructor/my-courses"}>
//                 <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">
//                   My courses
//                 </li>
//               </Link>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function NavBar() {
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
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <>
      {!(user?.role === Roles.instructor) && (
        <ul className="mt-2 mb-4 px-4 text-black font-semibold flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Link to={"/courses"}>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-semibold"
            >
              <div className="flex items-center">Courses</div>
            </Typography>
          </Link>
          {user?.role === Roles.student && (
            <>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold"
              >
                <div className="flex items-center">My Learnings</div>
              </Typography>
              <Link to={"/profile"}>
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-semibold"
                >
                  <div className="flex items-center">Profile</div>
                </Typography>
              </Link>
            </>
          )}
          {/* {user?.role === Roles.instructor && (
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-semibold"
          >
            <div className="flex items-center">Docs</div>
          </Typography>
          )} */}
        </ul>
      )}
      {user?.role === Roles.instructor && (
        <ul className="mt-2 mb-4 px-4 text-black font-semibold flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Link to={"/instructor/my-courses"}>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-semibold"
            >
              <div className="flex items-center">My courses</div>
            </Typography>
          </Link>
          <Link to={"/instructor/add-course"}>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-semibold"
            >
              <div className="flex items-center">Add course</div>
            </Typography>
          </Link>
        </ul>
      )}
    </>
  );

  return (
    <div className="mt-0 max-h-[768px] w-screen ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={user?.role === Roles.instructor ? "/instructor" : "/"}>
            <Typography
              as="a"
              className="mr-4 px-5 text-2xl cursor-pointer py-1.5 font-bold text-black"
            >
              EduVista
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {user?.role === Roles.student || user?.role === Roles.instructor ? (
              <div className="flex items-center">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block text-white bg-red-800"
                  onClick={handleLogout}
                >
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-x-1">
                <Link to={"/login"}>
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Log In</span>
                  </Button>
                </Link>
                <Link to={"/signup"}>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block text-white bg-sky-800"
                  >
                    <span>Sign up</span>
                  </Button>
                </Link>
              </div>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit text-black mx-3 mb-3 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {user?.role === Roles.student || user?.role === Roles.instructor ? (
            <div className="flex items-center gap-x-1">
              <Button
                fullWidth
                variant="gradient"
                size="sm"
                onClick={handleLogout}
                className=" bg-sky-800"
              >
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-x-1">
              <Link to={"/login"}>
                <Button fullWidth variant="text" size="sm" className="">
                  <span>Log In</span>
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button
                  fullWidth
                  variant="gradient"
                  size="sm"
                  className=" bg-sky-800"
                >
                  <span>Sign up</span>
                </Button>
              </Link>
            </div>
          )}
        </MobileNav>
      </Navbar>
    </div>
  );
}
