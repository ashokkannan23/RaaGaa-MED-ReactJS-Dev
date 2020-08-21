import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import './CSS/upload.css'

class ImageUploading extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
  render() {
    return (
        <ImageUploader
        withIcon={false}
        label=''
        buttonClassName='buttonchangestyle'
        buttonText='Choose images'
        buttonStyles={{color:'black',backgroundColor:'white'}}
        onChange={this.onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        singleImage={true}
        maxFileSize={5242880}
        withPreview={true}
        // fileContainerStyle={{backgroundColor:'transparent',border:'1px solid white',flex:'none',flexDirection:'row'}}
    />
    )
  }
}

export default ImageUploading
