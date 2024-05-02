"use client"
import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import Link from "next/link";

function PicGallery() {
    return (
            <>
            <div className="container w-300">
                <h1 className="p-4 text-4xl">flash</h1>
                <p className="p-4 text-sm">I will now only be tattooing each flash design once! If there is a piece of flash you love but has already been claimed, I am more than happy to customize/alter the design to make it unique to you!!</p>
                <div className="grid grid-cols-1 gap-1 bg-transparent justify-items-center">
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                </div>
            </div>
            </>
    );
}

export default PicGallery;