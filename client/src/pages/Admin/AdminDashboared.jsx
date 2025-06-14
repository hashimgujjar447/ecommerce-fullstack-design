// src/pages/Admin/AdminLayout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
  const links = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Listed Products", path: "/admin/listedProducts" },
    { name: "Add New Product", path: "/admin/addNewProduct" },
  ];

  return (
    <div className="flex sm:px-11">
      {/* Sidebar */}
      <div className="md:w-64 w-16 border-r h-screen text-base border-gray-300 pt-4 flex flex-col">
        {links.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex items-center py-3 px-4 gap-3 ${
                isActive
                  ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-[#155dfc] text-indigo-500"
                  : "hover:bg-gray-100/90 text-gray-700"
              }`
            }
          >
            <span className="md:block hidden">{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Main content */}
      <div className=" px-6 flex ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
