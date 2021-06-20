import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Label,
  PieChart,
  Tooltip,
  Legend,
  Pie,
} from "recharts";
import ChartCard from "./components/ChartCard";
import CommisionsChartCard from "./components/CommisionsChartCard";
import MiniCard from "./components/MiniCard";

const data = [
  {
    name: "0:00",
    "Daily Visitors": 2400,
  },
  {
    name: "1:00",

    "Daily Visitors": 1398,
  },
  {
    name: "2:00",
    "Daily Visitors": 9800,
  },
  {
    name: "3:00",
    "Daily Visitors": 3908,
  },
  {
    name: "4:00",
    "Daily Visitors": 480,
  },
  {
    name: "5:00",
    "Daily Visitors": 3200,
  },
  {
    name: "6:00",
    "Daily Visitors": 4100,
  },
  {
    name: "7:00",
    "Daily Visitors": 4400,
  },
  {
    name: "8:00",
    "Daily Visitors": 4700,
  },
  {
    name: "9:00",
    "Daily Visitors": 400,
  },
  {
    name: "10:00",
    "Daily Visitors": 6300,
  },
  {
    name: "11:00",
    "Daily Visitors": 1300,
  },
  {
    name: "12:00",
    "Daily Visitors": 3300,
  },
  {
    name: "13:00",
    "Daily Visitors": 2300,
  },
  {
    name: "14:00",
    "Daily Visitors": 6300,
  },
  {
    name: "15:00",
    "Daily Visitors": 8300,
  },
  {
    name: "16:00",
    "Daily Visitors": 8300,
  },
  {
    name: "17:00",
    "Daily Visitors": 9300,
  },
  {
    name: "18:00",
    "Daily Visitors": 9800,
  },
  {
    name: "19:00",
    "Daily Visitors": 2300,
  },
  {
    name: "20:00",
    "Daily Visitors": 1400,
  },
  {
    name: "21:00",
    "Daily Visitors": 2500,
  },
  {
    name: "22:00",
    "Daily Visitors": 7600,
  },
  {
    name: "23:00",

    "Daily Visitors": 8900,
  },
  {
    name: "24:00",
    "Daily Visitors": 3200,
  },
];
const dailyData = [
  {
    name: "0:00",
    Daily: 2400,
  },
  {
    name: "1:00",

    Daily: 1398,
  },
  {
    name: "2:00",
    Daily: 9800,
  },
  {
    name: "3:00",
    Daily: 3908,
  },
  {
    name: "4:00",
    Daily: 480,
  },
  {
    name: "5:00",
    Daily: 3200,
  },
  {
    name: "6:00",
    Daily: 4100,
  },
  {
    name: "7:00",
    Daily: 4400,
  },
  {
    name: "8:00",
    Daily: 4700,
  },
  {
    name: "9:00",
    Daily: 400,
  },
  {
    name: "10:00",
    Daily: 6300,
  },
  {
    name: "11:00",
    Daily: 1300,
  },
  {
    name: "12:00",
    Daily: 3300,
  },
  {
    name: "13:00",
    Daily: 2300,
  },
  {
    name: "14:00",
    Daily: 6300,
  },
  {
    name: "15:00",
    Daily: 8300,
  },
  {
    name: "16:00",
    Daily: 8300,
  },
  {
    name: "17:00",
    Daily: 9300,
  },
  {
    name: "18:00",
    Daily: 9800,
  },
  {
    name: "19:00",
    Daily: 2300,
  },
  {
    name: "20:00",
    Daily: 1400,
  },
  {
    name: "21:00",
    Daily: 2500,
  },
  {
    name: "22:00",
    Daily: 7600,
  },
  {
    name: "23:00",

    Daily: 8900,
  },
  {
    name: "24:00",
    Daily: 3200,
  },
];
const annualData = [
  { name: "JAN", Annual: 100 },
  { name: "FEB", Annual: 2200 },
  { name: "MAR", Annual: 3020 },
  { name: "APR", Annual: 2400 },
  { name: "MAY", Annual: 5002 },
  { name: "JUN", Annual: 6020 },
  { name: "JUL", Annual: 2700 },
  { name: "AUG", Annual: 8200 },
  { name: "SEP", Annual: 2900 },
  { name: "OCT", Annual: 21000 },
  { name: "NOV", Annual: 11002 },
  { name: "DEC", Annual: 120220 },
];
const customerData = [
  { name: "JAN", Customers: 100 },
  { name: "FEB", Customers: 2200 },
  { name: "MAR", Customers: 3020 },
  { name: "APR", Customers: 2400 },
  { name: "MAY", Customers: 5002 },
  { name: "JUN", Customers: 6020 },
  { name: "JUL", Customers: 2700 },
  { name: "AUG", Customers: 8200 },
  { name: "SEP", Customers: 2900 },
  { name: "OCT", Customers: 21000 },
  { name: "NOV", Customers: 11002 },
  { name: "DEC", Customers: 120220 },
];
const monthData = [
  { name: "week 1", Month: 123200 },
  { name: "week 2", Month: 223200 },
  { name: "week 3", Month: 30220 },
  { name: "week 4", Month: 402220 },
];
const weekData = [
  { name: "Mon", Week: 123200 },
  { name: "Tue", Week: 223200 },
  { name: "Wed", Week: 30220 },
  { name: "Thur", Week: 402220 },
  { name: "Fri", Week: 4202220 },
  { name: "Sat", Week: 4102220 },
  { name: "Sun", Week: 2220 },
];

