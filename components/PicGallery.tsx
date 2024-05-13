"use client"
import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import Link from "next/link";

function PicGallery() {
    return (
            <>
                <div className="grid grid-cols-3 gap-0 bg-transparent justify-items-center mt-28">
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                    <div className="bg-sky-500 w-40 h-60 m-4"></div>
                </div>
            </>
    );
}

export default PicGallery;