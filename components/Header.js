import React from "react";

const Header = () => {
    return (
        <div className="bg-black h-[4.5rem] ">
            <div className="flex items-start px-4">
                <div className="flex items-center flex-1 gap-3">
                    <img
                        className="h-6 border border-[#999999] rounded-[50%] p-1"
                        alt="flash"
                        src="./assets/flash-active.png"
                    />
                    <img
                        className="h-6 border border-[#999999] rounded-[50%] p-1"
                        alt="night"
                        src="./assets/night-mode.png"
                    />
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        className="h-7  rounded-[50%] p-1 bg-[#262626]"
                        alt="collapse"
                        src="./assets/collapse-arrow.png"
                    />
                </div>
                <div className="flex-1 flex justify-end ">
                    <img
                        className="h-7"
                        alt="live"
                        src="./assets/live-photos.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
