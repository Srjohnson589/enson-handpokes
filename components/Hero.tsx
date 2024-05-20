"use client"
import React from "react";
import "./Nav/nav.css";

function Hero() {
    const threewords:String[] = ['INCLUSIVITY', 'INTENTIONALITY', 'SAFETY']

    return (
            <>
            <div className="p-8 pb-24 bg-[#90c8ff] text-center text-4xl text-black flex flex-column">
                <h2 className="px-6">{threewords[0]}</h2>
                <h2 className="px-6">{threewords[1]}</h2>
                <h2 className="px-6">{threewords[2]}</h2>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(144, 200, 255)" fill-opacity="1" d="M0,0L205.7,96L411.4,0L617.1,160L822.9,32L1028.6,64L1234.3,0L1440,64L1440,0L1234.3,0L1028.6,0L822.9,0L617.1,0L411.4,0L205.7,0L0,0Z"></path></svg>
            </>
    );
}

export default Hero;