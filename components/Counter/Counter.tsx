"use client"
import React, { useState } from "react";
import "./counter.css";

function Counter() {
    const [numTattoos, setNumTattoos] = useState<number>(0);

    return (
        <>
        <div className="wrapper w-full">
            <div className="container-c whitespace-nowrap">
                <span className="num text-6xl"></span>
                <span className="text text-6xl whitespace-nowrap">of Tattoos Bestowed</span>
            </div>
        </div>
        </>
    );
}

export default Counter;