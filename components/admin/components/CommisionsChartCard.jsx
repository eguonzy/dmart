import React, { useState } from "react";

function CommisionsChartCard({
  ResponsiveContainer,
  AreaChart,
  weekData,
  monthData,
  Label,
  Legend,
  annualData,
  dailyData,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Line,
  Area,
}) {
  const [key, setKey] = useState(3);
  const handleCommissions = (e, key) => {
    let list = document.getElementsByClassName("active");
    for (const i of list) {
      i.classList.remove("active");
    }
    e.target.classList.add("active");
    setKey(key);
  };
  return (
    <>
      <div className="commission-card">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={
              key === 0
                ? weekData
                : key === 1
                ? monthData
                : key === 2
                ? annualData
                : dailyData
            }
            margin={{
              top: 0,
              right: 0,
              left: 5,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis
              dataKey={
                key === 0
                  ? "Week"
                  : key === 1
                  ? "Month"
                  : key === 2
                  ? "Annual"
                  : "Daily"
              }
              strokeWidth={0}
            />
            <XAxis dataKey="name" strokeWidth={0} />
            <Label />
            <CartesianGrid x="1" vertical={false} strokeDasharray="1" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={"Daily Visitors and such"}
              stroke="#8884d8"
            />

            <Area
              type="monotone"
              dataKey={
                key === 0
                  ? "Week"
                  : key === 1
                  ? "Month"
                  : key === 2
                  ? "Annual"
                  : "Daily"
              }
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="commission-options">
        <p className="active" onClick={(e) => handleCommissions(e, 3)}>
          Day
        </p>
        <p onClick={(e) => handleCommissions(e, 0)}>Week</p>
        <p onClick={(e) => handleCommissions(e, 1)}>Month</p>
        <p onClick={(e) => handleCommissions(e, 2)}>Year</p>
      </div>
    </>
  );
}

export default CommisionsChartCard;
