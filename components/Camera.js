import React, { useState } from "react";
import Webcam from "react-webcam";
import Footer from "./Footer";

const Camera = () => {
    const [camerType, setCameraType] = useState("environment");

    const flipCamera = () => {
        if (camerType == "user") {
            setCameraType("environment");
        } else setCameraType("user");
        console.log(camerType);
    };
    return (
        <div>
            <div className="bg-[#131313] h-[65vh]  overflow-hidden">
                <Webcam
                    className="blur-md "
                    videoConstraints={{
                        facingMode: { exact: camerType },
                    }}
                    mirrored={camerType == "user"}
                />
            </div>
            <Footer flipCamera={flipCamera} />
        </div>
    );
};

export default Camera;
