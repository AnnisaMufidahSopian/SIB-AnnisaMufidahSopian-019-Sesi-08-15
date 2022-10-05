import React from "react";
import {Link} from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <div className="container">
      <h1>Why do we need Test?</h1>
      <p>Hello, welcome to home page</p>
      <p>This is Annisa's Home Page</p>
      <p>To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself</p>
      <Link
        className="btn btn-primary"
        role="button"
        to="/users"
      >
        Users List
      </Link>
    </div>
  );
}

export default Home;
