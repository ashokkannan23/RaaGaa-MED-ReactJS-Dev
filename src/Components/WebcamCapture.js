import React from 'react'
import Webcam from "react-webcam";
import './CSS/screenshotimage.css'

function WebcamCapture() {


    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);


    const capture = React.useCallback((event) => {
      event.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      }, [webcamRef, setImgSrc]);


  
    
  
   
  return (
    <>
    <div className="row">
        <div className="col-sm-6">
       
    <Webcam
      audio={false}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      width={300}
    />
    
    
    </div>
    <div className="col-sm-4 offset-sm-2 screenshotpreviw">
                <div style={{border:'0.5px solid #808080',width:'150px',height:'150px',textAlign:'center'}}>
                  
                {imgSrc && (
                <img src={imgSrc} style={{width:'150px',height:'150px',border:'1px solid white'}}alt="preview"/>
                )}
                </div>
                 <button onClick={capture}>Take Snapshot</button>
                 {/* <button onClick={}>Take Snapshot</button> */}
    </div>
    </div>
  </>
  )
}

export default WebcamCapture
