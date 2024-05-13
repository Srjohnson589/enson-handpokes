"use client"
import React from "react";
import "../app/drip.css";
import Link from "next/link";

function Hero() {
    return (
            <>
            <div className="heroparent">
                <div className="custom-shape-divider-bottom-1715607337">
                    <div className="hero-height"></div>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
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