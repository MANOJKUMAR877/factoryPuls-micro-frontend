import React, { useState } from "react";
import TrendChart from "../components/TrendChart";
import Tabs from "../components/Tabs";
const data = [
  { date: "2022-01-01", aggregation: 130, product: 27 },
  { date: "2022-02-01", aggregation: 220, product: 410 },
  { date: "2022-03-01", aggregation: 30, product: 389 },
  { date: "2022-04-01", aggregation: 140, product: 18 },
  { date: "2022-05-01", aggregation: 320, product: 127 },
  { date: "2022-06-01", aggregation: 160, product: 77 },
  { date: "2022-07-01", aggregation: 340, product: 38 },
  { date: "2022-08-01", aggregation: 460, product: 70 },
  { date: "2022-09-01", aggregation: 450, product: 44 },
  { date: "2022-10-01", aggregation: 57, product: 67 },
  { date: "2022-11-01", aggregation: 88, product: 89 },
  { date: "2022-12-01", aggregation: 120, product: 217 },
];
export default function Dashboard() {
  const tabs = [
    { name: "1 year", current: true },
    { name: "6 months", current: false },
    { name: "3 months", current: false },
  ];

  const [interval, setInterval] = useState("1 year");
  const [aggregatedData, setAggregatedData] = useState(data);

  const handleIntervalChange = (newInterval) => {
    setInterval(newInterval);
    if (newInterval === "1 year") {
      setAggregatedData(data);
    } else if (newInterval === "1 month") {
      return data;
    } else if (newInterval === "3 months") {
      // group data by quarters
      const quarters = {};
      data.forEach((item) => {
        const quarter = Math.ceil(new Date(item.date).getMonth() / 3);
        if (quarters[quarter]) {
          quarters[quarter].aggregation += item.aggregation;
          quarters[quarter].product += item.product;
        } else {
          quarters[quarter] = {
            date: `${quarter}Q`,
            aggregation: item.aggregation,
            product: item.product,
          };
        }
      });
      return setAggregatedData(Object.values(quarters));
    } else if (newInterval === "6 months") {
      // group data by half year
      const halfYears = {};
      data.forEach((item) => {
        const halfYear = Math.ceil(new Date(item.date).getMonth() / 6);
        if (halfYears[halfYear]) {
          halfYears[halfYear].aggregation += item.aggregation;
          halfYears[halfYear].product += item.product;
        } else {
          halfYears[halfYear] = {
            date: `${halfYear}H`,
            aggregation: item.aggregation,
            product: item.product,
          };
        }
      });
      return setAggregatedData(Object.values(halfYears));
    } else {
      return data;
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen bg-gray-900">
      <div className="mb-10">
        <Tabs
          handleIntervalChange={handleIntervalChange}
          tabs={tabs}
          interval={interval}
        />
      </div>
      <div>
        <TrendChart aggregatedData={aggregatedData} />
      </div>
    </div>
  );
}
