import React from "react";
import '../index.css';
import Container from "../components/Home/Container";
import Info from "../components/Home/Info";
import StartTesting from "../components/Home/StartTesting"

const Home = (props) => { 
    return (
        <div className="home">
            <Container />
            <StartTesting />
            <Info />
        </div>
    )
}

export default Home;