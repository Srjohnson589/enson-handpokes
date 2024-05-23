"use client"
import React from "react";
import Image from "next/image";
import RainbowBackground from "@/public/images/landing/gradient bg 3.png"
import ProfilePic from "../public/images/landing/profilepic.png";

function About() {
    const abouttitle = "About the Artist"
    const bio = "I’m Enson, a hand poke tattoo artist based in Columbus, OH, for the past three years. My style is whimsical, cute, and old-fashioned, and I create custom, individual pieces that celebrate the weird and wonderful. I also offer flash tattoos for those who want something pre-designed but still unique. As a queer-friendly and trans artist, I provide a welcoming, inclusive space, taking great care to ensure a comfortable and exciting experience for every client. My meticulous hand poke technique makes each tattoo a unique and personal journey, reflecting my dedication to both my craft and my clients."

    return (
            <>
                {/* <hr className="border-2 border-sky-500"></hr>
                <Image
                    alt="rainbow background"
                    src={RainbowBackground}
                    className="">
                </Image>
                <hr className="border-2 border-green-500"></hr> */}
                <div style={{ backgroundImage: `url(${RainbowBackground})`, height:'500px'}}>
                <div  className="w-3/4 flex align-center justify-center">
                    <Image
                        src={ProfilePic}
                        alt="profile picture"
                        width={300}
                        height={200}
                        className={"m-4 object-fit sm:object-scale-down rounded-xl"}>
                    </Image>
                    <div className="m-4 w-full">
                        <h6 className="font-bold pb-2">{abouttitle}</h6>
                        <p className="text-md">{bio}</p>
                    </div>
                </div>
                </div>

            </>
    );
}

export default About;