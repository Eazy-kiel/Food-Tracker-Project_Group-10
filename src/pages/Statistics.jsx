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
    <div className="py-8 px-4 bg-white">
      <h2 className="text-3xl">Statistics</h2>
      <div className="mt-7 mb-3">
      <p className="text-2xl mt-3 mb-3">PieChart</p>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={200} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
 <div>
 <p className="text-2xl mt-3 mb-3">BarChart</p>
      <div className="w-3/4 flex justify-center">
        <ResponsiveContainer width="100%" height={800}>
          <BarChart data={data.barChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="itemName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  );
};

export default Statistics;
