import React, { useState } from 'react'
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
        <section className="doctor-search-section pt-0 pb-1 p-0" >
          <div className="container" >
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="doctor-search pb-2">
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
                              <input type="text" onChange={(e) => handleChange(e)} name='name' className="form-control"
                                placeholder="Example: John Doe"
                                required />
                              <i className="far fa-user" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <div className="form-custom">
                              <input type="email" onChange={(e) => handleChange(e)} name='email' className="form-control"
                                placeholder='john@example.com'
                                required />
                              <i className="far fa-envelope" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone</label>
                            <div className="form-custom">
                              <input type="number" onChange={(e) => handleChange(e)} name='phone' className="form-control"
                                placeholder='e.g. 07XX XXX XXX'
                                required />
                              <i className="fa fa-phone-square" />
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
                                className="form-select form-control"
                                required
                              >
                                <option value="" disabled selected>Click to select</option>
                                <option value="Physical Meeting">Physical meeting</option>
                                <option value="Online Meeting">Online meeting</option>
                                <option value="Phone Call">Phone call</option>
                              </select>
                              <i className="fas fa-chevron-down" />
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
                                  placeholder='e.g Nairobi CBD'
                                  required
                                />
                                <i className="fas fa-map-marker-alt" />
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>I would Like information on ? </label>
                            <div className="form-custom">
                              <select type="text" onChange={(e) => handleChange(e)} name='service' className="form-control"
                                required>
                                <option value="" disabled selected>Click to select</option>
                                <option value="Personal Investment">Personal Investment</option>
                                <option value="Life Assurance">Life Assurance</option>
                                <option value="Education Policy">Education Policy</option>
                                <option value="Medical Insurance">Medical Insurance</option>
                                <option value="Money Markets">Money Markets</option>
                                <option value="Critical Illness">Critical Illness</option>
                                <option value="Retirement Savings">Retirement Savings</option>
                              </select>
                              <i className="fas fa-chevron-down" />
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
