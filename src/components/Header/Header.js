import React from "react";
import { NavbarBrand, Navbar } from "reactstrap";

//create function to hold the header
const Header = () => {
  return (
    <div className="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"> KANYE WEST API </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
