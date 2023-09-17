import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { IconType } from "react-icons";

type Props = {
  title: string;
  icon: IconType;
  chartData: object[];
  color: string;
  dataKey: string;
  number: number | string;
  percentage: number;
};

const ChartBox = (props: Props) => {
  const { title, icon: Icon, chartData, dataKey, color, percentage } = props;
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <Icon />
          <span>{title}</span>
        </div>
        <h1>11.23</h1>
        <Link to={"/"} style={{ color: color }}>
          View All
        </Link>
      </div>
      <div className="chartInfo">
        <div className="charts">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 80 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}>
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
