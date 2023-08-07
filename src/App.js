import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'
import Appointments from './pages/appointments'
import BookingSuccess from './pages/booking-success'
import Contactus from './pages/contactus/contactus'
import DoctorProfile from './pages/doctorprofile'
import ScheduleTiming from './pages/scheduletimings'
import DoctorDashboard from './pages/dashboard'
import Home1 from './pages/home/home';
import Booking from './pages/booking/booking1';
//import MypPatient from './pages/mypatient'
//import AppointmentList from './pages/appointments-list'


const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Routes>
          <Route
            path="/"
            element={<Home1 />}
          />
          <Route
            path="/booking"
            element={<Booking />}
          />
          <Route
            path="/booking-success"
            element={<BookingSuccess />}
          />
          <Route
            path="/about-us"
            element={<DoctorProfile />}
          />
          <Route
            path="/am2023fd"
            element={<Appointments />}
          />
          <Route
            path="/contact-us"
            element={<Contactus />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

