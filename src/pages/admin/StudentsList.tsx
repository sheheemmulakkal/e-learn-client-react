import { useState, useEffect, MouseEvent } from "react";
import {
  getAllStudents,
  blockStudent,
  unblockStudent,
} from "../../api/adminApi";
import AdminNavbar from "../../components/navbar/AdminNavbar";

interface Student {
  id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  mobile?: string;
  isBlocked?: boolean;
}

function StudentsList() {
  const [userList, setUserList] = useState<Student[]>([]);
  const getUsers = async () => {
    try {
      const students = await getAllStudents();
      setUserList(students!);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlock = async (
    id: string | undefined,
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const response = await blockStudent(id!);
    if (response) {
      const newList = userList.map((user) =>
        user.id === id ? { ...user, isBlocked: true } : user
      );
      setUserList(newList);
    }
  };
  const handleUnblock = async (
    id: string | undefined,
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const response = await unblockStudent(id!);

    if (response) {
      const newList = userList.map((user) =>
        user.id === id ? { ...user, isBlocked: false } : user
      );
      setUserList(newList);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="px-20">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-28">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white uppercase bg-sky-800 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  First name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile
                </th>
                <th scope="col" className="px-6 py-3">
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              {userList &&
                userList.map((user) => (
                  <tr key={user.id} className="bg-white border-b font-medium">
                    <td className="px-6 py-4">{user.firstname}</td>
                    <td className="px-6 py-4">{user.lastname}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.mobile}</td>
                    <td>
                      <button
                        type="button"
                        onClick={(e) => {
                          if (user.isBlocked) {
                            handleUnblock(user.id, e);
                          } else {
                            handleBlock(user.id, e);
                          }
                        }}
                        className={`text-white mt-2 ${
                          user.isBlocked
                            ? "bg-red-700 hover:bg-red-800"
                            : "bg-green-700 hover:bg-green-800"
                        } font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2`}
                      >
                        {user.isBlocked ? "Blocked" : "Active"}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {!userList && (
            <h1 className="px-6 py-4 font-semibold">No users found</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentsList;
