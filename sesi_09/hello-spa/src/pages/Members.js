import React from "react";
import { Link, Outlet } from "react-router-dom";


function Member() {
  return (
    <>
      <h1>Member Page</h1>
      <p>Select a member to be shown</p>
      <Link to="Annisa">Annisa Mufidah</Link> | {" "}
      <Link to="Shanum Agnia">Shanum Agnia</Link> {" "}
      <Outlet />
    </>
  );
}

export default Member

