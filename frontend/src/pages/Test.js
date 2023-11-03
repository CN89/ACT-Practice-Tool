import React from "react";
import '../index.css';
import Hero from "../components/Test/Hero";
import TypesOfTest from "../components/Test/TypesOfTest";

function Test (props) {
    return (
        <div className="test">
            <Hero/>
            <TypesOfTest />

        </div>
    )
}

export default Test;