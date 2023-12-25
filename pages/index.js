import React from "react";
import Camera from "../components/Camera";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="bg-black h-screen w-screen">
            <Header />
            <Camera />
        </div>
    );
};

export default Home;
