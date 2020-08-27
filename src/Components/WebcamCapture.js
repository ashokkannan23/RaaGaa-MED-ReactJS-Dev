import React from 'react'
import Webcam from "react-webcam";
import './CSS/screenshotimage.css'

function WebcamCapture(props) {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);


    const capture = React.useCallback((event) => {
      event.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      }, [webcamRef, setImgSrc]);


    
    // const opencamera = false;
  
   
  return (
    <>
    <div className="row">
        <div className="col-sm-6">
        {props.cameraonoff ? <Webcam
        forceScreenshotSourceSize={false}
        mirrored = {true}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
      /> : null}

    
    </div>
    <div className="col-sm-4 offset-sm-2 screenshotpreviw">
                <div style={{border:'0.5px solid #808080',width:'150px',height:'150px',textAlign:'center'}}>
                  
                {imgSrc && (
                <img src={imgSrc} style={{width:'150px',height:'150px',border:'1px solid white'}}alt="preview"/>
                )}
                </div>
                 <button onClick={capture} style={{display:'block'}}>Take Snapshot</button>
                 {/* <button onClick={opencamersbutton}>Take Snapshot</button> */}
    </div>
    </div>
  </>
  )
}

export default WebcamCapture

// import React, {Component} from 'react';
// import Webcam from "react-webcam";
// import './CSS/screenshotimage.css'

// class WebcamCapture extends Component {
//    constructor(props) {
//      super(props)
   
//      this.state = {
//         accesscamera:false
//      }
//    }
   
//    opencamersbutton = (event) =>{
//     event.preventDefault();
//      this.setState({
//       accesscamera:true
//      })
//    }
//    capture = (event) =>{
//     event.preventDefault();
//     this.setState({
//      accesscamera:false
//     })
//    }
  
//     render() {
//       let cameramater = this.state.accesscamera;
      
     

//       return(
//   <>
//     <div className="row">
//         <div className="col-sm-6">
//         {cameramater ? <Webcam
//         width={250}
//         /> : null}

    
//     </div>
//     <div className="col-sm-4 offset-sm-2 screenshotpreviw">
//                 <div style={{border:'0.5px solid #808080',width:'150px',height:'150px',textAlign:'center'}}>
                  
//                 {/* {imageSrc && (
//                 <img src={imageSrc} style={{width:'150px',height:'150px',border:'1px solid white'}}alt="preview"/>
//                 )} */}
//                 </div>
//                  <button onClick={this.capture} style={{display:'block'}}>Take Snapshot</button>
//                  <button onClick={this.opencamersbutton}>Open Camera</button>
//     </div>
//     </div>
//   </>
//   )
// }
// }

// export default WebcamCapture
