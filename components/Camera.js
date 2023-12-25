import React, { useRef, useEffect } from "react";

const Camera = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const initCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing camera:", error);
            }
        };

        initCamera();

        return () => {
            // Cleanup: Stop the camera stream when the component is unmounted
            if (videoRef.current) {
                const stream = videoRef.current.srcObject;
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach((track) => track.stop());
                }
            }
        };
    }, []);

    return (
        <div>
            <h2>Camera Component</h2>
            <video ref={videoRef} autoPlay playsInline />
        </div>
    );
};

export default Camera;
