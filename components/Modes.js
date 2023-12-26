import React, { useEffect, useRef } from "react";

const Modes = ({ mode, setMode }) => {
    const containerRef = useRef();

    useEffect(() => {
        // Scroll to center the active mode when it changes
        if (containerRef.current && mode) {
            const containerWidth = containerRef.current.clientWidth;
            const activeElement = containerRef.current.querySelector(
                `[data-mode="${mode}"]`
            );

            if (activeElement) {
                const scrollLeft =
                    activeElement.offsetLeft -
                    containerWidth / 2 +
                    activeElement.clientWidth / 2 -
                    16;
                containerRef.current.scrollTo({
                    left: scrollLeft,
                    behavior: "smooth",
                });
            }
        }
    }, [mode]);

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
            <div
                className="flex gap-10 overflow-x-auto scrollbar-hide pl-[8.3rem] pr-[10rem]"
                ref={containerRef}
            >
                {modesList.map((each) => {
                    return (
                        <p
                            data-mode={each}
                            className={` whitespace-nowrap text-[12px] font-[800] ${
                                mode == each ? "text-[#ffcc00]" : "text-white"
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
