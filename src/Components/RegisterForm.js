import React, {useState} from 'react'
import './CSS/Form.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import "yup-phone";
import ImageUpload from './ImageUpload'
import WebcamCapture from './WebcamCapture'


const initialValues = {
    uhid:'',
    patient:'ashok',
    parentspouse:'',
    email:'',
    mobileno:'',
    altmobileno:'',
    address:'',
    aadharno:'',
    passport:''
}

const onSubmit = values => {
    console.log('Form data', values)
}



 const validationSchema = Yup.object({
    uhid: Yup.string().required('Required!'),
    patient: Yup.string().required('Required!'),
    parentspouse:Yup.string().required('Required!'),
    email:Yup.string().required('Required!').email('Invalid Email'),
    mobileno:Yup.string().phone("IN", true, 'Mobile no must be a valid phone number').required('Required!'),
    altmobileno:Yup.string().phone("IN", true, 'Mobile no must be a valid phone number'),
    address:Yup.string().required('Required!'),
    aadharno:Yup.string().matches(/^[0-9]{12}$/, 'Aadhar no must be 12 digit').required('Required!'),
    passport:Yup.string().length(8, 'Passport must be 8 character')
 })

function RegisterForm() {

    const formik = useFormik({
        initialValues,
            onSubmit,
            validationSchema
            // validate
    })

    console.log('form visited', formik.touched)

    const [allowwebcamera, cameraoff] = useState(false)
    // const [selectedhospital] = useState("selected")
    

    function uploadImage(e){
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
        
        cameraoff(false);
    }

    function capturePhoto(e) {
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
        
        cameraoff(true);
    }
    function cancel(){

    }


  return (
    <form className="formSize" onSubmit={formik.handleSubmit}>
    <div className="row Formsetstye">
        <div className="col-sm-12 Requiredfieldspace">
            <span className="Requiredfield">*</span>
            Required Field
        </div>
        <div className="col-sm-6 padddingbottom">
            <label>Official Info:</label>
            <select  onChange='' placeholder="select options" className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                {/* <option disabled  hidden value='selected'>Select Branch Hospital</option> */}
                <option key="select options" value=''></option>
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
                name="mobileno"
                {...formik.getFieldProps('mobileno')} />
                {formik.touched.mobileno && formik.errors.mobileno ? 
                (<span className="errormessage">{formik.errors.mobileno}</span>) : null}
        </div>
        <div className="col-sm-6 padddingbottom">
            <input
                type="text"
                className="form-control bg-dark"
                placeholder="UHID *"
                id="number"
                name="uhid"
                {...formik.getFieldProps('uhid')} />
                {formik.touched.uhid && formik.errors.uhid ? 
                (<span className="errormessage">{formik.errors.uhid}</span>) : null}
        </div>
        <div className="col-sm-6 padddingbottom">
            <input
                type="text"
                className="form-control bg-dark"
                placeholder="Alternative Mobile Number"
                id="number"
                name="altmobileno"
                {...formik.getFieldProps('altmobileno')}/>
                {formik.touched.altmobileno && formik.errors.altmobileno ? 
                (<span className="errormessage">{formik.errors.altmobileno}</span>) : null}
        </div>
        <div className="col-sm-6 padddingbottom">
            <input
                type="text"
                className="form-control bg-dark"
                placeholder="Aadhar Number"
                id="number"
                name='aadharno'
                {...formik.getFieldProps('aadharno')}/>
                {formik.touched.aadharno && formik.errors.aadharno ? 
                (<span className="errormessage">{formik.errors.aadharno}</span>) : null}
                
        </div>
        <div className="col-sm-6 padddingbottom">
            <input
                type="email"
                className="form-control bg-dark"
                placeholder="Email ID"
                name='email'
                {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? 
                (<span className="errormessage">{formik.errors.email}</span>) : null}
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
                        id="number"
                        name='patient'
                        {...formik.getFieldProps('patient')}/>
                        {formik.touched.patient && formik.errors.patient ? 
                (<span className="errormessage">{formik.errors.patient}</span>) : null}
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
                        id="number"
                        name='parentspouse'
                        {...formik.getFieldProps('parentspouse')} />
                        {formik.touched.parentspouse && formik.errors.parentspouse ? 
                (<span className="errormessage">{formik.errors.parentspouse}</span>) : null}
                </div>
            </div>
        </div>
        <div className="col-sm-6 padddingbottom">
            <textarea
                className="form-control bg-dark"
                id="exampleFormControlTextarea1"
                placeholder="Address"
                rows="1"
                name='address'
                {...formik.getFieldProps('address')}></textarea>
                {formik.touched.address && formik.errors.address ? 
                (<span className="errormessage">{formik.errors.address}</span>) : null}
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
                id="number"
                name="passport"
                {...formik.getFieldProps('passport')}/>
                {formik.touched.passport && formik.errors.passport ? 
                (<span className="errormessage">{formik.errors.passport}</span>) : null}
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
            <button className="submitButton" onClick={uploadImage}>Upload Photo</button>

        </div>
        <div className="col-sm-6 padddingbottom" style={{textAlign:'center'}}>
            <button className="submitButton" onClick={capturePhoto}>Capture Photo</button>

        </div>

        <div className="col-sm-12 padddingbottom" id="UploadImagefromcomputer">
            <ImageUpload/>
        </div>
        <div className="col-sm-12 padddingbottom" id="Captureimagefromwebcam">
            <WebcamCapture cameraonoff={allowwebcamera}/>
         </div>
        </div>
        </div>
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
                
                <input type="button" className="btn btn-danger" value="Reset" onClick={cancel}/>
                <button type="submit" className="btn btn-info">Save & Next</button>
            </div>
        </div>
    </div>
</form>
  )
}

export default RegisterForm
