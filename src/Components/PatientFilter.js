import React from 'react';
import './CSS/PatientFilter.css';
import DateRange from './DateRange';
import $ from 'jquery';
// import {GoArrowLeft, GoArrowRight} from "react-icons/go";

function PatientFilter() {

    // -----Today Date------
    var today = new Date();
    var todaydate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    // -------Yesterday Date ------
    var currentDate = new Date();
    var yesterdayDate = new Date(currentDate);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    var yesterdayString = yesterdayDate.getDate() + '-' + (yesterdayDate.getMonth() + 1) + '-' + yesterdayDate.getFullYear();

    // ------Tomorrow Date------
    var currenttoday = new Date();
    var tomorrow = new Date(currenttoday);
    tomorrow.setDate(tomorrow.getDate() + 1);
    var tomorrowtext = tomorrow.getDate() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getFullYear();

    // --------Rotate Div-------

    function rotateDiv(){

        $('#Inpatientrotating').toggleClass('rotated');
        $('#Doctorrotating').toggleClass('rotated');
        $('#patientrotating').toggleClass('rotated');
    }

    return ( <> <div className="patientfilter">
        <div className="float-left">
            <div className="weekcenter">
                <span onClick={() => rotateDiv()}>This Week</span>
            </div>
            <div id="Inpatientrotating" className="InPatientcenter">
                <p>InPatient List</p>
                <span>32</span>
            </div>
            <div className="prev">
                {/* <GoArrowLeft size="20px" color="white"/> */}
                <span onClick={() => rotateDiv()}>Prev : {yesterdayString}</span>
            </div>
        </div>
        <div className="float-left">
            <div className="monthcenter">
                <span onClick={() => rotateDiv()}>This Month</span>
            </div>
            <div id="Doctorrotating" className="Doctorcenter">
                <p>Doctor List</p>
                <span>20</span>
            </div>
            <div className="today">
                <span onClick={() => rotateDiv()}>Today : {todaydate}</span>
            </div>
        </div>
        <div className="float-left">
            <div className="fromtocenter">
                <span><DateRange/></span>
            </div>
            <div id="patientrotating" className="Patientcenter">
                <p>Patient List</p>
                <span>12</span>
            </div>
            <div className="next">
                <span onClick={() => rotateDiv()}>Next : {tomorrowtext}</span>
                {/* <GoArrowRight size="20px" color="white"/> */}
            </div>
        </div>
    </div> </>
    )
}

export default PatientFilter