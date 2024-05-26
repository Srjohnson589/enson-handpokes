"use client"
import React from "react";
import "./Nav/nav.css";
import Image from "next/image";
import Coffeepot from "@/public/images/cutouts/coffeepot circle.png";

function Hero() {
    const threewords:String[] = ['INCLUSIVITY', 'SAFETY', 'INTENTIONALITY']

    const heroStyle:React.CSSProperties = {
        color: '#08367C',
        width: '100%',
        textAlign: 'center',
        fontSize: '82px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
        textTransform: 'uppercase',
        background: '#A3DCFF',
        marginTop: '40px'
    }

    const threeWordStyle:React.CSSProperties = {
        fontSize: '48px'
    }

    return (
            <>
            <div style={heroStyle} className="font-serif">Artisanal Handpoke <br /> Tattoo Creations
            </div>
            <div className="relative font-serif py-4 w-full sm:whitespace-wrap sm:flex-column" style={heroStyle}>
                <span className="p-6" style={threeWordStyle}>{threewords[0]}</span>
                <span className="p-6" style={threeWordStyle}>{threewords[1]}</span>
                <span className="p-6 pb-24" style={threeWordStyle}>{threewords[2]}</span>
            <Image
            src={Coffeepot}
            alt="tattoo of a traditional coffeepot"
            width={300}
            className="absolute right-10 top-30 z-[100]">
            </Image>
            </div>
            </>
    );
}

export default Hero;