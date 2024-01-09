import React, { useState } from "react";
import Tesseract from "tesseract.js";

const UploadImage = () => {
  const [text, setText] = useState("");

  const upscaleImage = async (img) => {
    const scaleFactorWidth = 1000 / img.width > 1 ? 1000 / img.width : 1;
    const scaleFactorHeight = 1000 / img.height > 1 ? 1000 / img.height : 1;
    const scaleFactor = Math.max(scaleFactorWidth, scaleFactorHeight);

    const canvas = document.createElement("canvas");
    canvas.width = img.width * scaleFactor;
    canvas.height = img.height * scaleFactor;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL();
  };

  const recognizeTextFromImage = async (image) => {
    const worker = await Tesseract.createWorker("eng");
    const result = await worker.recognize(image);
    //console.log({ result });
    worker.terminate();
    return result;
  };

  const handleImageChange = async (event) => {
    const imageFile = event.target.files[0];
    const img = new Image();
    const _URL = window.URL || window.webkitURL;

    img.onload = async () => {
      // const upscaledImage = await upscaleImage(img);
      const recognizedText = await recognizeTextFromImage(img);
      setText(recognizedText.data.text);
    };

    img.onerror = () => {
      alert("Not a valid file: " + imageFile.type);
    };

    img.src = _URL.createObjectURL(imageFile);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <p>{text}</p>
    </div>
  );
};

export default UploadImage;