const merchantData = [
  { name: "JAN", Customers: 100, fill: "red" },
  { name: "FEB", Customers: 200, fill: "orange" },
  { name: "MAR", Customers: 300, fill: "yellow" },
  { name: "APR", Customers: 400, fill: "green" },
  { name: "MAY", Customers: 500, fill: "blue" },
  { name: "JUN", Customers: 600, fill: "indigo" },
  { name: "JUL", Customers: 700, fill: "violet" },
  { name: "AUG", Customers: 800, fill: "pink" },
  { name: "SEP", Customers: 900, fill: "gold" },
  { name: "OCT", Customers: 1000, fill: "skyblue" },
  { name: "NOV", Customers: 1100, fill: "rebeccapurple" },
  { name: "DEC", Customers: 1200, fill: "darkred" },
];
function AdminHome(props) {
  // const data = [{ name: "Page A", uv: 400, "Daily Visitors": 2400, amt: 2400 }];
  return (
    <>
      <div className="admin-home-con">
        <ChartCard
          ResponsiveContainer={ResponsiveContainer}
          Label={Label}
          XAxis={XAxis}
          YAxis={YAxis}
          Area={Area}
          AreaChart={AreaChart}
          CartesianGrid={CartesianGrid}
          Tooltip={Tooltip}
          Legend={Legend}
          data={data}
          Line={Line}
          xLabel="Daily Visitors"
        />

        <ChartCard
          ResponsiveContainer={ResponsiveContainer}
          Label={Label}
          XAxis={XAxis}
          YAxis={YAxis}
          Area={Area}
          AreaChart={AreaChart}
          CartesianGrid={CartesianGrid}
          Tooltip={Tooltip}
          Legend={Legend}
          data={customerData}
          Line={Line}
          xLabel="Customers"
        />
        <ChartCard
          ResponsiveContainer={ResponsiveContainer}
          Label={Label}
          XAxis={XAxis}
          YAxis={YAxis}
          Area={Area}
          AreaChart={AreaChart}
          CartesianGrid={CartesianGrid}
          Tooltip={Tooltip}
          Legend={Legend}
          data={merchantData}
          Pie={Pie}
          PieChart={PieChart}
          xLabel="Customers"
        />
        <CommisionsChartCard
          ResponsiveContainer={ResponsiveContainer}
          AreaChart={AreaChart}
          weekData={weekData}
          monthData={monthData}
          Label={Label}
          Legend={Legend}
          annualData={annualData}
          dailyData={dailyData}
          CartesianGrid={CartesianGrid}
          YAxis={YAxis}
          XAxis={XAxis}
          Tooltip={Tooltip}
          Line={Line}
          Area={Area}
        />
        <div className="mini-cards-con">
          <MiniCard title="Merchants Online" count={20} />
          <MiniCard title="Customers Online" count={50} />
          <MiniCard title="Visitors" count={10} />
        </div>
      </div>
    </>
  );
}

export default AdminHome;
