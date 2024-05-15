"use client"
import React from "react";
import "../app/drip.css";
import Ensonpokes from "@/public/images/ensonpokes-brighter.png"
import Link from "next/link";
import Image from "next/image";

function Nav() {
    return (
            <>
            <div className="heroparent">
{/* Nav bar */} 
                    <div className="navbar absolute px-10 z-10">
                        <div className="navbar-start">
                            <a><Link href={'/work'}>My work</Link></a>   
                        </div>
                        <div className="navbar-center">
                            <Link href={'/'}></Link>
                        </div>
                        <div className="navbar-end">
                            <a><Link href={'/contact'} className="bg-blue-400 px-4 py-2 rounded">Book</Link></a>
                        </div>
                    </div>
                <div className="custom-shape-divider-bottom-1715607337 -z-10">
{/* wavy red section */}
                    <div className="hero-height"></div>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
{/* Falling Bubbles */}

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
            </div>
            </div>
            </>
    );
}

export default Nav;