import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Footer from "../../components/footer";
import DoctorSidebar from "../../components/doctor-sidebar";
import Requests from "../services/Requests";

const Appointments = (props) => {
  const [show, setshow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const shortDayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  useEffect(() => {
    setLoading(true);
    Requests.getAppointments().then((res) => {
      setAppointments(res.data.data);
    }).catch((err) => {
      console.log(err);
    })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleClose = () => {
    setshow(false);
  };

  const handleShow = (appointment) => {
    setAppointmentDetails(appointment);
    setshow(true);
  };

  function generateStyledAvatar(name) {
    let initials = 'NA';

    if (name) {
      const nameParts = name.split(' ');

      if (nameParts.length === 1) {
        initials = nameParts[0].charAt(0).toUpperCase() + nameParts[0].charAt(nameParts[0].length - 1).toUpperCase();
      } else if (nameParts.length >= 2) {
        initials = nameParts[0].charAt(0).toUpperCase() + (nameParts[1].charAt(0) || '').toUpperCase();
      }
    }

    return (
      <div className="custom-avatar">
        <span className="initial">{initials.charAt(0)}</span>
        <span className="secondInitial">{initials.charAt(1)}</span>
      </div>
    );
  }




  return (
    <div>
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
                      appointments.map((item) => (
                        <div className="appointment-list">
                          <div className="profile-info-widget">
                            <Link to="#" className="booking-doc-img">
                              {generateStyledAvatar(item.appointment.client.name)}
                            </Link>
                            <div className="profile-det-info">
                              <h3>
                                <Link to="#"> {item.appointment.client.name}</Link>
                              </h3>
                              <div className="patient-details">
                                <h5>
                                  <i className="far fa-clock"></i> {`${shortDayNames[new Date(item.appointment.date).getDay()]} ${item.appointment.date} AT
                                     ${item.appointment.slot.start_time}`}
                                </h5>
                                <h5>
                                  <i className="fas fa-envelope"></i>{" "}
                                  {item.appointment.client.email}
                                </h5>
                                <h5>
                                  <i className="fas fa-phone"></i> {item.appointment.client.phone}
                                </h5>
                                <h5>
                                  <i className="far fa-calendar"></i> {item.appointment.meeting} , {item.appointment.location}
                                </h5>
                                <h5>
                                  <i className="far fa-building"></i> {item.appointment.service}
                                </h5>


                              </div>
                            </div>
                          </div>
                          <div className="appointment-action">
                            <Link
                              to="#0"
                              className="btn btn-sm bg-info-light"
                              onClick={() => handleShow(item.appointment)}
                            >
                              <i className="far fa-eye" style={{ color: "#2A9D36" }} ></i> View more details
                            </Link>

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
      </div>

      {/*view modal*/}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h5 className="modal-title">Appointment Details</h5>
        </Modal.Header>
        <Modal.Body>
          {appointmentDetails && (
            <ul
              className="info-details">
              <li>
                <div
                  className="details-header">
                  <div className="row">
                    <div className="col-md-6">
                      <span className="title"> Appointment ID </span>
                    </div>
                    <div className="col-md-6">
                      <div className="text-end">
                        <button
                          type="button"
                          className="btn bg-success-light btn-sm"
                          id="topup_status"
                        >
                          #000{appointmentDetails.id}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className="title">Time </span>
                <span className="text"> {`${dayNames[new Date(appointmentDetails.date).getDay()]}`} <br /> {appointmentDetails.date} <br /> <b>AT</b> - {appointmentDetails.slot.start_time}</span>
              </li>
              <li>
                <span className="title">Type of Meeting</span>
                <span className="text"> {appointmentDetails.meeting} - {appointmentDetails.location} </span>
              </li>
              <li>
                <span className="title">Full names </span>
                <span className="text"> {appointmentDetails.client.name} </span>
              </li>
              <li>
                <span className="title"> Age </span>
                <span className="text"> future update  </span>
              </li>
              <li>
                <span className="title">Profession</span>
                <span className="text"> future update </span>
              </li>
            </ul>
          )}
        </Modal.Body>
      </Modal>

      <Footer {...props} />
    </div>

  )
};



export default Appointments;
