import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
 
  ResponsiveContainer,
} from "recharts";

const ReChartLineChart = ({ aggregatedData = [] }) => {
  return (
    <>
      <div className=" ">
        <ResponsiveContainer width={"60%"} height={400}>
          <LineChart data={aggregatedData}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />

            <Line type="monotone" dataKey="scans" stroke="#888" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ReChartLineChart;
