
import {ToastContainer} from "react-toastify";

import React from 'react';
import axios from "axios";

const Login = () => {
    const login = () => {
        axios.post("http://localhost:8055/auth/login", {
            "email": "admin@example.com",
            "password": "password"
        })
            .then(res =>{
                localStorage.setItem("Authorization", res.data.data.access_token)
            })


    }
    return (
        <div className="login">
            <div className="row">
                <div className="col-md-5">
                    <img src="/img/illus.png" alt=""/>
                </div>
                <div className="col-md-7">

                    <div className="loginCard">
                        <h3>Get more things done with Loggin platform.</h3>
                        <p>Access to the most powerfull tool in the entire design and web industry.</p>
                            <input
                                name="username"
                                placeholder="Username"
                                type="text"
                                required
                                className="form-control"
                            />

                            <input
                                name="password"
                                placeholder="Password"
                                type="password"
                                required
                                className="form-control mt-2"

                            />


                            <button type='submit' onClick={login}  className='btn btn-primary mt-4 ml-auto d-block pl-4 pr-4'>  Login</button>
                    </div>
                </div>
            </div>


            <ToastContainer/>
        </div>
    );
};

export default Login;