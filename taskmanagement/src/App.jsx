import "./index.css";

import MainRoutes from "./Routes/MainRoutes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="flex app overflow-hidden bg-[#1f3344]  ">
        <Navbar />
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
