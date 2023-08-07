import React from 'react';
import { Link } from 'react-router-dom';
// import Header from "../../header"
import Footer from "../../components/footer";
import Content from './content';
import Pagecontent from './pagecontent';


const DoctorProfile = () => {

	return (

		<div>
			{/* <Header {...props} /> */}
			<div className="breadcrumb-bar-two">
  <div className="container">
    <div className="row align-items-center inner-banner">
      <div className="col-md-12 col-12 text-center">
        <h2 className="breadcrumb-title">About Me</h2>
        <nav aria-label="breadcrumb" className="page-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
            <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
            Who is Alfred Mathu?
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
             </div>

			 <div className="content">
				<div className="container">

			<Pagecontent/>
			<Content/>
			</div>
			</div>
			<Footer />
			
		</div>
	);

}


export default DoctorProfile;