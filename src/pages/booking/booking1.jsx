import 'bootstrap-daterangepicker/daterangepicker.css';
import React , { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import IMG01 from '../../assets/images/doctor-thumb-02.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../../components/footer";
import sampleData from './sampleData.json';
import { useNavigate, useLocation } from 'react-router-dom';


const Booking = (props) => {

	const location = useLocation();

	// Retrieve the bookingData from the location state
	const clientData = location.state?.formData || null;
  
	
  if (clientData === null || Object.keys(clientData).length === 0 ){
  
	window.location.href = "http://localhost:3000/";
  
  }


	const [scheduleData] = useState(sampleData);
	const [currentIndex, setCurrentIndex] = useState(0);


	if (!scheduleData || scheduleData.length === 0) {
		// Handle the case when scheduleData is empty or undefined
		return <div>No schedule data available.</div>;
	}

	const [globalDate, setGlobalDate] = useState(new Date())

	const handlePreviousDay = () => {
		// setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
		getPreviousDate();
	};

	const handleNextDay = () => {
		// setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, scheduleData.length - 1));
		getNextDate();
	};

	const calculateDate = (originalDate, daysToAddOrSubtract) => {
		const newDate = new Date(originalDate);

		// Calculate the new date
		newDate.setDate(newDate.getDate() + daysToAddOrSubtract);

		// Check if the new date is earlier than today
		const today = new Date();
		if (newDate < today) {
			alert("you can't select past days")
			return today;
		}

		return newDate;
	}


	const getPreviousDate = () => {
		const previousDate = new Date(globalDate);
		setGlobalDate(calculateDate(globalDate, -3))
		//   globalDate.setDate(previousDate.getDate() - 3);
		//   return globalDate;
	};

	const getNextDate = () => {
		const nextDate = new Date(globalDate);
		setGlobalDate(calculateDate(globalDate, 3))

	};


	const currentSchedule = scheduleData[currentIndex];
	const currentDate = currentSchedule.date;

	const convertToAmPm = (time24) => {
		// Extract the hours and minutes from the input time
		const hours = parseInt(time24.substr(0, 2), 10);
		const minutes = parseInt(time24.substr(3, 2), 10);

		// Determine whether it's AM or PM
		const period = hours >= 12 ? 'PM' : 'AM';

		// Adjust the hours if necessary for AM/PM format
		const amPmHours = hours % 12 === 0 ? 12 : hours % 12;

		// Format the time in AM/PM format
		const time12 = `${amPmHours}:${minutes.toString().padStart(2, '0')} ${period}`;

		return time12;
	}

	const [selectedSlot, setSelectedSlot] = useState(null);

	const handleClickSlot = (e, slot, sdate) => {
		const sslot = {
			"slot": slot,
			"date": sdate
		}

		e.preventDefault()
		setSelectedSlot(sslot);

	}


	const navigate = useNavigate()
	const handleConfirmBooking = (e) => {
		e.preventDefault()

		const bookingData = {
			"client_data": clientData,
			"slot_id": selectedSlot?.slot?.id,
			"date": selectedSlot?.date
		}

		navigate('/booking-success', { state: { selectedSlot } })
	}

	const getCurrentDate = () => {
		const dateOptions = {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		};

		return new Date().toLocaleDateString('en-GB', dateOptions);
	};

	const getCurrentDay = () => {
		const dayOptions = {
			weekday: 'short',
		};

		return new Date().toLocaleDateString('en-US', dayOptions);
	};



	return (
		<div>
			<div className="breadcrumb-bar-two pt-3 pb-1 p-0 " style={{ minHeight: "100px"}}>
				<div className="container">
					<div className="row align-items-center inner-banner p-0">
						<div className="col-md-12 col-12 text-center">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<h2 className="breadcrumb-title">Booking</h2>
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/">Home</Link>
									</li>
									<li className="breadcrumb-item active" aria-current="page">Booking</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<div className="content p-0 ">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<div className="booking-doc-info">
										<Link to="/patient/doctor-profile" className="booking-doc-img">
											<img src={IMG01} alt="User" />
										</Link>
										<div className="booking-info">
											<h4>
												<Link to="/patient/doctor-profile">
													C.E.O Alfred Mathu</Link>
											</h4>
											<div className="rating">
											</div>
											<p className="text-muted mb-0"><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-4 col-md-6">
									<h4 className="mb-1">{getCurrentDate()}</h4>
									<p className="text-muted">{getCurrentDay()}</p>

								</div>
							</div>
							<div className="card booking-schedule schedule-widget">
								<div className="schedule-header">
									<div className="row">
										<div className="col-md-12">
											<div className="day-slot">
												<ul>
													<li className="left-arrow">
														<Link to="#" onClick={handlePreviousDay}>
															<i className="fa fa-chevron-left"></i>
														</Link>
													</li>
													{scheduleData.map((item, index) => (
														<li key={index} className={index === currentIndex ? 'active' : ''}>
															<Link to={`#${item.day}`}>
																<span>{item.day}</span>
																<span className="slot-date">{item.date}</span>

															</Link>
														</li>
													))}
													<li className="right-arrow">
														<Link to="#" onClick={handleNextDay}>
															<i className="fa fa-chevron-right"></i>
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="schedule-cont">
									<div className="row">
										<div className="col-md-12">
											<div className={`time-slot`}>
												<ul className="clearfix">
													{scheduleData.map((schedule, index) => (
														<li key={index}>
															{schedule.slots.map((slot, slotIndex) => (
																<Link key={slotIndex} className={`timing ${selectedSlot?.slot?.id === slot.id ? "selected" : ""}`} to="#0" onClick={(e) => handleClickSlot(e, slot, schedule.date)}>

																	<span>{convertToAmPm(slot.start_time)}</span>
																</Link>
															))}
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
							</div>
							<div className="submit-section proceed-btn text-end">
								{ selectedSlot ? (
							<button className="btn btn-primary submit-btn" onClick={(e) => handleConfirmBooking(e)}>
											Confirm booking
											</button>
								):(
									<button className="btn btn-primary submit-btn" onClick={(e) => handleConfirmBooking(e)} disabled>
											Confirm booking
											</button>
								 )}
								
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer {...props} />
		</div>
	);

}


export default Booking;