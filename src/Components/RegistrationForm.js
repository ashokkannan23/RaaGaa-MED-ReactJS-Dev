import React, {Component} from 'react'
import './CSS/Formsetstye.css'

class RegistrationForm extends Component {

    render() {
        return (
            <form>
                <div className="row Formsetstye">
                    <div className="col-sm-12 Requiredfieldspace">
                        <span className="Requiredfield">*</span>
                        Required Field
                    </div>
                    <div className="col-sm-6">
                        <label>Official Info:</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option disabled selected hidden>Select Branch Hospital</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label>Contact Details:</label>
                        <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="Mobile Number"
                            id="number"/>
                    </div>
                    <div className="col-sm-6">
                    <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="UHID *"
                            id="number"/>
                    </div>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="Alternative Mobile Number"
                            id="number"/>
                    </div>
                    <div className="col-sm-6">
                    <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="Aadhar Number"
                            id="number"/>
                    </div>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="Email ID"
                            id="number"/>
                    </div>
                </div>
            </form>

        )
    }
}

export default RegistrationForm
