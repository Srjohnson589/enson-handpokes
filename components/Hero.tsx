"use client"
import React from "react";
import "./Nav/nav.css";

function Hero() {
    const threewords:String[] = ['INCLUSIVITY', 'SAFETY', 'INTENTIONALITY']

    const heroStyle:React.CSSProperties = {
        color: '#08367C',
        width: '100%',
        textAlign: 'center',
        fontSize: '60px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
        textTransform: 'uppercase',
        background: '#A3DCFF'
    }

    const threeWordStyle:React.CSSProperties = {
        fontSize: '28px'
    }

    return (
            <>
            <div style={heroStyle} className="font-sans">Artisanal Handpoke <br /> Tattoo Creations</div>
            <div className="font-serif py-4 w-full sm:whitespace-wrap sm:flex-column" style={heroStyle}>
                <span className="p-6" style={threeWordStyle}>{threewords[0]}</span>
                <span className="p-6" style={threeWordStyle}>{threewords[1]}</span>
                <span className="p-6 pb-24" style={threeWordStyle}>{threewords[2]}</span>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A3DCFF" fillOpacity="1" d="M0,0L205.7,96L411.4,0L617.1,160L822.9,32L1028.6,64L1234.3,0L1440,64L1440,0L1234.3,0L1028.6,0L822.9,0L617.1,0L411.4,0L205.7,0L0,0Z"></path></svg> */}
            </>
    );
}

export default Hero;