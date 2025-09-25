import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";  // using Bar instead of Line
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalAnalyticsChart = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTotalAnalytics = async () => {
      try {
        const token = localStorage.getItem("token");

        // calculate last 30 days dynamically
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 30);

        const formatDate = (date) => date.toISOString().split("T")[0];

        const response = await axios.get(
          `https://shortify-platform-2.onrender.com/api/urls/totalClicks?startDate=${formatDate(
            startDate
          )}&endDate=${formatDate(endDate)}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("Total Analytics Response:", response.data);
        setData(response.data);
      } catch (err) {
        console.error("Error fetching total analytics:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTotalAnalytics();
  }, []);

  if (loading) return <div>Loading total analytics...</div>;
  if (!data || Object.keys(data).length === 0)
    return <div>No analytics data available</div>;

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Total Clicks",
        data: Object.values(data),
        backgroundColor: "rgba(147, 51, 234, 0.6)", // purple bars
        borderColor: "#9333ea",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Total Clicks Analytics (Last 30 Days)" },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default TotalAnalyticsChart;
