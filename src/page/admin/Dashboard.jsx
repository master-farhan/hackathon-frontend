import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Users", value: 12 },
    { name: "Orders", value: 3 },
    { name: "Products", value: 8 },
    { name: "Revenue", value: 2150 },
  ];

  return (
    <div className="text-dark-brown">
      <h1 className="text-2xl lg:text-[2vw] font-bold mb-6 lg:mb-[2vw]">Admin Dashboard (Dummy)</h1>

      <div className="w-full h-[300px] lg:h-[60vh] bg-milk rounded-lg shadow-lg text-base lg:text-[1.2vw]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#de2138" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
