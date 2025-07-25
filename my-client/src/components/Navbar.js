// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import '../style/Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/add" className={({ isActive }) => isActive ? "active" : ""}>Add</NavLink>
      <NavLink to="/update" className={({ isActive }) => isActive ? "active" : ""}>Update</NavLink>
      <NavLink to="/delete" className={({ isActive }) => isActive ? "active" : ""}>Delete</NavLink>
      <NavLink to="/find" className={({ isActive }) => isActive ? "active" : ""}>Find</NavLink>
      <NavLink to="/findall" className={({ isActive }) => isActive ? "active" : ""}>Find All</NavLink>
    </nav>
  );
}
