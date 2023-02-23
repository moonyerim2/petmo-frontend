import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components";

function NavigationOutlet() {
  return (
    <>
      <Outlet />
      <Nav />
    </>
  );
}

export default NavigationOutlet;
