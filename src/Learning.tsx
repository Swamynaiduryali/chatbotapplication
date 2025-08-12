import React from 'react'

export const Learning = () => {
  return (
    <div className="flex gap-2 bg-gray-200 h-40">
        <div className="bg-blue-300 text-white p-2 w-48">Box 1</div>
        <div className="bg-green-300 text-white p-2 flex-1 flex-shrink-0">Box 2
            wertyuioqwertyuioplkjvcxsertyuiytrfhjkmnbredfghjbvfrtyujbvcdrt
        </div>
        <div className="bg-orange-300 text-white p-2 w-48">Box 3</div>
    </div>
  )
}



// // === src/index.css ===
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// /* Optional: Customize scrollbars, fonts, etc. */


// // === src/index.tsx ===
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// // === src/App.tsx ===
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Index } from "./components/Index";
// import { Home } from "./components/Home";
// import { Global } from "./components/Global";
// import { Grid } from "./components/Grid";
// import { Lines } from "./components/Lines";
// import { Settings } from "./components/Settings";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Index />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/global" element={<Global />} />
//         <Route path="/grid" element={<Grid />} />
//         <Route path="/lines" element={<Lines />} />
//         <Route path="/settings" element={<Settings />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// // === src/components/Index.tsx ===
// import React, { useState } from "react";
// import { Icon } from "@iconify/react";
// import { useNavigate } from "react-router-dom";

// interface MenuItem {
//   label: string;
//   icon: string;
//   path: string;
// }

// export const Index: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const navigate = useNavigate();

//   const menuItems: MenuItem[] = [
//     { label: "Home", icon: "lucide:house", path: "/home" },
//     { label: "Global", icon: "ph:globe-hemisphere-west-light", path: "/global" },
//     { label: "Grid", icon: "bi:grid-1x2", path: "/grid" },
//     { label: "Lines", icon: "fa6-solid:lines-leaning", path: "/lines" },
//     { label: "Settings", icon: "ic:outline-settings", path: "/settings" },
//   ];

//   const handleToggle = () => setCollapsed(prev => !prev);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div
//         className={`flex flex-col ${
//           collapsed ? "w-20" : "w-64"
//         } h-full bg-gray-800 gap-4 p-3 transition-all duration-300`}
//       >
//         <button
//           onClick={handleToggle}
//           className="flex justify-center items-center mb-6 mt-4"
//         >
//           <Icon icon="ph:hexagon-bold" className="text-white h-10 w-10" />
//         </button>

//         {menuItems.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(item.path)}
//             className="flex items-center gap-3 text-white cursor-pointer hover:bg-gray-700 p-2 rounded-md"
//           >
//             <Icon icon={item.icon} className="text-2xl" />
//             {!collapsed && <span>{item.label}</span>}
//           </div>
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col justify-center items-center h-full w-full bg-gray-900 gap-4">
//         <h1 className="text-white text-3xl">Good Morning, James</h1>
//         <div className="flex items-center px-2 bg-gray-700 rounded-xl w-1/2">
//           <input
//             type="text"
//             placeholder="Ask the chatbot..."
//             className="flex-1 bg-transparent p-3 text-white focus:outline-none"
//           />
//           <button className="text-green-300 px-3 border-2 border-green-300 rounded-lg p-1 h-10 w-10">
//             <Icon icon="iconoir:send" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// // === src/components/Home.tsx ===
// export const Home: React.FC = () => (
//   <div className="text-white text-2xl p-4">🏠 Home Page</div>
// );

// // === src/components/Global.tsx ===
// export const Global: React.FC = () => (
//   <div className="text-white text-2xl p-4">🌍 Global Page</div>
// );

// // === src/components/Grid.tsx ===
// export const Grid: React.FC = () => (
//   <div className="text-white text-2xl p-4">🔲 Grid Page</div>
// );

// // === src/components/Lines.tsx ===
// export const Lines: React.FC = () => (
//   <div className="text-white text-2xl p-4">📈 Lines Page</div>
// );

// // === src/components/Settings.tsx ===
// export const Settings: React.FC = () => (
//   <div className="text-white text-2xl p-4">⚙️ Settings Page</div>
// );
