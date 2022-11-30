import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "1월",
    지출: 100000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2월",
    지출: 500000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3월",
    지출: 20300,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4월",
    지출: 272380,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5월",
    지출: 333333,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6월",
    지출: 231290,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7월",
    지출: 123455,
    pv: 4300,
    amt: 2100,
  },
];

export default function Chart() {
  return (
    <BarChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 45,
        right: 0,
        left: 150,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="지출" fill="#3b4550" />
    </BarChart>
  );
}
