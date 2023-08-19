import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import { useLocation, useNavigate, } from 'react-router-dom'

import DataGenerator from '../services/DataGenerator'

const BookingSuccess = (props) => {

  const location = useLocation();

  const generatorInstance = new DataGenerator();

  // Retrieve the bookingData from the location state
  const bookingData = location.state?.selectedSlot || null;


  if (bookingData === null) {

    window.location.href = "http://localhost:3000/";

  }

  return (
    <>
      {/* <Header {...props}/>     */}
      {/* // <!-- Breadcrumb --> */}
      <div className="breadcrumb-bar-two pt-3 pb-1 p-0 " style={{ minHeight: "100px" }}>
        <div className="container">
          <div className="row align-items-center inner-banner p-0">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Thank You</h2>
              <nav
                aria-label="breadcrumb"
                className="page-breadcrumb"
              >

              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* // <!-- /Breadcrumb -->       */}
      <div className="content success-page-cont p-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card success-card">
                <div className="card-body">
                  <div className="success-cont">
                    <i className="fas fa-check"></i>
                    <h3>Appointment booked Successfully!</h3>
                    <p>Appointment booked with <strong>C.E.O Alfred Mathu</strong><br /> on <strong>{generatorInstance.convertToDayName(bookingData?.date)} </strong> - <em>{bookingData?.date}</em><br /> from <strong>{bookingData?.slot?.start_time} </strong> to <strong> {bookingData?.slot?.end_time}</strong></p>
                    <Link to="/" className="btn btn-primary view-inv-btn">Back to Home</Link>
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
