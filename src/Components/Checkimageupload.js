import React, { Component } from 'react'

import ImageUploading from "react-images-uploading";

 
const maxNumber = 10;
const maxMbFileSize = 5 * 1024 * 1024; // 5Mb

class checkimageupload extends Component {
    onChange = (imageList) => {
        // data for submit
        console.log(imageList);
      };
      onError = (errors, files) => {
        console.log(errors, files);
      };
  render() {
    return (
        <ImageUploading
        onChange={this.onChange}
        maxNumber={maxNumber}
        multiple
        maxFileSize={maxMbFileSize}
        acceptType={["jpg", "gif", "png"]}
        onError={this.onError}
      >
        {({ imageList, onImageUpload, onImageRemoveAll }) => (
          // write your building UI
          <div>
            <button onClick={onImageUpload}>Upload images</button>
            <button onClick={onImageRemoveAll}>Remove all images</button>
 
            {imageList.map((image) => (
              <div key={image.key}>
                <img alt="display" src={image.dataURL} width="150px" height="150px"/>
                <button onClick={image.onUpdate}>Update</button>
                <button onClick={image.onRemove}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    )
  }
}

export default checkimageupload
