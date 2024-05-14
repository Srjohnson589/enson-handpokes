"use client"
import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import Link from "next/link";

function GalleryTitle() {
    return (
            <>
            <div className="text-white flex -mt-8 w-full z-50 justify-between">
                <h1 className="p-4 ml-6 text-6xl">flash</h1>
                <p className="p-4 w-60 text-sm text-right">I will now only be tattooing each flash design once! If there is a piece of flash you love but has already been claimed, I am more than happy to customize/alter the design to make it unique to you!!</p>
            </div>
            </>
    );
}

export default GalleryTitle;