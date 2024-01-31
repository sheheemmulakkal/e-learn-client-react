import { Link } from "react-router-dom";

function StudentHomeCover() {
  return (
    <div className="flex justify-center bg-[#FFF3E4]">
      <div className="container w-full h-[75vh]  grid grid-cols-1 md:grid-cols-2">
        <div className="container flex h-full  gap-6 justify-center items-center flex-col w-4/5">
          {/* div. */}
          <div className="px-10">
            <h1 className="text-4xl text-left font-bold text-[#2F327D]">
              <span className="text-[#F48C06]">Learning</span> Online is now
              much easier
            </h1>
          </div>
          <div className="px-10">
            <p className="text-[#2F327D] text-lg font-thin">
              EduVista is an interesting platform that teach you in more an
              interactive way
            </p>
          </div>
          <div className="px-10 flex justify-start w-full">
            <Link to={"/courses"}>
              <button
                className="px-8 hover:scale-105 duration-300 py-3 rounded-full bg-[#F48C06] text-white text-lg font-semibold
              
              flex items-center   gap-1 px-4 py-2 cursor-pointer 
              tracking-widest  hover:bg-[#ffa735]
              duration-300 hover:gap-2 hover:translate-x-3
              
              "
              >
                Explore now
                <svg
                  className="w-5 h-5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className=" h-full md:flex hidden justify-center items-end w-full">
          <div
            className="h-full w-full bg-cover flex items-end  bg-center"
            style={{ backgroundImage: "url('/banners/cover hero.png')" }}
          >
            <div className="w-full h-4/5 text-black">
              <div className="w-full  justify-center grid grid-cols-2">
                <div></div>
                <div className="flex justify-center pr-14">
                  <button className="bg-white  px-5 py-4 items-center font-semibold rounded-lg flex flex-row gap-3 shadow-lg">
                    <div className="px-2 py-1 rounded-md bg-[#ee23d3]">
                      <i className="text-white text-lg fa-solid fa-chart-simple"></i>
                    </div>
                  </button>
                </div>
              </div>
              <div className="pl-10 w-full mb-2">
                <button className="bg-white bg-opacity-90 px-5 py-4 items-center font-semibold rounded-lg flex flex-row gap-3 shadow-lg">
                  <div className="px-2 py-1 rounded-md bg-[#23BDEE]">
                    <i className="text-white text-lg fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className="flex flex-col justify-start">
                    <h5 className="font-semibold text-left">
                      Quality Resources
                    </h5>
                    <h6 className="font-medium text-sm">
                      Learn with experienced teachers
                    </h6>
                  </div>
                </button>
              </div>
              <div className="pr-10 w-full flex justify-end mb-2">
                <button className="bg-white bg-opacity-90 px-5 py-4 items-center font-semibold rounded-lg flex flex-row gap-3 shadow-lg">
                  <div className="px-2 py-1 rounded-md bg-[#88e080]">
                    <i className="text-white text-lg fa-solid fa-comments"></i>
                  </div>
                  <div className="flex flex-col justify-start">
                    <h5 className="font-semibold text-left">
                      Peer interaction
                    </h5>
                    <h6 className="font-medium text-sm">
                      Interact with other students
                    </h6>
                  </div>
                </button>
              </div>
              <div className="pr-20 w-full flex justify-center">
                <button className="bg-white bg-opacity-90 px-5 py-4 items-center font-semibold rounded-lg flex flex-row gap-3">
                  <div className="px-2 py-1 rounded-md bg-[#e080a8]">
                    <i className="text-white text-lg fa-solid fa-certificate"></i>
                  </div>
                  <div className="flex flex-col justify-start">
                    <h5 className="font-semibold text-left">Certification</h5>
                    <h6 className="font-medium text-sm">
                      Get certified after completion
                    </h6>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHomeCover;
