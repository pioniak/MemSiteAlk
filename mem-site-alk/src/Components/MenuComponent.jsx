import { NavLink } from "react-router-dom";

const MenuComponent = () => {
  return (
    <>
      <NavLink className="NavItem" to="/hot">
        Hot 
      </NavLink>
      <NavLink className="NavItem" to="/regular">
        Regular
      </NavLink>
    </>
  );
};

export default MenuComponent;