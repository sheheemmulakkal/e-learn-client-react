import React, { useEffect, useState } from "react";
import { Module } from "../../../dtos/module";
import ReactPlayer from "react-player";

interface ModuleProps {
  modules: { module: string | Module; order: number }[];
}

const Modules: React.FC<ModuleProps> = ({ modules }) => {
  const [module, selectedModule] = useState<Module | null>(null);
  const playVideo = (module: Module) => {
    selectedModule(module);
  };

  useEffect(() => {
    if (modules.length > 0) {
      playVideo(modules[0].module as Module);
    }
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="col-span-2 h-auto md:h-[70vh]">
          {module && (
            <ReactPlayer
              url={module?.module}
              controls
              width="100%"
              height="100%"
            />
          )}
        </div>
        <div className="col-span-1 h-auto md:h-[70vh] bg-slate-50 overflow-hidden pb-5 shadow-slate-400 shadow-md">
          <div className="h-14 bg-slate-200 flex items-center">
            <h1 className="px-4 font-bold">Modules</h1>
          </div>
          <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 dark:scrollbar-thumb-slate-900 dark:scrollbar-track-gray-300 h-full">
            {modules.length > 0 ? (
              modules.map((currentModule) => (
                <div className="flex flex-col">
                  {/* <div className={"w-full flex flex-row items-center"}> */}
                  <div
                    className={`w-full flex flex-row items-center ${
                      selectedModule === currentModule.module
                        ? "selected-module"
                        : ""
                    }`}
                  >
                    <div className="w-2/12 flex justify-center  items-center flex-row my-6">
                      <i className="fa-regular fa-circle-check"></i>
                    </div>
                    <div className="w-8/12">
                      <h3
                        className="font-semibold"
                        onClick={() =>
                          playVideo(currentModule.module as Module)
                        }
                      >
                        {typeof currentModule?.module === "object"
                          ? currentModule.module.name
                          : currentModule?.module}
                      </h3>
                    </div>
                    <div className="w-2/12">
                      <h3 className="font-semibold">
                        {typeof currentModule?.module === "object"
                          ? currentModule.module.duration
                          : currentModule?.module}
                      </h3>
                    </div>
                  </div>
                  <hr className="h-[2px] bg-slate-300" />
                </div>
              ))
            ) : (
              <div className="w-full flex justify-center items-center h-16">
                <h1 className="font-bold">No modules found</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
