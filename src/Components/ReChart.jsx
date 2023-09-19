import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const ReChart = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 898400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 56400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 11100, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 45500, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 1200, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 1000, pv: 2400, amt: 2400 },
  ];
  return (
    <div className="bg-blue-500">
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      </LineChart>
    </div>
  );
};

export default ReChart;
