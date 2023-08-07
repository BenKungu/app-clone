import { Table } from 'antd';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from "react-router-dom";
import { itemRender, onShowSizeChange } from '../../components/paginationfunction';
import DoctorSidebar from './../../components/doctor-sidebar';

const AppointmentList = () => {
  const data = [
		{ id: 1, DoctorName: "Dr. Darren Elder", Speciality: "Dental ",PatientName:'Travis Trimble',Earned:'$5000.00 ', Date: '	5 Nov 2019',time:'11.00 AM - 11.35 AM',Amount:'$300.00', image: "",images1: "", Status: "checkbox" },
		
	
	  ];
  const columns = [
    {
      title: 'Doctor Name',
      dataIndex: 'DoctorName',
      render: (text,record) => (
        <><Link className="avatar mx-2" to="/admin/profile"><img className="rounded-circle" src={record.image} /></Link>
        <Link to="/admin/profile" className="text-decoration-none" >{text}</Link></>
      ),
      sorter: (a, b) => a.DoctorName.length - b.DoctorName.length,

    },
    {
      title: 'Speciality',
      dataIndex: 'Speciality',
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
    },

    {
      title: 'Patient Name',
      dataIndex: 'PatientName',
      render: (text, record) => (
        <><Link className="avatar mx-2" to="/admin/profile"><img className="rounded-circle" src={record.images1} /></Link>
          <Link to="/admin/profile">{text}</Link></>
      ),
      sorter: (a, b) => a.PatientName.length - b.PatientName.length,
    },

    {
      title: 'Apointment Time',
      render:(record)=>(
        <>
        <span className="user-name">{record.Date}</span><br/>
        <span className="d-block">{record.time}</span></>
        ),      sorter: (a, b) => a.Date.length - b.time.length,
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      render: (text, record) => {
        return (
         <div className="status-toggle">
           <input
           id={`rating${record?.id}`}
           className="check"
           type="checkbox"
           defaultChecked="false"
           />
           <label
           htmlFor={`rating${record?.id}`}
           className="checktoggle checkbox-bg"
           >
           checkbox
           </label>
         </div>
         )},
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    }
  ]
  return (
    <>
       
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <DoctorSidebar />
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Appointments</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Appointments</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      pagination={{
                        total: data.length,
                        showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                      }}
                      style={{ overflowX: 'auto' }}
                      columns={columns}
                      dataSource={data}
                      rowKey={record => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AppointmentList



