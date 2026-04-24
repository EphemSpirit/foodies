"use client";

import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css"
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState()
  const imageRef = useRef()

  const handleImageClick = () => {
    imageRef.current.click();
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="user selected image" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handleImageClick}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}

export default ImagePicker