import React, { Component } from 'react'
import './CSS/Imageupload.css'

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
      }
    
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let files = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: files,
            imagePreviewUrl: reader.result
          });
        }
       if(files){
        reader.readAsDataURL(files)
       }
      }
    
      render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img alt="Preview" src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Image Preview</div>);
        }
    
        return (
          <div className="previewComponent">
             <div className="imgPreview">
              {$imagePreview}
            </div>
            <form onSubmit={(e)=>this._handleSubmit(e)}>
            
              <input className="fileInput" 
                type="file" 
                onChange={(e)=>this._handleImageChange(e)} />
                <div>
              
                </div>
                
            </form>
          </div>
        )
      }
    }

export default ImageUpload
