import React from "react";
import Camera from "../components/Camera";
import Header from "../components/Header";
import StorgaeMessage from "../components/StorgaeMessage";

const Home = () => {
    return (
        <div className="bg-black h-screen w-screen">
            <Header />
            <Camera />
            <StorgaeMessage />
        </div>
    );
};

export default Home;
