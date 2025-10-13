import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", hires: 12 },
  { month: "Feb", hires: 18 },
  { month: "Mar", hires: 25 },
  { month: "Apr", hires: 20 },
  { month: "May", hires: 27 },
  { month: "Jun", hires: 22 },
  { month: "Jul", hires: 30 },
  { month: "Aug", hires: 25 },
  { month: "Sep", hires: 29 },
  { month: "Oct", hires: 33 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-teal-400">
        Monthly Hires Trend
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              borderRadius: "8px",
              border: "none",
            }}
            labelStyle={{ color: "#10b981" }}
          />
          <Line
            type="monotone"
            dataKey="hires"
            stroke="#14b8a6"
            strokeWidth={3}
            dot={{ fill: "#10b981", strokeWidth: 2, r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
