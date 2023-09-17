import { RouterProvider } from "react-router-dom";
import route from "./routes/Routes";
import "./styles/global.scss";

function App() {
  return (
    <RouterProvider router={route} fallbackElement={<>Base Name error</>} />
  );
}

export default App;
