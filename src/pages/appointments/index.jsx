import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Footer from "../../components/footer";
import DoctorSidebar from "../../components/doctor-sidebar";
import loginBanner from "../../assets/images/Hisa-Africas-Mathu.png";

import Requests from "../services/Requests";

const Appointments = (props) => {
  const [show, setshow] = useState();
  const [loading, setLoading] = useState(true);
  const [passwordInput, setPasswordInput] = useState('');
  const hisapage = '#2023&alfred!mth%';
  const mathu = 'mathualfred@hisa.com'


  const handleClose = () => {
    setshow(false);
  };

  const handleShow = () => {
    setshow(true);
  };

  const handleLogin = () => {
    if (passwordInput === hisapage && emailInput === mathu) {
      setshow(false);
    } else {
      alert('Invalid password. Please try again.');
    }
  };

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setLoading(true);
    Requests.getAppointments().then((res) => {
      setAppointments(res.data.data);
    }).catch((err) => {
      alert("ERR : " + JSON.stringify(err))
    })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const isAuthenticated = passwordInput === hisapage;
  // const isAuthenticated = true;

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <div className="breadcrumb-bar-two pt-3 pb-1 p-0 " style={{ minHeight: "100px" }}>
            <div className="container">
              <div className="row align-items-center inner-banner p-4">
                <div className="col-md-12 col-12 text-center">
                  <h2 className="breadcrumb-title">Appointments</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">
                  <StickyBox offsetTop={50} offsetBottom={20}>
                    <div className="appointments">
                      <DoctorSidebar />
                    </div>
                  </StickyBox>
                </div>
                <div className="col-md-7 col-lg-9 col-xl-9">
                  <div className="appointments">
                    {loading ? (
                      <div className="text-center loading-container">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      appointments.length === 0 ? (
                        <h3>No appointments available.</h3>
                      ) : (
                        appointments.map((appointment) => (
                          <div className="appointment-list">
                            <div className="profile-info-widget">
                              <Link
                                to="#"
                                className="booking-doc-img"
                              >
                                <img
                                  src="https://placehold.it/300x300"
                                  alt="User" />

                              </Link>
                              <div className="profile-det-info">
                                <h3>
                                  <Link to="#"> {appointment.name}</Link>
                                </h3>
                                <div className="patient-details">
                                  <h5>
                                    <i className="far fa-clock"></i> {appointment.date}, {appointment.start_time}
                                  </h5>
                                  <h5>
                                    <i className="fas fa-envelope"></i>{" "}
                                    {appointment.email}
                                  </h5>
                                  <h5>
                                    <i className="fas fa-phone"></i> {appointment.phone}
                                  </h5>
                                  <h5>
                                    <i className="far fa-calendar"></i> {appointment.meeting} , {appointment.location}
                                  </h5>
                                  <h5>
                                    <i className="far fa-building"></i> {appointment.service}
                                  </h5>


                                </div>
                              </div>
                            </div>
                            <div className="appointment-action">
                              <Link
                                to="#0"
                                className="btn btn-sm bg-info-light"
                                onClick={handleShow}
                              >
                                <i className="far fa-eye"></i> View more details
                              </Link>
                              {/* <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link> */}
                            </div>
                          </div>
                        ))
                      )
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>


          <Footer {...props} />
        </div>
      ) : (

        // dashboard login page
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Login Tab Content */}
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
                      <form onSubmit={handleLogin}>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            className="form-control floating"
                          />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            placeholder="Enter your password"
                          />
                          <label className="focus-label">Password</label>
                        </div>
                        <div className="text-end">
                          <Link
                            className="forgot-link"
                            to="#"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
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
                {/* /Login Tab Content */}
              </div>
            </div>
          </div>
        </div>

      )}

      {/*view modal*/}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h5 className="modal-title">Appointment Details</h5>
        </Modal.Header>
        <Modal.Body>
          <ul
            className="info-details">
            <li>
              <div
                className="details-header">
                <div className="row">
                  <div className="col-md-6">
                    <span className="title">#APT0001</span>
                    <span className="text">6 Aug 2023 8:00 AM</span>
                  </div>
                  <div className="col-md-6">
                    <div className="text-end">
                      <button
                        type="button"
                        className="btn bg-success-light btn-sm"
                        id="topup_status"
                      >
                        Confirmed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span className="title">Status:</span>
              <span className="text">Confirmed</span>
            </li>
            <li>
              <span className="title"> Date:</span>
              <span className="text">6 Aug 2023</span>
            </li>
            <li>
              <span className="title">Duration</span>
              <span className="text">30 minutes</span>
            </li>
          </ul>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default Appointments;
