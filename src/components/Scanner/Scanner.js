import React, { useState } from "react";
import QrScanner from "qr-scanner";

const QrCodeScanner = () => {
  const [qrCodeText, setQrCodeText] = useState("");
  const [error, setError] = useState("");

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      setError("No file selected.");
      return;
    }

    try {
      //console.log("Scanning image...");
      const result = await QrScanner.scanImage(file);
      //console.log("QR Code found:", result);
      setQrCodeText(result);
      setError("");
    } catch (err) {
      console.error("Error scanning image:", err);
      setError("No QR code found.");
      setQrCodeText("");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {qrCodeText && <p>QR Code Text: {qrCodeText}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default QrCodeScanner;
