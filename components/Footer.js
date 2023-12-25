import React from "react";

const Footer = ({ flipCamera }) => {
    return (
        <div className="bg-black mt-14 px-5 ">
            <div className="flex items-center">
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
                        src="./assets/circle.png"
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
