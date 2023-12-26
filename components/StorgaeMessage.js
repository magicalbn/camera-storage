import React from "react";

const StorgaeMessage = () => {
    return (
        <div className="absolute bg-[#252525] text-white top-[47%] left-[50%]  rounded-[1rem] max-w-[270px] w-[75vw] translate-y-[-50%] translate-x-[-50%] z-50">
            <p className="text-[#fefefe] text-center font-bold text-lg p-5 pb-0">
                iPhone Storage Full
            </p>
            <p className="text-[#fefefe] text-center p-5 pt-0 text-sm line leading-4">
                You do not have enough storage to take a photo. Free up space by
                deleting unneeded apps, videos, or music.
            </p>

            <div className="flex border-t border-[#373737]">
                <div
                    onClick={() => window.close()}
                    className="flex-1 h-12 flex justify-center items-center border-r border-[#373737]"
                >
                    <p className=" text-center text-[#3e8fec] font-[400]">
                        Not Now
                    </p>
                </div>
                <div className="flex-1 h-12 flex justify-center items-center">
                    <p className="flex-1 text-center text-[#3e8fec] font-bold">
                        Manage
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StorgaeMessage;
