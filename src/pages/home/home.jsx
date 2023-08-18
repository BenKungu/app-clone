
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BannerImg from '../../assets/images/alfred1.png'
import Footer from '../../components/footer'
import { useNavigate } from "react-router-dom"

const Home1 = (props) => {

  const [formData, setFormData] = useState({});
  const [selectedNature, setSelectedNature] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,

    })

  }
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedNature === 'Physical Meeting') {
      navigate('/booking', { state: { formData } });
    } else {
      navigate('/booking', { state: { formData } });
    }
  };


  return (
    <>
      <div className="main-wrapper">
        {/* Home Banner  */}
        <section className="doctor-search-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="doctor-search pb-4">
                  <div className="banner-header">
                    <h2>Schedule an Appointment</h2>
                  </div>
                  <div className="doctor-form">
                    <form action="#" onSubmit={(e) => handleSubmit(e)} className="doctor-search-form">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Full names</label>
                            <div className="form-custom">
                              <input type="text" onChange={(e) => handleChange(e)} name='name' className="form-control" required />
                              <i className="far fa-user" />

                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <div className="form-custom">
                              <input type="email" onChange={(e) => handleChange(e)} name='email' className="form-control" required />
                              <i className="far fa-envelope" />

                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone</label>
                            <div className="form-custom">
                              <input type="number" onChange={(e) => handleChange(e)} name='phone' className="form-control" required />
                              <i className="fa fa-phone-square" />

                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Profession</label>
                            <div className="form-custom">
                              <input type="text" onChange={(e) => handleChange(e)} name='profession' className="form-control" required />
                              <i className="far fa-building" />

                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Age</label>
                            <div className="form-custom">
                              <input type="number" onChange={(e) => handleChange(e)} name='age' className="form-control" required />
                              <i className="far fa-calendar" />

                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Type of meeting</label>
                            <div className="form-custom">
                              <select type="text"
                                onChange={(e) => {
                                  handleChange(e);
                                  setSelectedNature(e.target.value);
                                }} name='meeting'
                                className="form-control"
                                required>
                                <option value=""></option>
                                <option value="Physical Meeting">Physical meeting</option>
                                <option value="Online Meeting">Online meeting</option>
                                <option value="Phone Call">Phone call</option>
                              </select>

                              <i className="fa fa-video-camera" />


                            </div>
                          </div>
                        </div>

                        {selectedNature === 'Physical Meeting' && (
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Meeting Location</label>
                              <div className="form-custom">
                                <input
                                  type="text"
                                  onChange={(e) => handleChange(e)}
                                  name="location"
                                  className="form-control"
                                  required
                                />
                                <i className="fas fa-map-marker-alt" />
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Type of service</label>
                            <div className="form-custom">
                              <select type="text" onChange={(e) => handleChange(e)} name='service' className="form-control" required>
                                <option></option>
                                <option value="General Insurance">General Insurance</option>
                                <option value="Life Assurance">Life Assurance</option>
                                <option value="Education Investment">Education Investment</option>
                                <option value="Medical Insurance">Medical Insurance</option>
                                <option value="Wealth Creation & Management">Wealth Creation & Management</option>
                                <option value="Personalized Retirement Saving">Personalized Retirement Saving</option>
                                <option value="Personalized Financial Training">Personalized Financial Training</option>
                              </select>
                              <i className="far fa-question-circle" />

                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">

                          <button type='submit' className="btn banner-btn mt-3">
                            MAKE APPOINTMENT
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={BannerImg}
                  className="img-fluihd dr-ihmg"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer {...props} />
      </div>
    </>
  )
}
export default Home1
