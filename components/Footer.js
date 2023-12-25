import React, { useState } from "react";
import Modes from "./Modes";

const Footer = ({ flipCamera }) => {
    const [mode, setMode] = useState("PHOTO");
    return (
        <div className="bg-black  px-5 ">
            <Modes mode={mode} setMode={setMode} />
            <div className="flex items-center mt-3">
                <div className="flex-1 flex justify-start">
                    <div className="border border-black overflow-hidden">
                        <img
                            className="h-[3.25rem] w-[3.25rem] blur-sm"
                            alt="preview"
                            src="https://picsum.photos/100/100"
                        />
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        className="h-20"
                        alt="flip"
                        src={
                            ["PHOTO", "PORTRAIT", "PANO"].includes(mode)
                                ? "./assets/circle.png"
                                : "./assets/circle-red.png"
                        }
                    />
                </div>
                <div className="flex-1 flex justify-end">
                    <img
                        onClick={flipCamera}
                        className="p-3 h-12 bg-[#262626] rounded-[50%] rotate-90"
                        alt="flip"
                        src="./assets/loop.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
