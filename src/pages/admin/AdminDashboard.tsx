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
          <div className="flex flex-col shadow-lg p-5 border  text-black rounded-md">
            <div className="container grid grid-cols-2 gap-3">
              <div className="rounded-lg h-36 flex flex-col bg-[#bcffc7] gap-4 px-5 justify-center items-center shadow-md border">
                <h1 className="font-bold text-lg">
                  Total students: {data?.studentCount}
                </h1>
                <p className="text-center text-sm italic">
                  This is the count of total active students signed up.
                </p>
              </div>

              <div className="rounded-lg h-36 flex bg-[#ffbcbc] flex-col gap-4 px-5 justify-center items-center shadow-md border">
                <h1 className="font-bold text-lg">
                  Total instructors: {data?.instructorCount}
                </h1>
                <p className="text-center text-sm italic">
                  This is the total number of active instructors joined so far.
                </p>
              </div>

              <div className="rounded-lg h-36 flex flex-col bg-[#bcd7ff] gap-4 px-5 justify-center items-center shadow-md border">
                <h1 className="font-bold text-lg">
                  Total Courses: {data?.courseCount}
                </h1>
                <p className="text-center text-sm italic">
                  This number indicates the total number of courses created by
                  instructor. The count takes only the courses that approved by
                  the admin.
                </p>
              </div>

              <div className="rounded-lg h-36 flex flex-col bg-[#feffbc] gap-4 px-5 justify-center items-center shadow-md border">
                <h1 className="font-bold text-lg">
                  Total revenue: {data?.totalRevenue}
                </h1>
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
