"use client"
import React from "react";
import Link from "next/link";

function WorkSamples() {
    return (
            <>
            <div className="h-80 w-2/3 carousel carousel-vertical rounded-box">
                <div className="carousel-item h-full">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
                </div>
            </div>
            <Link href={'/work'} className="my-5"><button className="btn btn-primary">See more</button></Link>
            </>
    );
}

export default WorkSamples;