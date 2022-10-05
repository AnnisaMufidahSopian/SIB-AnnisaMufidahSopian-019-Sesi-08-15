import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";
import './users.css'

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
     <Link
        className="btn btn-success"
        role="button"
        to="/"
      >
        Back to Home
      </Link>

      <div className="table">
      <Table striped bordered hover>
        <thead className="title">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      </div>
  );
}
