"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import WorkPic from "@/public/images/landing/ensonpokeswall.jpg";
import TattooRoom from "@/public/images/landing/tinted_tattoo_room.jpg"


function WorkSamples() {
    return (
            <>
                <div className="text-center">
                    <Image 
                        src={TattooRoom}
                        width={600}
                        height={600}
                        alt="studio picture"
                        className="object-cover rounded-xl shadow-md my-8"
                    ></Image>
                    <Link href={'/work'} ><button className="btn rounded-full px-8 bg-teal-900 border-0 text-white">Check out my work</button></Link>
                </div>
            </>
    );
}

export default WorkSamples;