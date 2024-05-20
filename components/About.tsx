"use client"
import React from "react";
import Image from "next/image";
import RainbowBackground from "@/public/images/landing/rainbowbackground.jpeg"
import ProfilePic from "../public/images/landing/profilepic.png";

function About() {
    const abouttitle = "WHAT'S A TATTOOO????  >>>"
    const bio = "I’m Enson, a hand poke tattoo artist based in Columbus, OH, for the past three years. My style is whimsical, cute, and old-fashioned, and I create custom, individual pieces that celebrate the weird and wonderful. I also offer flash tattoos for those who want something pre-designed but still unique. As a queer-friendly and trans artist, I provide a welcoming, inclusive space, taking great care to ensure a comfortable and exciting experience for every client. My meticulous hand poke technique makes each tattoo a unique and personal journey, reflecting my dedication to both my craft and my clients."

    return (
            <>
            <Image
                alt="rainbow background"
                src={RainbowBackground}>
            </Image>
            <div className="flex rounded-xl mx-8 px-8 align-center justify-between">
                <div className="mr-4 w-full place-self-center">
                <Image
                    src={ProfilePic}
                    width={300}
                    alt="profile picture"
                    className={"object-cover rounded-xl "}>
                </Image>
                </div>
                <div className="m-4 w-full">
                    <h6 className="font-bold pb-2">{abouttitle}</h6>
                    <p className="text-sm">{bio}</p>
                </div>
            </div>
            </>
    );
}

export default About;