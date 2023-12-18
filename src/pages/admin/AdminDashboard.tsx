import LineChart from "../../components/admin/charts/LineChart";
// import BarChart from "../../components/admin/charts/BarChart";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import { dashboard } from "../../api/adminApi";
import { EnrolledCountByCategoryAndDate } from "../../dtos/Dashboard";
import { useEffect, useState } from "react";

interface adminDashboardData {
  enrolledCountByCategoryAndDate: EnrolledCountByCategoryAndDate[];
  totalRevenue: number;
  studentCount: number;
  instructorCount: number;
  courseCount: number;
}

function AdminDashboard() {
  const [data, setData] = useState<adminDashboardData>();
  const getDashboardData = async () => {
    const response: adminDashboardData = await dashboard();
    setData(response);
  };

  useEffect(() => {
    getDashboardData();
  });

  return (
    <>
      <AdminNavbar />
      <div className="flex justify-center w-full  pt-24 px-10">
        <div className="container grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <div className="flex flex-col shadow-lg px-3 border rounded-md">
            <h1 className="py-3 font-bold text-black text-lg">
              Course enrollment data
            </h1>
            <LineChart />
          </div>
          <div className="flex flex-col shadow-lg p-5 border h-full items-center  text-black rounded-md">
            <div className="container grid grid-cols-2 items-center gap-3">
              <div className="rounded-lg h-36 flex flex-col bg-[#dcffe2] gap-4 px-5 justify-center items-center shadow-md border">
                <div className="flex flex-row items-center gap-3">
                  <i
                    className="fa-solid fa-graduation-cap text-xl"
                    style={{ color: "#1f4551" }}
                  ></i>
                  <h1 className="font-bold text-lg">
                    Total students: {data?.studentCount}
                  </h1>
                </div>
                <p className="text-center text-sm italic">
                  This is the count of total active students signed up.
                </p>
              </div>

              <div className="rounded-lg h-36 flex bg-[#fad8d8] flex-col gap-4 px-5 justify-center items-center shadow-md border">
                <div className="flex flex-row items-center gap-3">
                  <i
                    className="fa-solid fa-person-chalkboard text-xl"
                    style={{ color: "#1f4551" }}
                  ></i>
                  <h1 className="font-bold text-lg">
                    Total instructors: {data?.instructorCount}
                  </h1>
                </div>
                <p className="text-center text-sm italic">
                  This is the total number of active instructors joined so far.
                </p>
              </div>

              <div className="rounded-lg h-36 flex flex-col bg-[#dae9ff] gap-4 px-5 justify-center items-center shadow-md border">
                <div className="flex flex-row items-center gap-3">
                  <i
                    className="fa-solid fa-book text-xl"
                    style={{ color: "#1f4551" }}
                  ></i>
                  <h1 className="font-bold text-lg">
                    Total Courses: {data?.courseCount}
                  </h1>
                </div>
                <p className="text-center text-sm italic">
                  This number indicates the total number of courses created by
                  instructor. The count takes only the courses that approved by
                  the admin.
                </p>
              </div>

              <div className="rounded-lg h-36 flex flex-col bg-[#feffd7] gap-4 px-5 justify-center items-center shadow-md border">
                <div className="flex flex-row items-center gap-3">
                  <i
                    className="fa-solid fa-chart-line text-xl"
                    style={{ color: "#1f4551" }}
                  ></i>
                  <h1 className="font-bold text-lg">
                    Total revenue: {data?.totalRevenue}
                  </h1>
                </div>
                <p className="text-center text-sm italic">
                  The revenue indicates the total amount gained by the website
                  throught the students enrollment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
