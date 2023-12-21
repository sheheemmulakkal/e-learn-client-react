import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { EnrolledCountByCategoryAndDate } from "../../../dtos/Dashboard";
import { dashboard } from "../../../api/adminApi";

interface adminDashboardData {
  enrolledCountByCategoryAndDate: EnrolledCountByCategoryAndDate[];
  totalRevenue: number;
}

const LineChart: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [series, setSeries] = useState<{ name: string; data: number[] }[]>([]);

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      categories: categories,
    },
  };

  const getCategoryData = async (): Promise<void> => {
    try {
      const responseData: adminDashboardData = await dashboard();
      const response = responseData.enrolledCountByCategoryAndDate;
      const uniqueDates: string[] = Array.from(
        new Set(
          response.flatMap((category) =>
            category.data.map((entry) => entry.date)
          )
        )
      );

      const dateCounts: Record<string, number> = {};

      response.forEach((category) => {
        category.data.forEach((entry) => {
          if (!dateCounts[entry.date]) {
            dateCounts[entry.date] = 0;
          }
          dateCounts[entry.date] += entry.enrolledCount;
        });
      });
      const formattedCategories: string[] = uniqueDates.map((date) => {
        const formattedDate = new Date(date).toLocaleString("default", {
          month: "short",
          day: "numeric",
        });
        return formattedDate;
      });

      setCategories(formattedCategories);
      const formattedSeries = response.map((category) => ({
        name: category.categoryDetails[0].category,
        data: uniqueDates.map((date) => {
          const matchingEntry = category.data.find(
            (entry) => entry.date === date
          );
          return matchingEntry ? matchingEntry.enrolledCount : 0;
        }),
      }));

      setSeries(formattedSeries);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  useEffect(() => {}, [series]);

  return (
    <ReactApexChart
      type="line"
      options={options}
      series={series}
      height={350}
    />
  );
};

export default LineChart;
