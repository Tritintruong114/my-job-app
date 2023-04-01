import { Outlet } from "react-router";
import HeaderNav from "./components/HeaderNav";
import Pagination from "./components/Pagination";
import InfoCard from "./pages/InfoJobs";

function App() {
  return (
    <div className="bg-secondary xl:h-screen md:h-screen sm:h-screen h-screen flex flex-col items-center">
      <HeaderNav />
      <div className="w-full h-full">
        {/* <InfoCard />
        <Pagination /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
