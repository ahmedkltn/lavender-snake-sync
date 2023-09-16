import { DashNavbar } from "../components/DashNavbar";
import { Home } from "../components/Home";
import { LeftSidebar } from "../components/LeftSidebar";

export const Dashboard = () => {
  return (
    <div className="h-screen flex flex-row dark:bg-gray-700">
      <LeftSidebar />
      <div className="w-full flex flex-col">
        <DashNavbar />
        <Home />
      </div>
    </div>
  );
};
