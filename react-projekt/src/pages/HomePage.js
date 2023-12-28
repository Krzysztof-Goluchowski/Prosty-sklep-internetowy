import React from "react";
import '../App.css';
import NavHeader from "../components/NavHeader";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Temporary from "../components/Temporary";
import FirstBlockHomePage from "../components/FirstBlockHomePage";
import SecondBlockHomePage from "../components/SecondBlockHomePage";
import NiceBackgroudImage from "../components/NiceBackgroudImage";
import ThirdBlockHomePage from "../components/ThirdBlockHomePage";

function HomePage() {
    return (
        <div>
            <NavHeader>
                <Logo/>
                <NavBar/>
            </NavHeader>
            <Temporary/>
            <FirstBlockHomePage/>
            <SecondBlockHomePage/>
            <NiceBackgroudImage/>
            <ThirdBlockHomePage/>
        </div>
    );
}

export default HomePage;