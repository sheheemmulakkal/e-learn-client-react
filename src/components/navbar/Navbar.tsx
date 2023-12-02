import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/userSlice";
import { RootState } from "../../redux/store";
import { Roles } from "../../dtos/Roles";

import { Link, useNavigate } from "react-router-dom";

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
              <Link to={"/my-learnings"}>
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-semibold"
                >
                  <div className="flex items-center">My Learnings</div>
                </Typography>
              </Link>
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
