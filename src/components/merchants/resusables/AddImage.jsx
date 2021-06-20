import React, { useEffect, useRef, useState } from "react";

function AddImage({ handleImage }) {
  const { selectedImages, handleChange, handleDeleteImage } = handleImage;

  // useEffect(() => (value ? (inputRef.current.files = value) : null));

  return (
    <div className="add-image-parent">
      <input
        accept=".jpg,.png,.svg,.jfif"
        size="500"
        type="file"
        multiple
        name="images"
        onChange={handleChange}
      />
      <div className="add-image-con">
        <p>Add Image</p>
        <div className="selected-images-con">
          {selectedImages.map((image, index) => (
            <div className="image-card heart" key={image.size + index}>
              <div
                onClick={() => handleDeleteImage(image)}
                className="delete-image"
              >
                <i className="fa fa-times"></i>
              </div>
              <img src={URL.createObjectURL(image)} alt={image.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddImage;
