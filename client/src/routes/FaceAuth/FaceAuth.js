import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";

const FaceAuth = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Webcam
        audio={false}
        mirrored={true}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} />}
    </>
  );
};

export default FaceAuth;
