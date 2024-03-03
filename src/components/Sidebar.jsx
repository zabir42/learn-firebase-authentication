import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-col h-screen bg-gray-800 text-white p-4 w-64">
      <NavLink
        to="/"
        className={`my-2 hover:underline focus:outline-none focus:ring focus:border-blue-300 ${
          location.pathname === "/" ? "active-link" : ""
        }`}
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={`my-2 hover:underline focus:outline-none focus:ring focus:border-blue-300 ${
          location.pathname === "/login" ? "active-link" : ""
        }`}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={`my-2 hover:underline focus:outline-none focus:ring focus:border-blue-300 ${
          location.pathname === "/register" ? "active-link" : ""
        }`}
      >
        Register
      </NavLink>
    </nav>
  );
};

export default Sidebar;
