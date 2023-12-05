import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      <Link to={"/instructor/my-courses"}>
        <div className="h-32 shadow-lg shadow-slate-300 rounded-md bg-slate-100 border drop-shadow-xl cursor-pointer hover:bg-slate-200 flex justify-center items-center">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="url(#gradient)"
              className="w-9 h-9"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#FFD700" }} />
                  <stop offset="100%" style={{ stopColor: "#FFA500" }} />
                </linearGradient>
              </defs>
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>

            <h1 className="font-bold text-xl">Visit your Courses</h1>
          </div>
        </div>
      </Link>
      <div className="h-32 shadow-lg shadow-slate-300 rounded-md bg-slate-100 border drop-shadow-xl cursor-pointer hover:bg-slate-200 flex justify-center items-center">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="url(#gradient2)"
            className="w-9 h-9"
          >
            <defs>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style={{ stopColor: "#8A2BE2" }} />
                <stop offset="100%" style={{ stopColor: "#0000FF" }} />
              </linearGradient>
            </defs>
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
          </svg>

          <h1 className="font-bold text-xl">36 Students</h1>
        </div>
      </div>
      <Link to={"/instructor/wallet-history"}>
        <div className="h-32 shadow-lg shadow-slate-300 rounded-md bg-slate-100 border drop-shadow-xl cursor-pointer hover:bg-slate-200 flex justify-center items-center">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="url(#gradient3)"
              className="w-9 h-9"
            >
              <defs>
                <linearGradient
                  id="gradient3"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#008000" }} />
                  <stop offset="100%" style={{ stopColor: "#00FF00" }} />
                </linearGradient>
              </defs>
              <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
            </svg>

            <h1 className="font-bold text-xl">₹ {user?.wallet} Earned</h1>
          </div>
        </div>
      </Link>
      <div className="h-32 shadow-lg shadow-slate-300 rounded-md bg-slate-100 border drop-shadow-xl cursor-pointer hover:bg-slate-200 flex justify-center items-center"></div>
      <Link to={"/instructor/add-course"}>
        <div className="h-32 shadow-lg shadow-slate-300 rounded-md bg-slate-100 border drop-shadow-xl cursor-pointer hover:bg-slate-200 flex justify-center items-center">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="url(#gradient5)"
              className="w-9 h-9"
            >
              <defs>
                <linearGradient
                  id="gradient5"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#FF0000" }} />
                  <stop offset="100%" style={{ stopColor: "#FFA07A" }} />
                </linearGradient>
              </defs>
              <path
                fillRule="evenodd"
                d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V10.5z"
                clipRule="evenodd"
              />
            </svg>

            <h1 className="font-bold text-xl">Create new course</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
