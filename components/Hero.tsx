"use client"
import React from "react";
import "../app/drip.css";
import Link from "next/link";

function Hero() {
    return (
            <>
            <div className="heroparent">
                <div className="wavecont">
                    <div className="wave"></div>
                </div>
                <div className="herocont">
                    <div className="cont">
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <div className="drip"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                        </svg>
                        <div className="hero min-h-40 min-w-max">
                            <div className="hero-content text-center">
                                <h1 className="text-4xl text-black"><span className="px-6">HAND.</span><span className="px-6">POKE.</span><span className="px-6">TATTOO.</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}

export default Hero;