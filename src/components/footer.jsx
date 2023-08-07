import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/hisalogo.png";
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';


const Footer = () => {

  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

  }, []);


  return (
    <>
    
    <footer className="footer footer-one">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <img src={logo} alt="logo" />
                    </div>
                    <div className="footer-about-content">
                      <p>
                      Specializing in personal & corporate life assurance advice, investments,
                       retirement planning, corporate training, executive coaching, insurance, & financial advisory.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">For Clients</h2>
                    <ul>
                      <li>
                        <Link to="/">Book Appointment</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Me</Link>
                      </li>
                      <li>
                        <Link to="https://hisaafricainsurance.com/">Website</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">For institutions</h2>
                    <ul>
                      <li>
                        <Link to="/">Book Appointment</Link>
                      </li>
                      <li>
                        <Link to="/contact-us">My Contacts</Link>
                      </li>
                      <li>
                        <Link to="https://hisaafricainsurance.com/">Website</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-5">
                  <div className="footer-widget footer-contact">
                    <h2 className="footer-title">Contact Us</h2>
                    <div className="footer-contact-info">
                      <div className="footer-address">
                        <p>
                          <i>
                            <FeatherIcon icon="map-pin" style={{width:"16px",height:"16px"}}/>
                            </i> Nairobi, Kenya
                        </p>
                      </div>
                      <div className="footer-address">
                        <p>
                          <i>
                          <FeatherIcon icon="phone-call" style={{width:"16px",height:"16px"}}/>
                            </i> +254 722310584
                        </p>
                      </div>
                      <div className="footer-address mb-0">
                        <p>
                          <i>
                          <FeatherIcon icon="mail" style={{width:"16px",height:"16px"}}/>
                            </i> info@hisaafrica.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-7">
                  <div className="footer-widget">
                    <h2 className="footer-title">Request for a proposal</h2>
                    <div className="subscribe-form">
                      <form action="#">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </form>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-facebook" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              {/* Copyright */}
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-text">
                      <p className="mb-0">
                        {" "}
                        Copyright © 2023{" "}
                        <Link
                          to="https://www.linkedin.com/in/ben-kung-u-272846bb"
                          target="_blank"
                        >
                          Ben Kung'u.
                        </Link>{" "}
                        All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    {/* Copyright Menu */}
                    <div className="copyright-menu">
                      <ul className="policy-menu">
                        <li>
                          <Link to="/">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/">Terms and Conditions</Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Copyright Menu */}
                  </div>
                </div>
              </div>
              {/* /Copyright */}
            </div>
          </div>
        </footer>
    </>
  );
};

export default Footer;