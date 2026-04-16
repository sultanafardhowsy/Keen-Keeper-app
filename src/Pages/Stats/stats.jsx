import { useContext, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { FreindContext } from "../../Context/freindContext";

const COLORS = {
  call: "#00C49F",
  text: "#FFBB28",
  video: "#0088FE",
};

const Stats = () => {
  const { freindsData } = useContext(FreindContext);

 
const chartData = useMemo(() => {
  const types = ["call", "text", "video"];

  const grouped = freindsData.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  return types.map((type) => ({
    name: type,
    value: grouped[type] || 0,
  }));
}, [freindsData]);

  const total = freindsData.length;

  return (
    <div>
    <div className="flex justify-center mt-10">
      <PieChart width={420} height={400}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          innerRadius={70}
          outerRadius={120}
          paddingAngle={5}
          cornerRadius={10}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {chartData.map((entry, index) => (
            <Cell key={index} fill={COLORS[entry.name]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />

        {/* Center total */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xl font-bold"
        >
          {total}
        </text>
      </PieChart>
    </div>
    
    </div>
  );
};

export default Stats;