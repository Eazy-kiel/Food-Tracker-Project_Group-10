<<<<<<< HEAD
=======
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUser = sessionStorage.getItem('currentUser');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`https://freshtrackapi.onrender.com/api/statistics/${currentUser}`);
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching statistics:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //uncomment this out to use backend data
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = {
          pieChart: { expired: 15, active: 85 },
          lineChart: [
            { date: "2024-09-01", value: 20 },
            { date: "2024-09-02", value: 35 },
            { date: "2024-09-03", value: 50 },
            { date: "2024-09-04", value: 40 }
          ],
          barChart: [
            { itemName: "Product A", count: 120 },
            { itemName: "Product B", count: 90 },
            { itemName: "Product C", count: 60 }
          ]
        };
        setData(result);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading statistics...</p>;
  if (!data) return <p>Error loading data</p>;
  const pieData = [
    { name: "Expired", value: data.pieChart.expired },
    { name: "Active", value: data.pieChart.active },
  ];

  const COLORS = ["#d93125", "#8884d8"]; 

  return (
>>>>>>> 893cea773ce31b664a18e4a40a65fbbbe7cbf268
