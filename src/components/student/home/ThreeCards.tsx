function ThreeCards() {
  return (
    <div className="flex justify-center">
      <div className="container w-5/6 py-10 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          <div className="flex flex-col w-full  justify-center">
            <div className="w-full flex justify-center translate-y-1/2 z-10">
              <div className="h-14 w-14 rounded-full bg-red-600 flex justify-center items-center hover:scale-105 cursor-pointer ease-in-out duration-300">
                <i className="text-xl text-white fa-solid fa-user-group"></i>
              </div>
            </div>
            <div className=" w-full  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  py-10 px-6 text-[#2F327D] rounded-md">
              <h1 className="text-center text-lg font-bold py-3 ">
                Unleashing Interactive Learning with Chatroom-Enhanced Courses
              </h1>
              <p className="text-center text-base ">
                Our interactive courses are designed to break the barriers of
                traditional learning, offering you a space where discussions,
                questions, answers, and ideas
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full  justify-center">
            <div className="w-full flex justify-center translate-y-1/2 z-10">
              <div className="h-14 w-14 rounded-full bg-[#2f7d46] flex justify-center items-center hover:scale-105 cursor-pointer ease-in-out duration-300">
                <i className="text-2xl text-white fa-solid fa-stamp"></i>
              </div>
            </div>
            <div className=" w-full  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  py-10 px-6 text-[#2F327D] rounded-md">
              <h1 className="text-center text-lg font-bold py-3 ">
                Elevate Your Skills with Recognized Accreditation and
                Certification
              </h1>
              <p className="text-center">
                Unlock a world of opportunities and validate your expertise with
                our Certification Excellence programs. Connect with certified
                instructors.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full  justify-center">
            <div className="w-full flex justify-center translate-y-1/2 z-10">
              <div className="h-14 w-14 rounded-full bg-[#3b65c0dc] flex justify-center items-center hover:scale-105 cursor-pointer ease-in-out duration-300">
                <i className="text-2xl text-white fa-solid fa-calendar-check"></i>
              </div>
            </div>
            <div className=" w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  py-10 px-6 text-[#2F327D] rounded-md">
              <h1 className="text-center text-lg font-bold py-3 ">
                Seamlessly Plan Your Learning Adventure With Proper Note Taking
              </h1>
              <p className="text-center">
                Empower learning experience with Note-Taking Mastery feature.
                Our platform integrates note-taking into your learning
                environment
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center"></div>
          <div className="flex flex-col justify-center"></div>
        </div>
      </div>
    </div>
  );
}

export default ThreeCards;
