import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";

interface MenuItem {
  label: string;
  icon: string;
  path: string;
}

export const Index: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { label: "Home", icon: "mdi:home", path: "/home" },
    { label: "HomePage", icon: "mdi:home-circle", path: "/homepage" },
    { label: "List", icon: "ph:list", path: "/list" },
    { label: "Global", icon: "ph:globe-hemisphere-west-light", path: "/global" },
    { label: "Grid", icon: "bi:grid-1x2", path: "/grid" },
    { label: "Lines", icon: "fa6-solid:lines-leaning", path: "/lines" },
    { label: "Settings", icon: "ic:outline-settings", path: "/settings" },
    { label: "swamy-git-learning", icon: "mdi:github-circle", path: "/swamy-git-learning" },
    { label: "marms-git-learning", icon: "mdi:github-circle", path: "/marms" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`${collapsed ? "w-20" : "w-44"} h-full bg-gray-700 gap-3 p-4`}>
        <button
          className="flex items-center justify-center mb-11 mt-5 text-white"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <Icon icon="ph:hexagon-bold" className="h-16 w-16" />
        </button>
        <div className="flex flex-col gap-y-4">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 text-white cursor-pointer hover:bg-blue-400 p-2 rounded-md"
              onClick={() => navigate(item.path)}
            >
              <Icon icon={item.icon} className="h-8 w-8" />
              {!collapsed && <span>{item.label}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-900 p-4 overflow-auto text-white">
        <Outlet />
      </div>
    </div>
  );
};
