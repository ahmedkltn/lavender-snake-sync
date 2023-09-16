import { Sidebar } from "flowbite-react";
import { ArrowLeftCircleIcon, HomeIcon, CalendarIcon } from "@heroicons/react/24/outline";
export function LeftSidebar() {
  return (
    <Sidebar className="h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup >
          <Sidebar.Item href="#" icon={HomeIcon}>
            <p>Home</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={CalendarIcon}>
            <p>events</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={ArrowLeftCircleIcon}>
            <p>Logout</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
