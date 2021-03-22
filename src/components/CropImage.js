import React, { useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import close from "../images/close.png";
const CropImage = () => {
  const [src, selectFile] = useState(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [imageArr, setImageArr] = useState([]);

  const handleFileChange = (e) => {
    selectFile(URL.createObjectURL(e.target.files[0]));
  };
  const [crop, setCrop] = useState({ aspect: 16 / 9 });

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL("image/jpeg");
    
    setImageArr([...imageArr, {
      src: base64Image,
      id: 'img'+imageArr.length
    }]);
    setResult(base64Image);
    
  }
  const handleDelete = (e) => {
    console.log(e.target.dataset.id);
    // console.log(e.target.dataset)
    // imageArr = 
    setImageArr(imageArr.filter((cut) => cut.id !== e.target.dataset.id))
  };

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <input type="file" accept="image/*" onChange={handleFileChange}/>

          {src && (
            <div>
              <ReactCrop
                src={src}
                onImageLoaded={setImage}
                crop={crop}
                onChange={setCrop}
              />
              <div className="float-end mt-4">
                <button className="btn btn-maroon mx-3" onClick={getCroppedImg}>
                  Save Crop
                </button>
                <button
                  className="btn btn-outline-maroon"
                  onClick={getCroppedImg}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="col-4 overflow-auto">
          <div className="container picContent">
            {imageArr &&
              imageArr.map((imgSrc) => (
                <div className="row mt-4 Container2">
                <div className="position-relative">
                  <button data-id={imgSrc.id} onClick={handleDelete} className="btn btn-outline-maroon position-absolute top-15 start-90 translate-middle rounded-circle">
                  <img src={close} alt="" /></button>
                  
                  <img
                    src={imgSrc.src}
                    data-id={imgSrc.id}
                    alt="cropped image"
                    className="img-fluid"
                  />
                </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropImage;
