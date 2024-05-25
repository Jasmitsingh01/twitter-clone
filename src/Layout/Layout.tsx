import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function Layout() {
  return (
    <div className="flex  bg-gray-200 min-h-screen max-h-screen justify-center">
      <div className=" bg-white max-h-screen">
        <SideBar />
      </div>

      <div className=" bg-white  w-1/2 overflow-auto no-scrollbar">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
