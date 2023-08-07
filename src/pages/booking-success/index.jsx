import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import { useLocation, useNavigate, } from 'react-router-dom'

const BookingSuccess = (props) => {

  const location = useLocation();

  // Retrieve the bookingData from the location state
  const bookingData = location.state?.selectedSlot || null;

  
if (bookingData === null ){

  window.location.href = "http://localhost:3000/";

}

  return (
    <>
      {/* <Header {...props}/>     */}
      {/* // <!-- Breadcrumb --> */}
      <div className="breadcrumb-bar-two pt-3 pb-1 p-0 " style={{ minHeight: "100px"}}>
        <div className="container">
          <div className="row align-items-center inner-banner p-0">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Booking</h2>
              <nav
                aria-label="breadcrumb"
                className="page-breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className="breadcrumb-item"
                    aria-current="page"
                  >
                    Booking
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* // <!-- /Breadcrumb -->       */}
      <div className="content success-page-cont">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card success-card">
                <div className="card-body">
                <div className="success-cont">
                                    <i className="fas fa-check"></i>
                                    <h3>Appointment booked Successfully!</h3>
                                    <p>Appointment booked with <strong>C.E.O Alfred Mathu</strong><br /> on <strong>{ bookingData?.date}</strong> from <strong>{bookingData?.slot?.start_time} to {bookingData?.slot?.end_time}</strong></p>
                                    <Link to="/" className="btn btn-primary view-inv-btn">Bact to Home</Link>
                                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  )
}

export default BookingSuccess
