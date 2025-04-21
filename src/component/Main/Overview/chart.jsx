/* eslint-disable react/prop-types */
import { DatePicker } from "antd";
import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 5000 },
  { month: "Feb", income: 4000 },
  { month: "Mar", income: 7000 },
  { month: "Apr", income: 8000 },
  { month: "May", income: 9000 },
  { month: "Jun", income: 10000 },
  { month: "Jul", income: 11000 },
  { month: "Aug", income: 10000 },
  { month: "Sep", income: 9000 },
  { month: "Oct", income: 14000 },
  { month: "Nov", income: 15000 },
  { month: "Dec", income: 16000 }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-2 border border-gray-300 rounded shadow-lg">
        <p className="label font-semibold">{`Month: ${label}`}</p>
        <p className="intro">{`Total Income: $${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }

  return null;
};

const IncomeGraphChart = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full col-span-full lg:col-span-4 bg-white  rounded-lg  py-3">
     
      
      <ResponsiveContainer className="pr-4" width="100%" height={210}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            bottom: 5, 
          }}
          className="md:mt-5  md:mb-5" 
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="income" barSize={20} fill="#C2F84D" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default IncomeGraphChart;