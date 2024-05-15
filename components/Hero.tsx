"use client"
import React from "react";
import "../app/drip.css";
import Ensonpokes from "@/public/images/ensonpokes-brighter.png"
import Image from "next/image";

function Hero() {
    const threewords:String[] = ['queer.', 'columbus.', 'poke.']

    return (
            <>
            <Image
            src={Ensonpokes}
            width={800}
            className="absolute top-20"
            alt="ensonpokes">
            </Image>
            <div className="my-8 text-4xl text-black"><span className="px-6">{threewords[0]}</span><span className="px-6">{threewords[1]}</span><span className="px-6">{threewords[2]}</span></div>
            </>
    );
}

export default Hero;