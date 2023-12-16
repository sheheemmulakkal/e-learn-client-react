import LineChart from "../../components/admin/charts/LineChart";
import BarChart from "../../components/admin/charts/BarChart";
import AdminNavbar from "../../components/navbar/AdminNavbar";
function AdminDashboard() {
  // const chartData = {
  //   labels: ["January", "February", "March", "April", "May"],
  //   datasets: [
  //     {
  //       label: "Monthly Sales",
  //       data: [65, 59, 80, 81, 56],
  //       borderColor: "rgba(75,192,192,1)",
  //       backgroundColor: "rgba(75,192,192,0.2)",
  //       fill: true,
  //     },
  //   ],
  // };
  return (
    <>
      <AdminNavbar />
      <div className="flex justify-center w-full  pt-24 px-10">
        <div className="container grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <div className="flex flex-col shadow-lg px-3 border rounded-md">
            <h1 className="py-3 font-bold text-black text-lg">Total Revenue</h1>
            <LineChart />
          </div>
          <div className="flex flex-col shadow-lg px-3 border rounded-md">
            <h1 className="py-3 font-bold text-black text-lg">Total Revenue</h1>
            <BarChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
