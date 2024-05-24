"use client"
import React from "react";
import Image from "next/image";
import Rainbow from "../public/images/landing/lowerhalf.jpg"
import ProfilePic from "../public/images/landing/profilepic.png";


function About() {
    const abouttitle = "About the Artist"
    const bio = "I’m Enson, a hand poke tattoo artist based in Columbus, OH, for the past three years. My style is whimsical, cute, and old-fashioned, and I create custom, individual pieces that celebrate the weird and wonderful. I also offer flash tattoos for those who want something pre-designed but still unique. As a queer-friendly and trans artist, I provide a welcoming, inclusive space, taking great care to ensure a comfortable and exciting experience for every client. My meticulous hand poke technique makes each tattoo a unique and personal journey, reflecting my dedication to both my craft and my clients."

    return (
            <>
            <div  className="w-3/4 flex align-center justify-center" style={{backgroundImage: `url(${Rainbow})`}}>
                <Image
                    src={ProfilePic}
                    alt="profile picture"
                    width={300}
                    height={200}
                    className={"m-4 max-h-80 rounded-xl"}>
                </Image>
                <div className="font-mono m-4 flex flex-col items-stretch">
                    <h6 className="font-bold pb-2 text-black">{abouttitle}</h6>
                    <p className="text-md text-black">{bio}</p>
                </div>
            </div>
            </>
    );
}

export default About;