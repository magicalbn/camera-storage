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
            <div className="bg-[#000] h-[66vh]  overflow-hidden relative">
                <div className="h-6 w-6 bg-[#0000] absolute top-0 left-0 border-l border-t border-[#adadad] z-40"></div>
                <div className="h-6 w-6 bg-[#0000] absolute top-0 right-0 border-r border-t border-[#adadad] z-40"></div>
                <div className="h-6 w-6 bg-[#0000] absolute bottom-0 left-0 border-l border-b border-[#adadad] z-40"></div>
                <div className="h-6 w-6 bg-[#0000] absolute bottom-0 right-0 border-r border-b border-[#adadad] z-40"></div>
                <div class="grid grid-cols-3 absolute h-[66vh] w-screen z-40">
                    {/* <!-- Row 1 --> */}
                    <div class="col-span-1  border-r  border-[#adadad]"></div>
                    <div class="col-span-1 border-r p-4 border-[#adadad]"></div>
                    <div class="col-span-1 p-4"></div>

                    {/* <!-- Row 2 --> */}
                    <div class="col-span-1 border border-l-0 p-4 border-[#adadad]"></div>
                    <div class="col-span-1 border-t border-b p-4 border-[#adadad]"></div>
                    <div class="col-span-1 border border-r-0 p-4 border-[#adadad]"></div>

                    {/* <!-- Row 3 --> */}
                    <div class="col-span-1 border-r p-4 border-[#adadad]"></div>
                    <div class="col-span-1 border-r p-4 border-[#adadad]"></div>
                    <div class="col-span-1 p-4"></div>
                </div>

                <Webcam
                    className="blur-sm"
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
