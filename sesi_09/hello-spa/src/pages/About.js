import React from "react";
import { Link, Outlet } from "react-router-dom";


function About() {
  return (
    <>
      <h1>About Me</h1>
      <p>This is Annisa's About Me Page</p>
      <Link to="about-study">About Study</Link> | {" "}
      <Link to="about-me">About Me</Link> {" "}
      <Outlet />
    </>
  );
}

export default About