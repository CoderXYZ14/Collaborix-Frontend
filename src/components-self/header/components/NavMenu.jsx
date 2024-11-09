import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const navItemClasses = ({ isActive }) =>
    `block py-2 px-3 duration-200 text-sm font-medium rounded-lg ${
      isActive
        ? "text-white bg-white/10 font-semibold"
        : "text-gray-100 hover:text-white"
    } hover:bg-white/5 transition-all`;

  return (
    <ul className="flex items-center justify-between font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      <li>
        <NavLink to="/" className={navItemClasses}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/problemset" className={navItemClasses}>
          Problems
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;
