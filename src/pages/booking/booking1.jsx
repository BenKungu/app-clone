import 'bootstrap-daterangepicker/daterangepicker.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IMG01 from '../../assets/images/avatar.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../../components/footer";
import { useNavigate, useLocation } from 'react-router-dom';
import Requests from '../services/Requests';
import DataGenerator from '../services/DataGenerator';

const Booking = (props) => {
	const generatorInstance = new DataGenerator();
	const location = useLocation();
	const navigate = useNavigate();
	const clientData = location.state?.formData || null;
	if (clientData === null || Object.keys(clientData).length === 0) {
		window.location.href = "/";
	}
	const [scheduleData, setScheduleData] = useState(generatorInstance.generateData());
	const [currentIndex, setCurrentIndex] = useState(0);
	const getScheduleData = (start_date) => {
		setLoading(true);
		Requests.getSlots(generatorInstance.formatDate(start_date)).then((res) => {
			setScheduleData(res.data);
		}).catch((err) => {
			alert("ERR : " + JSON.stringify(err))
		})
			.finally(() => {
				setLoading(false);
			})
	}
	useEffect(() => {
		getScheduleData(globalDate);
	}, [])
	const [globalDate, setGlobalDate] = useState(new Date())
	const handlePreviousDay = (e) => {
		e.preventDefault();
		getPreviousDate();
		getScheduleData(globalDate);
	};
	const handleNextDay = (e) => {
		e.preventDefault();
		getNextDate();
		getScheduleData(globalDate);
	};
	const calculateDate = (originalDate, daysToAddOrSubtract) => {
		const newDate = new Date(originalDate);
		newDate.setDate(newDate.getDate() + daysToAddOrSubtract);
		const today = new Date();
		if (newDate < today) {
			return today;
		}
		return newDate;
	}
	const getPreviousDate = () => {
		const previousDate = new Date(globalDate);
		setGlobalDate(calculateDate(globalDate, -3))
	};
	const getNextDate = () => {
		const nextDate = new Date(globalDate);
		setGlobalDate(calculateDate(globalDate, 3))
	};
	const currentSchedule = scheduleData[currentIndex];
	const currentDate = currentSchedule?.date;
	const convertToAmPm = (time24) => {
		const hours = parseInt(time24.substr(0, 2), 10);
		const minutes = parseInt(time24.substr(3, 2), 10);
		const period = hours >= 12 ? 'PM' : 'AM';
		const amPmHours = hours % 12 === 0 ? 12 : hours % 12;
		const time12 = `${amPmHours}:${minutes.toString().padStart(2, '0')} ${period}`;
		return time12;
	}
	const [selectedSlot, setSelectedSlot] = useState(null);
	const isPhysicalMeeting = clientData.meeting === 'Physical Meeting';
	const isNightSlot = (slot) => slot.start_time === '19:00:00';
	const handleClickSlot = (e, slot, sdate) => {
		if (isPhysicalMeeting && isNightSlot(slot)) {
			e.preventDefault();
			const confirmMessage = 'Physical meetings cannot be scheduled at night. Please select an earlier slot.';
			const confirmed = window.confirm(confirmMessage);
			if (confirmed) {
			} else {
			}
		} else {
			e.preventDefault();
			const sslot = {
				slot,
				date: sdate,
			};
			setSelectedSlot(sslot);
		}
	};
	const handleConfirmBooking = (e) => {
		e.preventDefault()
		const bookingData = {
			"client_data": clientData,
			"slot_id": selectedSlot?.slot?.id,
			"date": selectedSlot?.date
		}
		Requests.createAppointment(bookingData).then((res) => {
			if (res.data.success === true) {
				navigate('/booking-success', { state: { selectedSlot } });
			}
		}).catch((err) => {
			alert(err.response.data.message);
		});
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
			weekday: 'long',
		};
		return new Date().toLocaleDateString('en-US', dayOptions);
	};
	const [loading, setLoading] = useState(true);
	const currentDateTime = new Date();
	return (
		<div>
			<div className="breadcrumb-bar-two pt-3 pb-1 p-0 " style={{ minHeight: "100px" }}>
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
										<div className="booking-doc-img">
											<img src={IMG01} alt="User" />
										</div >
										<div className="booking-info">
											<h4>
												<div >
													C.E.O Alfred Mathu</div>
											</h4>
											<div className="rating">
											</div>
											<p className="text-muted mb-0"><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-3">
									<h2 className="mb-1">{getCurrentDate()}</h2>
									<p className="text-muted">{getCurrentDay()}</p>
								</div>
								<div className="col-12 col-md-9 mt-1"><h5>Kindly pick an available time slot. Below is the slot's menu.</h5>
									<div className="row">
										<div className="col-md-12">
											<div className="time-slot">
												<ul className="clearfix">
													<li>
														<div className="menu-available">
															<span>Available</span>
														</div>
													</li>
													<li>
														<div className="menu-booked">
															<span>Booked</span>
														</div>
													</li>
													<li>
														<div className="menu-past">
															<span>Past time</span>
														</div>
													</li>
													<li>
														<div className="menu-late">
															<span>Late Night</span>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card booking-schedule schedule-widget">
								<div className="schedule-header">
									<div className="row">
										<div className="col-md-12">
											<div className="day-slot">
												<ul>
													<li className="left-arrow">
														<Link to="#" onClick={(e) => handlePreviousDay(e)}>
															<i className="fa fa-chevron-left"></i>
														</Link>
													</li>
													{scheduleData.map((item, index) => (
														<li key={index} className={index === currentIndex ? 'active' : ''}>
															<div>
																<span>{item.day}</span>
																<span className="slot-date">{item?.date}</span>
															</div>
														</li>
													))}
													<li className="right-arrow">
														<Link to="#" onClick={(e) => handleNextDay(e)}>
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
											{loading ? (
												<div className="text-center loading-container">
													<div className="spinner-border text-primary" role="status">
														<span className="visually-hidden">Loading...</span>
													</div>
												</div>
											) : (
												<div className={`time-slot`}>
													<ul className="clearfix">
														{scheduleData.map((schedule, index) => (
															<li key={index}>
																{schedule.slots.map((slot, slotIndex) => {
																	const slotEndTime = new Date(schedule.date + " " + slot.end_time);
																	const isBooked = slot.bookings.length >= slot.max_bookings;
																	const isTimePassed = currentDateTime > slotEndTime;
																	const isPhysicalMeeting = clientData.meeting === 'Physical Meeting';
																	const isNightSlot = slot.start_time === '19:00:00';
																	let slotClass = "timing";
																	if (selectedSlot?.slot?.id === slot.id) {
																		slotClass += " selected";
																	} else if (isTimePassed) {
																		slotClass += " passed";
																	} else if (isPhysicalMeeting) {
																		if (isNightSlot && !isBooked) {
																			slotClass += " night";
																		} else if (isBooked) {
																			slotClass += " booked";
																		}
																	} else if (isBooked) {
																		slotClass += " booked";
																	}
																	const onClickHandler = isTimePassed || isBooked ? null : (e) => handleClickSlot(e, slot, schedule?.date);
																	const pointerEvents = isTimePassed || isBooked ? "none" : "auto";
																	const cursorStyle = isTimePassed || isBooked ? "not-allowed" : "pointer";
																	return (
																		<Link
																			key={slotIndex}
																			className={slotClass}
																			to={isTimePassed || isBooked ? "#" : "#0"}
																			onClick={onClickHandler}
																			style={{ pointerEvents, cursor: cursorStyle }}
																		>
																			<span>{convertToAmPm(slot.start_time)}</span>
																		</Link>
																	);
																})}
															</li>
														))}
													</ul>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
							<div className="submit-section proceed-btn text-end">
								{selectedSlot ? (
									<button className="btn btn-primary submit-btn" onClick={(e) => handleConfirmBooking(e)}>
										Confirm booking
									</button>
								) : (
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
		</div >
	);
}
export default Booking;