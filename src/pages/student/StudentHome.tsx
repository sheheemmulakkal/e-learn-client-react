import React, { useRef, useState } from "react";
import NewCourses from "../../components/student/NewCourses";
import Navbar from "../../components/navbar/Navbar";
import StudentHomeCover from "../../components/student/home/StudentHomeCover";
import SectionThree from "../../components/student/home/SectionThree";
import ThreeCards from "../../components/student/home/ThreeCards";
// import { createRoadmap } from "../../api/studentApi";
import { SmallSpinner } from "../../components/common/utils/Spinner";
import Typewriter from "typewriter-effect";

const StudentHome: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const addBullets = (textContent: string) => {
    const steps = textContent.split("\n");

    const modifiedContent = steps
      .map((step) => {
        const trimmedStep = step.trim();
        if (trimmedStep !== "") {
          // Add bullet point to non-empty lines
          return `&#8226; ${trimmedStep}`;
        }
        return ""; // Skip empty lines
      })
      .join("<br>");

    return modifiedContent;
  };

  const handleClick = async () => {
    setContent("");
    const value = inputRef.current?.value;
    if (value && value?.trim() !== "") {
      const modal = document.getElementById(
        "my_modal_3"
      ) as HTMLDialogElement | null;
      if (modal) {
        modal.showModal();
      }
      // const response = await createRoadmap(value!);
      const response = ` 1. Start with the Basics: Begin by learning the fundamentals of JavaScript, as Node.js is built on it`;
      //  Understand concepts like variables, data types, arrays, loops, functions, and objects.\n2. Introduction to Node.js: After mastering JavaScript, start learning about Node.js, its installation, and how it works. Understand its event-driven architecture and non-blocking I/O model.\n3. Learn about Node.js Core Modules: Node.js comes with several built-in modules. Learn about modules like HTTP, URL, query string, file system, events, and streams.\n4. Working with Express.js: Express.js is a popular web application framework for Node.js. Learn how to build web applications using Express.js, handle requests, and create routes.\n5. Databases and Node.js: Learn how to connect Node.js with databases like MongoDB or MySQL. Understand how to perform CRUD operations and handle data.`;
      if (response) {
        const result = addBullets(response);
        setContent(result);
        inputRef.current.value = "";
      }
    }
  };

  return (
    <>
      <Navbar />
      <StudentHomeCover />
      <div className="py-28 w-full flex justify-center">
        <div className="flex justify-center text-[#2F327D] text-center w-3/5 gap-6 flex-col">
          <h1 className=" text-2xl font-bold">
            <span className="text-[#F48C06]">All-in-One,</span> Your Complete
            Resource for Comprehensive Education
          </h1>
          <p>
            here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div>
            <button className="px-8 hover:scale-105 hover:bg-[#F48C06] hover:text-white duration-300 py-3 text-[#F48C06]  rounded-full border-2 border-[#F48C06] text-lg font-bold">
              Explore now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-10/12 bg-[#FFF3E4] rounded-lg flex justify-center flex-col py-6 px-10">
          <h1 className="font-bold text-2xl text-[#2F327D] text-center py-3">
            Create your <span className="text-[#F48C06]">roadmap</span> for
            learning
          </h1>
          <p className="text-center text-[#2F327D]">
            Embark on a personalized learning journey with our{" "}
            <b>Create Your Roadmap</b> feature!
          </p>
          <p className="text-center text-[#2F327D]">
            Whether you're passionate about programming, interested in graphic
            design, or eager to delve into business management, this tool is
            designed just for you. Simply enter your preferred topic below, and
            our platform will guide you through selecting courses, setting
            goals, and arranging a visual roadmap tailored to your unique
            interests and aspirations. Take control of your educational path and
            unlock a world of knowledge at your own pace. Let's make learning an
            exciting adventure together!
          </p>
          <div className="flex flex-row gap-3 py-5">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter your topic"
              className="w-full rounded-lg border px-5 bg-white"
            />
            <button
              className="bg-[#F48C06] py-2 px-4 rounded-lg"
              onClick={handleClick}
            >
              <i className="fa-solid text-white font-bold fa-magnifying-glass"></i>
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box bg-white text-black">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                {content ? (
                  <>
                    <h3 className="font-bold text-lg">Here is your roadmap!</h3>
                    {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
                    <Typewriter
                      options={{
                        strings: [content],
                        autoStart: true,
                        loop: false,
                        delay: 0,
                      }}
                    />
                  </>
                ) : (
                  <div className="flex flex-col p-5 justify-center items-center">
                    <div className="flex flex-row p-6 justify-center items-center gap-3">
                      <SmallSpinner />
                      <p>Generating roadmap please wait...</p>
                    </div>

                    <p>This will take some moments</p>
                  </div>
                )}
              </div>
            </dialog>
          </div>
        </div>
      </div>

      <ThreeCards />
      <div className="flex justify-center">
        <div className="container w-full pt-10 h-[70vh]">
          <SectionThree />
        </div>
      </div>

      <div className="flex justify-center p-16">
        <div className="container flex flex-row overflow-hidden p-9">
          <NewCourses />
        </div>
      </div>
    </>
  );
};

export default StudentHome;
