import React, { useState, useEffect } from "react";
import {
  getLanguageList,
  listLanguage,
  unlistLanguage,
} from "../../api/adminApi";

interface ILanguage {
  id?: string;
  language?: string;
  status?: boolean;
}

function LanguageList() {
  const [languageList, setLanguageList] = useState<ILanguage[]>([]);
  const getLanguages = async () => {
    try {
      const languages = await getLanguageList();

      setLanguageList(languages!);
    } catch (error) {
      console.log(error);
    }
  };

  const handleList = async (
    id: string | undefined,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const response = await listLanguage(id!);
    if (response) {
      const newList = languageList.map((user) =>
        user.id === id ? { ...user, status: true } : user
      );
      setLanguageList(newList);
    }
  };
  const handleUnlist = async (
    id: string | undefined,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const response = await unlistLanguage(id!);

    if (response) {
      const newList = languageList.map((language) =>
        language.id === id ? { ...language, status: false } : language
      );
      setLanguageList(newList);
    }
  };

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <div>
      <div className="px-20">
        <div className="relative mt-16">
          <div className="flex items-center justify-between">
            <div>
              <h1>Languages</h1>
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
                Add language
              </button>
            </div>
          </div>
          <div className=" overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-white uppercase bg-sky-800 ">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/2">
                    Languages
                  </th>
                  <th scope="col" className="px-6 py-3">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                {languageList &&
                  languageList.map((language) => (
                    <tr
                      key={language.id}
                      className="bg-white border-b font-medium"
                    >
                      <td className="px-6 py-4">{language.language}</td>

                      <td>
                        <button
                          type="button"
                          onClick={(e) => {
                            if (language.status) {
                              handleUnlist(language.id, e);
                            } else {
                              handleList(language.id, e);
                            }
                          }}
                          className={`text-white mt-2 ${
                            !language.status
                              ? "bg-red-700 hover:bg-red-800"
                              : "bg-green-700 hover:bg-green-800"
                          } font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2`}
                        >
                          {!language.status ? "Unlisted" : "Listed"}
                        </button>
                        <button
                          type="button"
                          // onClick={(e) => {
                          //   if (language.status) {
                          //     handleUnlist(language.id, e);
                          //   } else {
                          //     handleList(language.id, e);
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
            {!languageList && (
              <h1 className="px-6 py-4 font-semibold">No users found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageList;
