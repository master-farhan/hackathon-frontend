import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const adminLinks = [
  { name: "Dashboard", path: "" },
  { name: "See Orders", path: "orders" },
  { name: "Create Ice Cream", path: "create" },
  { name: "Update Ice Cream", path: "update" },
  { name: "Delete Ice Cream", path: "delete" },
];

const Admin = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/auth";
  };

  return (
    <div className="flex min-h-screen py-[20vh] px-5 lg:px-[4vw]">
      {/* Sidebar */}
      <aside className="w-[250px] bg-milk text-dark-brown space-y-4 lg:space-y-[1.4vw]">
        <h2 className="text-2xl lg:text-[1.8vw] font-bold mb-6 lg:mb-[2vw]">Admin Panel</h2>
        {adminLinks.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            end
            className={({ isActive }) =>
              `block px-4 py-2 lg:px-[1.4vw] lg:py-[.8vw] transition-all duration-150 rounded-[.3vw] ${
                isActive
                  ? "bg-primary text-milk font-semibold"
                  : "hover:bg-primary/20 text-dark-brown"
              }`
            }
          >
            {name}
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="text-sm  px-4 py-2 lg:px-[1.4vw] lg:py-[.8vw] lg:text-[1.1vw] text-primary cursor-pointer"
        >
          Logout
        </button>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 lg:p-[2vw] bg-milk">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
