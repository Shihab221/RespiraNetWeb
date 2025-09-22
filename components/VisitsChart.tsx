"use client";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

type VisitData = {
  date: string;
  visits: number;
};

const VisitsChart = ({ data }: { data: VisitData[] }) => {
  return (
    <div className="w-full h-96 p-4 bg-[#0d1225] rounded-2xl  py-10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          
          <XAxis dataKey="date" stroke="#2cc8e3" />
          <YAxis stroke="#2cc8e3" />
          <Tooltip />
          <Line type="monotone" dataKey="visits" stroke="#2cc8e3" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitsChart;
