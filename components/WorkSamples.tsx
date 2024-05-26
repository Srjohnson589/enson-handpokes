"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import WorkPic from "@/public/images/landing/ensonpokeswall.jpg";
import TattooRoom from "@/public/images/landing/tinted_tattoo_room.jpg"


function WorkSamples() {
    return (
            <>
                <div className="text-center -mt-80">
                    <Image 
                        src={TattooRoom}
                        width={800}
                        height={800}
                        alt="studio picture"
                        className="object-cover rounded-xl shadow-md my-8"
                    ></Image>
                    <Link href={'/work'} ><button className="btn rounded-full px-8 my-4 bg-[#FFA957] border-2 text-black text-xl">Check out my work</button></Link>
                </div>
            </>
    );
}

export default WorkSamples;