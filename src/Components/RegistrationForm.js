import React, {Component} from 'react'
// import ReactDom from 'react-dom'

import './CSS/Formsetstye.css'
import ImageUpload from './ImageUpload'
// import ImageUploading from './ImageUploading' import Checkimageupload from
// './Checkimageupload'; import Dateofbirth from './Dateofbirth'
import WebcamCapture from './WebcamCapture'

// function PortalAll(){
//     return ReactDom.createPortal(<span>testing the content</span>,document.getElementById('nesteddiv')
//     )
// }

class RegistrationForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         captureimage:false,
         value:'selected'

      }
    }
    
    
        uploadImage = (e) => {
        e.preventDefault();
        var x = document.getElementById("UploadImagefromcomputer");
        var y = document.getElementById("Captureimagefromwebcam");
        console.log(x,y)
        if (window.getComputedStyle(x).display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        }else {
            x.style.display = "none";
        }
        this.setState({captureimage:false})
        
        
    }
    capturePhoto=(e)=> {
        e.preventDefault();
        let x = document.getElementById("UploadImagefromcomputer");
        let y = document.getElementById("Captureimagefromwebcam");
        console.log(x,y)
        if (window.getComputedStyle(y).display === "none") {
            y.style.display = "block";
            x.style.display = "none";
        }
        else {
            y.style.display = "none";
        }
        this.setState({captureimage:true})
        
    }

    handleChange = (event) =>{
        this.setState({value: event.target.value});
    }
    saveandnext = () =>{
        alert('dropdownvalue: ' + this.state.value);
    }


    render() {
        return (
            <form className="formSize">
                <div className="row Formsetstye">
                    <div className="col-sm-12 Requiredfieldspace">
                        <span className="Requiredfield">*</span>
                        Required Field
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <label>Official Info:</label>
                        <select value={this.state.value} onChange={this.handleChange} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option disabled  hidden value='selected'>Select Branch Hospital</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <label>Contact Details:</label>
                        <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="Mobile Number"
                            id="number"/>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="UHID *"
                            id="number"/>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="Alternative Mobile Number"
                            id="number"/>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="Aadhar Number"
                            id="number"/>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="Email ID"
                            id="number"/>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <label>Personal Info:</label>
                        <div className="row">
                            <div className="col-sm-4">
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option disabled selected hidden>Select</option>
                                    <option value="1">Mr.</option>
                                    <option value="2">Mrs.</option>
                                    <option value="3">Ms.</option>
                                    <option value="4">Miss</option>
                                </select>
                            </div>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control bg-dark"
                                    placeholder="Patient Name *"
                                    id="number"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <label>Address Info:</label>

                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option disabled selected hidden>Select Occuption</option>
                            <option value="1">1</option>
                            <option value="2">2.</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <div className="row">
                            <div className="col-sm-4">
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option disabled selected hidden>Select</option>
                                    <option value="1">Mr.</option>
                                    <option value="2">Mrs.</option>
                                    <option value="3">Ms.</option>
                                    <option value="4">Miss</option>
                                </select>
                            </div>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control bg-dark"
                                    placeholder="Parents/Spouse Name *"
                                    id="number"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <textarea
                            className="form-control bg-dark"
                            id="exampleFormControlTextarea1"
                            placeholder="Address"
                            rows="1"></textarea>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <div className="row">

                            <div className="col-sm-7 textalign">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio2"
                                        value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <input
                                    type="text"
                                    className="form-control bg-dark"
                                    placeholder="DOB *"
                                    id="number"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 padddingbottom">

                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option disabled selected hidden>Select Department</option>
                            <option value="1">1</option>
                            <option value="2">2.</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <input
                            type="text"
                            className="form-control bg-dark"
                            placeholder="Passport Number"
                            id="number"/>
                    </div>
                    <div className="col-sm-6 padddingbottom">

                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option disabled selected hidden>Select Consultant</option>
                            <option value="1">1</option>
                            <option value="2">2.</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="col-sm-12" style={{border:'1px solid white',borderRadius:'3px'}}>
                    <div className="row">
                    <div className="col-sm-6 padddingbottom" style={{textAlign:'center'}}>
                        <button className="submitButton" onClick={this.uploadImage}>Upload Photo</button>

                    </div>
                    <div className="col-sm-6 padddingbottom" style={{textAlign:'center'}}>
                        <button className="submitButton" onClick={this.capturePhoto}>Capture Photo</button>

                    </div>

                    <div className="col-sm-12 padddingbottom" id="UploadImagefromcomputer">
                        <ImageUpload/>
                    </div>
                    <div className="col-sm-12 padddingbottom" id="Captureimagefromwebcam">
                        <WebcamCapture cameraonoff={this.state.captureimage}/>
                     </div>
                    </div>
                    </div>
                    {/* <div className="col-sm-12 padddingbottom">
                        <ImageUploading />
                    </div> */}
                    {/* <div className="col-sm-12">
                        <Checkimageupload />
                    </div> */}
                    <div className="col-sm-6 padddingbottom">
                        <label>Mode of Payment:</label>

                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option disabled selected hidden>Select</option>
                            <option value="1">1</option>
                            <option value="2">2.</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="col-sm-6 padddingbottom">
                        <label>Refered by:</label>

                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option disabled selected hidden>Select</option>
                            <option value="1">1</option>
                            <option value="2">2.</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="col-sm-4 offset-sm-8">
                        <div
                            style={{
                            float: "right"
                        }}>
                            <button type="submit" className="btn btn-danger">Clear</button>
                            <input type="button" className="btn btn-info" value="Save & Next" onClick={this.saveandnext} />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default RegistrationForm