"use client"
import React from "react";
import Image from "next/image";
import Counter from "@/components/Counter/Counter"
import Rainbow from "../public/images/landing/gradient bg.png";
import ProfilePic from "../public/images/landing/profilepic.png";
import Handman from "../public/images/cutouts/handman.png";
import Slug from "../public/images/cutouts/slug.png";
import Raccoon from "../public/images/cutouts/raccoontattoo circle.png";
import CrocDog from "../public/images/cutouts/crocdog elbow.png";

function About() {
    const abouttitle = "About the Artist"
    const bio = "I’m Enson, a hand poke tattoo artist based in Columbus, OH, for the past three years. My style is whimsical, cute, and old-fashioned, and I create custom, individual pieces that celebrate the weird and wonderful. I also offer flash tattoos for those who want something pre-designed but still unique. As a queer-friendly and trans artist, I provide a welcoming, inclusive space, taking great care to ensure a comfortable and exciting experience for every client. My meticulous hand poke technique makes each tattoo a unique and personal journey, reflecting my dedication to both my craft and my clients."

    return (
            <>
            <div className="relative">
                <Image
                    src={Rainbow}
                    alt="splotchy background"
                    width={1500}
                    className="-my-20">
                </Image>
                <div className="absolute top-96">
                    <div className="flex px-24">
                        <Image
                            src={ProfilePic}
                            alt="profile picture"
                            width={400}
                            height={400}
                            className={"m-4 rounded-xl"}>
                        </Image>
                        <div className="font-mono m-4 flex flex-col items-stretch">
                            <h6 className="font-bold text-3xl pb-2 text-black">{abouttitle}</h6>
                            <p className="text-lg vertical-justify text-black">{bio}</p>
                        </div>
                    </div>
                    <div className="flex py-16 max-w-[1100]">
                        <Image
                            src={CrocDog}
                            alt="tattoo of a dauchaund with croc hat on head"
                            width={400}
                            height={400}
                            className={"m-4 rounded-xl rotate-6"}>
                        </Image>
                        <Image
                                src={Handman}
                                alt="flash perspective drawing of little man with big hands"
                                width={400}
                                height={400}
                                className={"m-4 rounded-xl"}>
                        </Image>
                        <Image
                                src={Raccoon}
                                alt="tattoo of a little raccoon sitting with shaded circle eyes and black and white striped tail"
                                width={200}
                                className={"m-4 -mt-20 h-72 rounded-xl"}>
                        </Image>
                        <Image
                                src={Slug}
                                alt="flash drawing of a little slug"
                                width={400}
                                height={400}
                                className={"m-4 rounded-xl"}>
                        </Image>
                    </div>
                    <Counter/>
                </div>
            </div>
            </>
    );
}

export default About;