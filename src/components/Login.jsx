import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import loginBanner from "../assets/images/Hisa-Africas-Mathu.png";
import { setSession } from '../pages/services/SessionManager';
import Requests from '../pages/services/Requests';
import Footer from "./footer";



const Login = () => {

    return (
        <>
            <div className="content top-space pt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="account-content">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-7 col-lg-6 login-left">
                                        <img
                                            src={loginBanner}
                                            className="img-fluid"
                                            alt="dashboard-login"
                                        />
                                    </div>
                                    <div className="col-md-12 col-lg-6 login-right">
                                        <div className="login-header">
                                            <h3>
                                                Login <span>Hisa App Dashboard</span>
                                            </h3>
                                        </div>
                                        <form
                                            onSubmit={handleLogin}>
                                            <div className="form-group form-focus">
                                                <input
                                                    type="email"
                                                    className="form-control floating"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <label className="focus-label">Email</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input
                                                    type="password"
                                                    className="form-control floating"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Enter your password"
                                                />
                                                <label className="focus-label">Password</label>
                                            </div>
                                            <button
                                                className="btn dashboard-login-btn w-100 btn-lg login-btn"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                            <div className="login-or">
                                                <span className="or-line" />
                                                <span className="span-or">or</span>
                                            </div>
                                            <div className="text-center dont-have">
                                                Don’t have an account?{" "}
                                                <Link to="#">Register</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    );
}

export default Login;
