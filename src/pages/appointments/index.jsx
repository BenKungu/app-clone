import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Footer from "../../components/footer";
import DoctorSidebar from "../../components/doctor-sidebar";
import IMG01 from '../../assets/images/doctor-thumb-02.jpg';

const Appointments = (props) => {
  const [show, setshow] = useState();



  const handleClose = () => {
    setshow(false);
  };

  const handleShow = () => {
    setshow(true);
  };

  return (
    <div>
        <div className="breadcrumb-bar-two pt-3 pb-1 p-0 " style={{ minHeight: "100px"}}>
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
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={50} offsetBottom={20}>
                <div className="appointments">
                  <DoctorSidebar />
                </div>
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="appointments">
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#"> Mark Ole Maiyan</Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 14 Nov 2019, 10.00 AM
                        </h5>
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          maiyan@gmail.com
                        </h5>
                        <h5>
                          <i className="fas fa-phone"></i> +254 7456736788
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Physical meeting
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> Life Assurance
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img 
                      src={IMG01} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">Ben Kung'u </Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 12 Nov 2019, 5.00 PM
                        </h5>
                        
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          kungu@gmail.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254700072666
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i>Online meeting
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> General Insurance
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>

                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">Jack Mamai</Link>
                      </h3>

                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 11 Nov 2019, 8.00 PM
                        </h5>
                        
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          mamai@gmail.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254 7000256677
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Phone call
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> General Insurance
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>

                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">Wangui Jane</Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 9 Nov 2019, 9.00 AM
                        </h5>
                        
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          wangui@gmail.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254 260 724 7769
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Physical meeting
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> Education Investment
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>

                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">
                          Kiprop James
                        </Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 9 Nov 2019, 1.00 PM
                        </h5>
                        
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          kiprop@gmail.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254 504 368 6874
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Online meeting
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> General Insurance
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>

                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">Hassan Abdifatal</Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 8 Nov 2019, 3.00 PM
                        </h5>
                        
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          isafataal@gmail.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254 954 820 7887
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Physical meeting
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> Wealth Creation & Management
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>

                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">Other client</Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 6 Nov 2019, 9.00 AM
                        </h5>
                        
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          their@email.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254 315 384 4562
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Online meeting
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> Personalized Financial Training
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>

                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">Other client</Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 6 Nov 2019, 9.00 AM
                        </h5>
                       
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          their@email.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254 315 384 4562
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Phone call
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> Life Assurance
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>

                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">Other client</Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 6 Nov 2019, 9.00 AM
                        </h5>
                        
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          their@email.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254 315 384 4562
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Online meeting
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> Medical Insurance
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>

                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">Other client</Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 6 Nov 2019, 9.00 AM
                        </h5>
                        
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          their@email.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254 315 384 4562
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Physical meeting
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> Personalized Retirement Saving
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>

                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">Other client</Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 6 Nov 2019, 9.00 AM
                        </h5>
                        
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          their@email.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254 315 384 4562
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Phone call
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> Education Investment
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
                </div>

                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link
                      to="#"
                      className="booking-doc-img"
                    >
                      <img  
                      src={IMG01}
                      alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="#">Other client</Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <i className="far fa-clock"></i> 6 Nov 2019, 9.00 AM
                        </h5>
                        
                        <h5>
                          <i className="fas fa-envelope"></i>{" "}
                          their@email.com
                        </h5>
                        <h5 >
                          <i className="fas fa-phone"></i> +254 315 384 4562
                        </h5>
                        <h5>
                          <i className="far fa-calendar"></i> Physical meeting
                        </h5>
                        <h5>
                          <i className="far fa-building"></i> General Insurance
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
                      <i className="far fa-eye"></i> View
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check"></i> Accept
                    </Link>
                    <Link to="#0" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times"></i> Cancel
                    </Link>
                  </div>
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
          <ul className="info-details">
            <li>
              <div className="details-header">
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
      <Footer {...props} />
    </div>
  );
};

export default Appointments;
