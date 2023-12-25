import React from "react";

const Modes = ({ mode, setMode }) => {
    const modesList = [
        "TIME-LAPSE",
        "SLO-MO",
        "VIDEO",
        "PHOTO",
        "PORTRAIT",
        "PANO",
    ];
    return (
        <div className="bg-black mt-4">
            <div className="flex gap-10 overflow-x-auto scrollbar-hide">
                {modesList.map((each) => {
                    return (
                        <p
                            className={`text-white whitespace-nowrap text-[12px] font-[800] ${
                                mode == each && "text-[#ffcc00]"
                            }`}
                            key={each}
                            onClick={() => setMode(each)}
                        >
                            {each}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default Modes;
