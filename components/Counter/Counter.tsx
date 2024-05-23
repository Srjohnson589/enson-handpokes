"use client"
import React, { useState } from "react";
import "./counter.css";

function Counter() {
    const [numTattoos, setNumTattoos] = useState<number>(0);

    return (
        <>
        <div className="wrapper">
            <div className="container-c whitespace-nowrapS">
                <span className="num text-3xl"></span>
                <span className="text text-3xl whitespace-nowrap">of Tattoos Bestowed</span>
            </div>
        </div>
        </>
    );
}

export default Counter;