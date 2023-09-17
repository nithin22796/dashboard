import ChartBox from "../../components/chartBox";
import TopBox from "../../components/topBox";
import { TotalUser, Products, Revenue, Conversion } from "../../data";

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
      <div className="box box4">Box4</div>
      <div className="box box5">
        <ChartBox {...Conversion} />
      </div>
      <div className="box box6">
        <ChartBox {...Revenue} />
      </div>
      <div className="box box7">Box 7</div>
      <div className="box box8">Box 8</div>
      <div className="box box9">Box 9</div>
    </div>
  );
};

export default Home;
