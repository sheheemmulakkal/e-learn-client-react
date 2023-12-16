import React from "react";
import { useVideo } from "./VideoContext";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Overview = () => {
  const module = useSelector((state: RootState) => state.selecedCourse.module);
  const { handleSeek } = useVideo();

  return (
    <div className="text-black p-5">
      <h1 className="font-bold">Description</h1>
      <p>{module?.description}</p>
      {module?.chapters && module?.chapters?.length > 0 && (
        <h3 className="font-semibold pt-5 pb-1 underline">Chapters</h3>
      )}
      {module?.chapters &&
        module?.chapters?.length > 0 &&
        module.chapters.map((chapter) => (
          <div className="flex flex-col cursor-pointer">
            <div
              className="flex flex-row px-3 "
              onClick={() => handleSeek(chapter.seconds)}
            >
              <p className=" w-1/12 text-blue-600 font-medium">
                {chapter.duration}
              </p>
              <p className="font-medium">{chapter.chapter}</p>
            </div>
          </div>
        ))}
      {/* <button onClick={() => handleSeek(6)}>Skip to 30 seconds</button>
      <button onClick={() => handleSeek(3)}>Skip to 60 seconds</button> */}
    </div>
  );
};

export default Overview;
