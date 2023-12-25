import React, { useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
    const [camerType, setCameraType] = useState("user");

    const flipCamera = () => {
        if (camerType == "user") {
            setCameraType("selfie");
        } else setCameraType("user");
        console.log(camerType);
    };
    return (
        <div>
            <Webcam
                videoConstraints={{
                    facingMode: camerType,
                }}
            />
            <button className="text-white" onClick={flipCamera}>
                flip
            </button>
        </div>
    );
};

export default Camera;
