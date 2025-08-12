import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Home } from "./Home";
import { List } from "./List";
import { Global } from "./Global";
import { Grid } from "./Grid";  
import { Lines } from "./Lines";
import { Settings } from "./Settings";

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
    { label: "List", icon: "ph:list", path: "/list" },
    {
      label: "Global",
      icon: "ph:globe-hemisphere-west-light",
      path: "/global",
    },
    { label: "Grid", icon: "bi:grid-1x2", path: "/grid" },
    { label: "Lines", icon: "fa6-solid:lines-leaning", path: "/lines" },
    { label: "Settings", icon: "ic:outline-settings", path: "/settings" },
  ];

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`flex flex-col ${
          collapsed ? "w-20" : "w-44"
        } h-full bg-gray-700 gap-3 p-4`}
      >
        <button
          className="flex items-center justify-center mb-11 mt-5 text-white"
          onClick={handleToggle}
        >
          <Icon icon="ph:hexagon-bold" className="h-16 w-16" />
        </button>

        <div className="flex flex-col gap-y-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white cursor-pointer hover:bg-blue-400 p-2 rounded-md"
              onClick={() => navigate(item.path)}
            >
              <Icon icon={item.icon} className="h-8 w-8" />
              {!collapsed && <span>{item.label}</span>}
            </div>
          ))}
        </div>
      </div>
       <div className="flex-1 bg-gray-900 p-4 overflow-auto text-white">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/global" element={<Global />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/lines" element={<Lines />} />
          <Route path="/settings" element={<Settings />} /> 
        </Routes>
      </div>
    </div>
  );
};
