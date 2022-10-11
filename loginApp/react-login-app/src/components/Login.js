import React, { useState } from "react";
import './Login.css'

    

const Login = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const changeUsername = (e) => {
    const value = e.target.value
    setUsername (value)
}

const changePassword = (e) => {
    const value = e.target.value
    setPassword (value)
}

  return (
    <div style= {{marginTop: "150px"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <div className="card-body">
              <h3>Login Form</h3>
                <div className="form-group mt-5">
                  <label>Username</label>
                  <input type='text'placeholder="Username" className="form-control" value = {username} onChange={changeUsername} />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input type="password"
                  placeholder="Password" className="form-control" value = {password} onChange = {changePassword}/>
                </div>
                <button className="btn btn-primary mt-3">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
