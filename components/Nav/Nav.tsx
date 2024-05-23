"use client"
import React from "react";
import "./nav.css";
import EnsonWall from "@/public/images/landing/ensonpokeswall2.jpg";
import Hamburger from "@/public/images/Hamburger menu.png";
import Image from "next/image";
import Link from "next/link";

function Nav() {

    return (
            <>
            <div className="heroparent">
                <div className="dropdown dropdown-end fixed top-16 right-5 z-10">
                    <div tabIndex={0} role="button"><Image alt="hamburger menu" src={Hamburger} width={60}></Image></div>
                    <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-white rounded-box w-52">
                        <li className="text-xl my-2"><a><Link href={'/'}>Home</Link></a></li>
                        <li className="text-xl my-2"><a><Link href={'/work'}>My work</Link></a></li>
                        <li className="text-xl my-2"><a><Link href={'/contact'}>Contact me</Link></a></li>
                    </ul>
                </div>
                <div className="custom-shape-divider-bottom-1715607337">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="200 0 1140 320"><path className="mypath" fill="#A3DCFF" fillOpacity="1" d="M0,320L24,293.3C48,267,96,213,144,170.7C192,128,240,96,288,101.3C336,107,384,149,432,154.7C480,160,528,128,576,96C624,64,672,32,720,37.3C768,43,816,85,864,112C912,139,960,149,1008,181.3C1056,213,1104,267,1152,245.3C1200,224,1248,128,1296,101.3C1344,75,1392,117,1416,138.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                </div>
                <Image
                    alt="ensonpokes studio wall with artwork"
                    src={EnsonWall}
                    className="h-full relative"
                    >
                </Image> 
            </div>
            </>
    );
}

export default Nav;