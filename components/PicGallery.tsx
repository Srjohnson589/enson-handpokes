"use client"
import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import Link from "next/link";

function PicGallery() {
    return (
            <>
                <h1>flash</h1>
                <p>description</p>
                <div className="grid grid-cols-4 gap-1 w-200 bg-white p-6">
                    <div className="bg-sky-500 h-60 w-40 m-4"></div>
                    <div className="bg-sky-500 h-60 w-40 m-4"></div>
                    <div className="bg-sky-500 h-60 w-40 m-4"></div>
                    <div className="bg-sky-500 h-60 w-40 m-4"></div>
                    <div className="bg-sky-500 h-60 w-40 m-4"></div>
                    <div className="bg-sky-500 h-60 w-40 m-4"></div>
                </div>
            </>
    );
}

export default PicGallery;