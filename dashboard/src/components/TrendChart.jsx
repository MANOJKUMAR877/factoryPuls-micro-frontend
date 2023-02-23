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

const TrendChart = ({ aggregatedData = [] }) => {
  return (
    <>
      <div className="">
        <ResponsiveContainer width={"71%"} height={400}>
          <LineChart data={aggregatedData}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />

            <Line type="monotone" dataKey="aggregation" stroke="#888" />
            <Line type="monotone" dataKey="product" stroke="#888" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TrendChart;
