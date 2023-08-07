import React from "react";
import { Link } from "react-router-dom";
import IMG01 from '../assets/images/doctor-thumb-02.jpg';


const DoctorSidebar = () => {
  let pathnames = window.location.pathname
  return (
    <>
      {/* Profile Sidebar */}
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="#" className="booking-doc-img">
              <img
                src={IMG01}
                alt="User Image"
              />
            </Link>
            <div className="profile-det-info">
              <h3>C.E.O Alfred Mathu</h3>
              <div className="patient-details">
                <h5 className="mb-0">
                  BED, MSC - NTM  &amp; Financial Doctor
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>              
              <li className={pathnames.includes("/doctor/doctor-dashboard") ? "active" : ""}>
                <Link to="#">
                  <i className="fas fa-columns" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className={pathnames.includes("/doctor/appointments") ? "active" : ""}>
                <Link to="#">
                  <i className="fas fa-calendar-check" />
                  <span>Appointments</span>
                </Link>
              </li>
              
              <li className={pathnames.includes("/doctor/schedule-timing") ? "active" : ""}>
                <Link to="#">
                  <i className="fas fa-hourglass-start" />
                  <span>Schedule Timings</span>
                </Link>
              </li>
              <li className={pathnames.includes("/doctor/available-timing") ? "active" : ""}>
                <Link to="#">
                  <i className="fas fa-clock" />
                  <span>Available Timings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* /Profile Sidebar */}
    </>
  );
};

export default DoctorSidebar;
