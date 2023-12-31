import AreaChart from "../../components/AreaChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import ChartBox from "../../components/chartBox";
import TopBox from "../../components/topBox";
import {
  TotalUser,
  Products,
  Revenue,
  Conversion,
  Visit,
  BoxRevenue,
} from "../../data";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...TotalUser} />
      </div>
      <div className="box box3">
        <ChartBox {...Products} />
      </div>
      <div className="box box4">
        <PieChart />
      </div>
      <div className="box box5">
        <ChartBox {...Conversion} />
      </div>
      <div className="box box6">
        <ChartBox {...Revenue} />
      </div>
      <div className="box box7">
        <AreaChart />
      </div>
      <div className="box box8">
        <BarChart {...Visit} />
      </div>
      <div className="box box9">
        <BarChart {...BoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
