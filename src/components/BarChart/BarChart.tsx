import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  title: string;
  chartData: object[];
  color: string;
  dataKey: string;
};

const BarCharts = (props: Props) => {
  const { title, chartData, color, dataKey } = props;
  return (
    <div className="barChart">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;
