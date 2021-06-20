import React, { useEffect, useState } from "react";

function ChartCard({
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
  XAxis,
  data,
  Label,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  xLabel,
  PieChart,
  Pie,
}) {
  let total = 0;
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (Pie) {
      for (const i of data) {
        total += i.Customers;
      }

      setCount(total);
    }
  });
  return Pie ? (
    <div className="admin-home-card">
      <div className="merchants">
        <p>Merchants: {count}</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart key="Merchant">
          <Pie
            data={data}
            dataKey={xLabel}
            nameKey="name"
            outerRadius={50}
            label
            fill="fill"
            cx="50%"
            cy="50%"
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className="admin-home-card">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
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
          <YAxis dataKey={xLabel} strokeWidth={0} />
          <XAxis dataKey="name" strokeWidth={0} />
          <Label />
          <CartesianGrid x="1" vertical={false} strokeDasharray="1" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={xLabel} stroke="#8884d8" />

          <Area
            type="monotone"
            dataKey={xLabel}
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartCard;
