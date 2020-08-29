import React from 'react';
import './CSS/BodyContent.css';
// import RegistrationForm from './RegistrationForm'
import RegisterForm from './RegisterForm'

function BodyContent() {
    return (
        <>
            <div className="gallery-wrap">
                <div className="item item-1">
                    <div className="hide">
                        {/* <RegistrationForm /> */}
                        <RegisterForm />
                     </div>
                    <h2 className="registrationTitle">Registration</h2>
                </div>
                <div className="item item-2">
                    <h2>
                        Patient Appointment
                    </h2>
                </div>
                <div className="item item-3">
                    <h2>Medical Report</h2>
                </div>
                <div className="item item-4">
                    <h2>Appoinment History</h2>
                </div>
                <div className="item item-5">
                    <h2>Straffs List</h2>
                </div>
                <div className="item item-6">
                    <h2>List</h2>
                </div>
                <div className="item item-7">
                    <h2>Empty</h2>
                </div>
                <div className="item item-8">
                    <h2>Empty List</h2>
                </div>
            </div>
        </>
    )
}

export default BodyContent
