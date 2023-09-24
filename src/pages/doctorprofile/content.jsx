import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body pt-0">
          {/* Tab Menu */}
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="#doc_overview"
                  data-bs-toggle="tab"
                >
                  General Information
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#doc_locations"
                  data-bs-toggle="tab"
                >
                  Locations
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#doc_reviews"
                  data-bs-toggle="tab"
                >
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#doc_business_hours"
                  data-bs-toggle="tab"
                >
                  Business Hours
                </Link>
              </li>
            </ul>
          </nav>
          {/* /Tab Menu */}
          {/* Tab Content */}
          <div className="tab-content pt-0">
            {/* Overview Content */}
            <div
              role="tabpanel"
              id="doc_overview"
              className="tab-pane fade show active"
            >
              <div className="row">
                <div className="col-md-12 col-lg-9">
                  {/* About Details */}
                  <div className="widget about-widget">
                    <h4 className="widget-title">About Me</h4>
                    <p>
                      In a world where financial guidance is paramount, I stand as a beacon of empowerment,
                      transforming the financial landscape one individual at a time. As a renowned and respected
                      financial advisor, I have solidified my position as a household name within the dynamic
                      and ever-evolving Kenyan Insurance Industry. My wealth of experience, coupled with an unwavering
                      commitment to excellence, has propelled me to the forefront of corporate business leadership,
                      where I am revered for my strategic prowess and exceptional management skills.
                    </p>
                  </div>
                  {/* /About Details */}
                  {/* Education Details */}
                  <div className="widget education-widget">
                    <h4 className="widget-title">Education</h4>
                    <div className="experience-box">
                      <ul className="experience-list">
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="#/" className="name">
                                Moi University - Kenya
                              </Link>
                              <div>Bachelor Science, Botany</div>
                              <span className="time">1994 - 1998</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="#/" className="name">
                                College of insurance
                              </Link>
                              <div>Certificate of proficiency</div>
                              <span className="time">1999 - 2000</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Education Details */}
                  {/* Experience Details */}
                  <div className="widget experience-widget">
                    <h4 className="widget-title">Work &amp; Experience</h4>
                    <div className="experience-box">
                      <ul className="experience-list">
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="#/" className="name">
                                Hisa Africa Insurance Agency
                              </Link>
                              <span className="time">2018 - Present (5 years)</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="#/" className="name">
                                Old Mutual Kenya
                              </Link>
                              <span className="time">1998 - Present (25 years)</span>
                            </div>
                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>
                  {/* /Experience Details */}
                  {/* Awards Details */}
                  <div className="widget awards-widget">
                    <h4 className="widget-title">Awards</h4>
                    <div className="experience-box">
                      <ul className="experience-list">
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <p className="exp-year">March 2012</p>
                              <h4 className="exp-title">Agent of the year Award</h4>
                              <p>
                                Received from the Association of Kenya Insurers (AKI)
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <p className="exp-year">December 2010</p>
                              <h4 className="exp-title">
                                Certificate of distinguished service by Managing Director
                              </h4>
                              <p>
                                Received from Old Mutual Kenya for being the top Retail Affluent sales manager and 13 years dedicated sales service to Old Mutual Kenya
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <p className="exp-year">March 2008</p>
                              <h4 className="exp-title">
                                Achievemet in production of Quality Life Assurance Business AKI Agent of the year award.
                              </h4>
                              <p>
                                Best agent in the Kenya that year.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Awards Details */}
                  {/* Services List */}
                  <div className="service-list">
                    <h4>Services</h4>
                    <ul className="clearfix">
                      <li> Insurance</li>
                      <li>Financialplanning</li>
                      <li>Financialwellness</li>
                      <li>Retirementplanning</li>
                      <li>Investmentstrategies</li>
                      <li>Entrepreneurship</li>
                    </ul>
                  </div>
                  {/* /Services List */}
                  {/* Specializations List */}
                  <div className="service-list">
                    <h4>Specializations</h4>
                    <ul className="clearfix">
                      <li> Distribution Strategy</li>
                      <li>Resource Management</li>
                      <li>Stakeholder Management</li>
                      <li>Product Development</li>
                      <li>Financial Systems Management</li>
                      <li>Sales Support</li>
                    </ul>
                  </div>
                  {/* /Specializations List */}
                </div>
              </div>
            </div>
            {/* /Overview Content */}
            {/* Locations Content */}
            <div
              role="tabpanel"
              id="doc_locations"
              className="tab-pane fade"
            >
              {/* Location List */}
              <div className="location-list">
                <div className="row">
                  {/* Clinic Content */}
                  <div className="col-md-6">
                    <div className="clinic-content">
                      <h4 className="clinic-name">
                        Hisa Africa Insurance Agency
                      </h4>
                      <p className="doc-speciality">
                        Insurance and financial advisory
                      </p>
                      <div className="clinic-details mb-0">
                        <h5 className="clinic-direction">
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Upper Hill Road, Old Mutual Towers, 1st floor, Nairobi <br />
                          <Link to="#;">Get Directions</Link>
                        </h5>
                        <ul>
                          <li>
                            <Link
                              to="assets/img/features/feature-01.jpg"
                              data-fancybox="gallery2"
                            >
                              {/* <img
                          src={IMG07}
                          alt="Feature Image"
                        /> */}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="assets/img/features/feature-02.jpg"
                              data-fancybox="gallery2"
                            >
                              {/* <img
                          src={IMG08}
                          alt="Feature Image"
                        /> */}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="assets/img/features/feature-03.jpg"
                              data-fancybox="gallery2"
                            >
                              {/* <img
                          src={IMG07}
                          alt="Feature Image"
                        /> */}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="assets/img/features/feature-04.jpg"
                              data-fancybox="gallery2"
                            >
                              {/* <img
                          src={IMG01}
                          alt="Feature Image"
                        /> */}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /Clinic Content */}
                  {/* Clinic Timing */}
                  <div className="col-md-4">
                    <div className="clinic-timing">
                      <div>
                        <p className="timings-days">
                          <span> Mon - Sat </span>
                        </p>
                        <p className="timings-times">
                          <span>7:00 AM - 1:00 PM</span>
                          <span>2:00 PM - 6:00 PM</span>
                        </p>
                      </div>
                      <div>
                        <p className="timings-days">
                          <span>Sun</span>
                        </p>
                        <p className="timings-times">
                          <span>Available online</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /Clinic Timing */}

                </div>
              </div>
              {/* /Location List */}
              {/* Location List */}

            </div>
            {/* /Locations Content */}
            {/* Reviews Content */}
            <div
              role="tabpanel"
              id="doc_reviews"
              className="tab-pane fade"
            >
              {/* Review Listing */}
              <div className="widget review-listing">
                <ul className="comments-list">
                  {/* Comment List */}
                  <li>
                    <div className="comment">
                      <img
                        className="avatar avatar-sm rounded-circle"
                        alt="User Image"
                      // src={patient}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Nelsonn Mandela</span>
                          <span className="comment-date">Reviewed 2 Days ago</span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p className="recommended">
                          <i className="far fa-thumbs-up" /> I recommend the Alfred Mathu
                        </p>
                        <p className="comment-content">
                          A few days ago we finally met in person after months of connection on LinkedIn with few words on what we do professionally. Alfred is eloquent, experienced and a financial giant advisor with big heart and geared to changing lives financially. I highly recommend him for advice and expertise. As it goes;
                          If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#">
                            <i className="fas fa-reply" /> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#" className="like-btn">
                              <i className="far fa-thumbs-up" /> Yes
                            </Link>
                            <Link to="#" className="dislike-btn">
                              <i className="far fa-thumbs-down" /> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Comment Reply */}
                    <ul className="comments-reply">
                      <li>
                        <div className="comment">
                          <img
                            className="avatar avatar-sm rounded-circle"
                            alt="User Image"
                          // src={patient1}
                          />
                          <div className="comment-body">
                            <div className="meta-data">
                              <span className="comment-author">Ben Kung'u</span>
                              <span className="comment-date">
                                Reviewed 3 Days ago
                              </span>
                              <div className="review-count rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                              </div>
                            </div>
                            <p className="comment-content">
                              Alfred is a brilliant and self-motivated C.E.O who understands what his clients wants. First time I met him I could resist myself to trust him with all my investment and insurance plans
                            </p>
                            <div className="comment-reply">
                              <Link className="comment-btn" to="#">
                                <i className="fas fa-reply" /> Reply
                              </Link>
                              <p className="recommend-btn">
                                <span>Recommend?</span>
                                <Link to="#" className="like-btn">
                                  <i className="far fa-thumbs-up" /> Yes
                                </Link>
                                <Link to="#" className="dislike-btn">
                                  <i className="far fa-thumbs-down" /> No
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* /Comment Reply */}
                  </li>
                  {/* /Comment List */}
                  {/* Comment List */}
                  <li>
                    <div className="comment">
                      <img
                        className="avatar avatar-sm rounded-circle"
                        alt="User Image"
                      // src={patient2}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Monicah Wambaire</span>
                          <span className="comment-date">Reviewed 4 Days ago</span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p className="comment-content">
                          His meticulous analysis of client needs, combined with his comprehensive understanding of insurance products, consistently ensures tailored coverage solutions. His outstanding communication skills and unwavering commitment to providing top-tier service truly set him apart as a valuable asset to Hisa and his clients alike.
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#">
                            <i className="fas fa-reply" /> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#" className="like-btn">
                              <i className="far fa-thumbs-up" /> Yes
                            </Link>
                            <Link to="#" className="dislike-btn">
                              <i className="far fa-thumbs-down" /> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* /Comment List */}
                </ul>
                {/* Show All */}
                <div className="all-feedback text-center">
                  <Link
                    to="#"
                    className="btn btn-primary btn-sm"
                  >
                    Show all feedback <strong>(167)</strong>
                  </Link>
                </div>
                {/* /Show All */}
              </div>
              {/* /Review Listing */}
              {/* Write Review */}
              <div className="write-review">
                <h4>
                  Write a review for <strong> C.E.O Alfred Mathu</strong>
                </h4>
                {/* Write Review Form */}
                <form>
                  <div className="form-group">
                    <label>Review</label>
                    <div className="star-rating">
                      <input
                        id="star-5"
                        type="radio"
                        name="rating"
                        defaultValue="star-5"
                      />
                      <label
                        htmlFor="star-5"
                        title="5 stars"
                      >
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-4"
                        type="radio"
                        name="rating"
                        defaultValue="star-4"
                      />
                      <label
                        htmlFor="star-4"
                        title="4 stars"
                      >
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-3"
                        type="radio"
                        name="rating"
                        defaultValue="star-3"
                      />
                      <label
                        htmlFor="star-3"
                        title="3 stars"
                      >
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-2"
                        type="radio"
                        name="rating"
                        defaultValue="star-2"
                      />
                      <label
                        htmlFor="star-2"
                        title="2 stars"
                      >
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-1"
                        type="radio"
                        name="rating"
                        defaultValue="star-1"
                      />
                      <label
                        htmlFor="star-1"
                        title="1 star"
                      >
                        <i className="active fa fa-star" />
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Title of your review</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="If you could say it in one sentence, what would you say?"
                    />
                  </div>
                  <div className="form-group">
                    <label>Your review</label>
                    <textarea
                      id="review_desc"
                      maxLength={100}
                      className="form-control"
                      defaultValue={''}
                    />
                    <div className="d-flex justify-content-between mt-3">
                      <small className="text-muted">
                        <span id="chars">100</span> characters remaining
                      </small>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <div className="terms-accept">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="terms_accept"
                        />
                        <label htmlFor="terms_accept">
                          I have read and accept{' '}
                          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                    >
                      Add Review
                    </button>
                  </div>
                </form>
                {/* /Write Review Form */}
              </div>
              {/* /Write Review */}
            </div>
            {/* /Reviews Content */}
            {/* Business Hours Content */}
            <div
              role="tabpanel"
              id="doc_business_hours"
              className="tab-pane fade"
            >
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  {/* Business Hours Widget */}
                  <div className="widget business-widget">
                    <div className="widget-content">
                      <div className="listing-hours">
                        <div className="listing-day current">
                          <div className="day">
                            Today <span>12 August 2023</span>
                          </div>
                          <div className="time-items">
                            <span className="open-status">
                              <span className="badge bg-success-light">
                                Open Now
                              </span>
                            </span>
                            <span className="time">07:00 AM - 06:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Monday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 06:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Tuesday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 06:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Wednesday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 06:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Thursday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 06:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Friday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 06:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Saturday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 06:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day closed">
                          <div className="day">Sunday</div>
                          <div className="time-items">
                            <span className="time">
                              <span className="badge bg-danger-light">
                                Closed
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Business Hours Widget */}
                </div>
              </div>
            </div>
            {/* /Business Hours Content */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
