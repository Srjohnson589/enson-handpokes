"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import WorkPic from "@/public/images/landing/tinted_tattoo_room.jpg";

function WorkSamples() {
    return (
            <>
            <Image 
                src={WorkPic}
                width={450}
                height={600}
                alt="studio picture"
                className="object-cover border border-black"
            ></Image>
            <Link href={'/work'} className="my-10"><button className="btn rounded-full px-8 bg-red-900 border-0">Check out my work</button></Link>
            </>
    );
}

export default WorkSamples;