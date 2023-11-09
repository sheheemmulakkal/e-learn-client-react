import React, { useState, useEffect } from "react";
import { getLevelList, listLevel, unlistLevel } from "../../api/adminApi";

interface ILevel {
  id?: string;
  level?: string;
  status?: boolean;
}

function LevelList() {
  const [levelList, setLevelList] = useState<ILevel[]>([]);
  const getLevels = async () => {
    try {
      const levels = await getLevelList();

      setLevelList(levels!);
    } catch (error) {
      console.log(error);
    }
  };

  const handleList = async (
    id: string | undefined,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const response = await listLevel(id!);
    if (response) {
      const newList = levelList.map((user) =>
        user.id === id ? { ...user, status: true } : user
      );
      setLevelList(newList);
    }
  };
  const handleUnlist = async (
    id: string | undefined,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const response = await unlistLevel(id!);

    if (response) {
      const newList = levelList.map((level) =>
        level.id === id ? { ...level, status: false } : level
      );
      setLevelList(newList);
    }
  };

  useEffect(() => {
    getLevels();
  }, []);

  return (
    <div>
      <div className="px-20">
        <div className="relative mt-16">
          <div className="flex items-center justify-between">
            <div>
              <h1>Levels</h1>
            </div>
            <div>
              <button
                type="button"
                // onClick={(e) => {
                //   if (language.status) {
                //     handleUnlist(language.id, e);
                //   } else {
                //     handleList(language.id, e);
                //   }
                // }}
                className={`text-white mt-2 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2`}
              >
                Add level
              </button>
            </div>
          </div>
          <div className=" overflow-x-auto shadow-md sm:rounded-lg ">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-white uppercase bg-sky-800 ">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/2">
                    Levels
                  </th>
                  <th scope="col" className="px-6 py-3">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                {levelList &&
                  levelList.map((level) => (
                    <tr
                      key={level.id}
                      className="bg-white border-b font-medium"
                    >
                      <td className="px-6 py-4">{level.level}</td>

                      <td>
                        <button
                          type="button"
                          onClick={(e) => {
                            if (level.status) {
                              handleUnlist(level.id, e);
                            } else {
                              handleList(level.id, e);
                            }
                          }}
                          className={`text-white mt-2 ${
                            !level.status
                              ? "bg-red-700 hover:bg-red-800"
                              : "bg-green-700 hover:bg-green-800"
                          } font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2`}
                        >
                          {!level.status ? "Unlisted" : "listed"}
                        </button>
                        <button
                          type="button"
                          // onClick={(e) => {
                          //   if (level.status) {
                          //     handleUnlist(level.id, e);
                          //   } else {
                          //     handleList(level.id, e);
                          //   }
                          // }}
                          className={`text-white mt-2 bg-black font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2`}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {!levelList && (
              <h1 className="px-6 py-4 font-semibold">No users found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelList;
