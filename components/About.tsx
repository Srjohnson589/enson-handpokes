"use client"
import React from "react";
import Image from "next/image";
import ProfilePic from "../public/images/landing/profilepic.png";

function About() {
    return (
            <>
            <div className="flex bg-white px-20 align-center justify-center">
                <div className="w-400 h-400 place-self-center">
                <Image
                    src={ProfilePic}
                    width={160}
                    height={160}
                    alt="profile picture"
                    className={"object-cover"}>
                </Image>
                </div>
                <div className="m-8 w-1/2">
                    <h6 className="font-bold pb-2">ARTIST BIO</h6>
                    <p className="text-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime repellat alias dignissimos fuga adipisci autem libero voluptate consectetur molestias quae laboriosam, praesentium veniam ipsam itaque est animi placeat, reprehenderit reiciendis!</p>
                </div>
            </div>
            </>
    );
}

export default About;