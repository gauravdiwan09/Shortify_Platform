import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
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

const AnalyticsChart = ({ shortUrl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem("token");

        // calculate last 30 days
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 30);

        const formatDateTime = (date, endOfDay = false) => {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          return `${year}-${month}-${day}T${endOfDay ? "23:59:59" : "00:00:00"}`;
        };

        const response = await axios.get(
          `https://shortify-platform-2.onrender.com/api/urls/analytics/${shortUrl}?startDate=${formatDateTime(
            startDate
          )}&endDate=${formatDateTime(endDate, true)}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (err) {
        console.error("Error fetching analytics:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, [shortUrl]);

  if (loading) return <div>Loading chart...</div>;

  if (!data || data.length === 0) return <div>No analytics data available</div>;

  const chartData = {
    labels: data.map((item) => item.clickDate),
    datasets: [
      {
        label: "Clicks",
        data: data.map((item) => item.count),
        backgroundColor: "rgba(51, 100, 247, 0.6)",
        borderColor: "#3364F7",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "URL Click Analytics (Last 30 Days)" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default AnalyticsChart;
