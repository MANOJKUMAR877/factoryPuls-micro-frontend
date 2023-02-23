import React,{useState} from "react";
const TrendChart = React.lazy(() => import("dashboard/TrendChart"));
const Tabs = React.lazy(() => import("dashboard/Tabs"));
const data = [
    { date: "2022-01-01", scans: 130 },
    { date: "2022-02-01", scans: 220 },
    { date: "2022-03-01", scans: 30 },
    { date: "2022-04-01", scans: 140 },
    { date: "2022-05-01", scans: 320 },
    { date: "2022-06-01", scans: 160 },
    { date: "2022-07-01", scans: 340 },
    { date: "2022-08-01", scans: 460 },
    { date: "2022-09-01", scans: 450 },
    { date: "2022-10-01", scans: 57 },
    { date: "2022-11-01", scans: 88 },
    { date: "2022-12-01", scans: 120 },
   
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
        setInterval(newInterval)
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
              quarters[quarter].scans += item.scans;
            } else {
              quarters[quarter] = { date: `${quarter}Q`, scans: item.scans };
            }
          });
          return setAggregatedData(Object.values(quarters));
        } else if (newInterval === "6 months") {
          // group data by half year
          const halfYears = {};
          data.forEach((item) => {
            const halfYear = Math.ceil(new Date(item.date).getMonth() / 6);
            if (halfYears[halfYear]) {
              halfYears[halfYear].scans += item.scans;
            } else {
              halfYears[halfYear] = { date: `${halfYear}H`, scans: item.scans };
            }
          });
          return setAggregatedData(Object.values(halfYears));
        } else {
          return data;
        }
      };
  return (
    <div className="flex flex-col justify-center h-screen bg-gray-900">
      <div className="">
        <Tabs handleIntervalChange={handleIntervalChange} tabs={tabs} interval={interval}/>
        <TrendChart aggregatedData={aggregatedData} />
      </div>
    </div>
  );
}
