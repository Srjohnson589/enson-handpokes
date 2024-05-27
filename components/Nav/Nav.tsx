"use client"
import React from "react";
import "./nav.css";
import EnsonWall from "@/public/images/landing/ensonpokeswall2.jpg";
import Hamburger from "@/public/images/Hamburger menu.png";
import Foot from "@/public/images/cutouts/foot.png";
import Image from "next/image";
import Link from "next/link";

function Nav() {

    return (
        <>
            <div className="heroparent">
                <div className="dropdown dropdown-end fixed top-16 right-5 z-[1000]">
                    <div tabIndex={0} role="button"><Image alt="hamburger menu" src={Hamburger} width={60}></Image>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1000] menu p-2 shadow bg-white rounded-box w-52">
                        <li className="text-xl my-2"><a><Link href={'/'}>Home</Link></a></li>
                        <li className="text-xl my-2"><a><Link href={'/work'}>My work</Link></a></li>
                        <li className="text-xl my-2"><a><Link href={'/contact'}>Contact me</Link></a></li>
                    </ul>
                </div>
                <div className="custom-shape-divider-bottom-1715607337 my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#4A8CD2" fillOpacity="1"
                              d="M0,96L30,122.7C60,149,120,203,180,208C240,213,300,171,360,154.7C420,139,480,149,540,176C600,203,660,245,720,234.7C780,224,840,160,900,122.7C960,85,1020,75,1080,106.7C1140,139,1200,213,1260,229.3C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="custom-shape-divider-bottom-1715607337">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#A3DCFF" fillOpacity="1"
                              d="M0,96L30,122.7C60,149,120,203,180,208C240,213,300,171,360,154.7C420,139,480,149,540,176C600,203,660,245,720,234.7C780,224,840,160,900,122.7C960,85,1020,75,1080,106.7C1140,139,1200,213,1260,229.3C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    </svg>
                    <Image
                        src={Foot}
                        width={400}
                        alt="hand-drawn tennis shoe with crew socks walking"
                        className="absolute top-64 -left-4 -ml-20 -z-50"
                    >
                    </Image>

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
