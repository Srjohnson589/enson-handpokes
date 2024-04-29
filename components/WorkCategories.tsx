"use client"
import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import Image from 'next/image';
import Link from "next/link";
import flashPic from '../public/images/previewFlash.jpeg'
import freshPic from '../public/images/previewFresh.jpeg'
import healedPic from '../public/images/previewHealed.jpeg'
import artPic from '../public/images/previewArt.jpeg'
import merchPic from '../public/images/previewMerch.jpeg'


export default function WorkCategories() {

    const [previewFlash, setPreviewFlash] = useState(false)
    const [previewFresh, setPreviewFresh] = useState(false)
    const [previewHealed, setPreviewHealed] = useState(false)
    const [previewArt, setPreviewArt] = useState(false)
    const [previewMerch, setPreviewMerch] =useState(false)

    const showFlash = () => {
        setPreviewFlash(!previewFlash)
    }
    const showFresh = () => {
        setPreviewFresh(!previewFresh)
    }
    const showHealed = () => {
        setPreviewHealed(!previewHealed)
    }
    const showArt = () => {
        setPreviewArt(!previewArt)
    }
    const showMerch = () => {
        setPreviewMerch(!previewMerch)
    }

    const headingStyle = "block text-7xl font-medium text-gray-200 z-50 relative hover:text-blue-800"

    return (
            <>
            
                <Link href={'/flash'} className={headingStyle} onMouseEnter={showFlash} onMouseLeave={showFlash}>
                
                {previewFlash && 
                    <Image
                    src={flashPic}
                    width={500}
                    height={500}
                    alt="flash preview"
                    className={"-z-50 absolute -left-6 -bottom-8"}
                    />
                }
                flash
                </Link>

                <a href="#" className={headingStyle} onMouseEnter={showFresh} onMouseLeave={showFresh}>
                {previewFresh && 
                    <Image
                    src={freshPic}
                    alt="flash preview"
                    className="-z-30 absolute -left-6 -bottom-8 size-80"
                    />
                }
                fresh tattoos</a>

                <a href="#" className={headingStyle} onMouseEnter={showHealed} onMouseLeave={showHealed}>
                {previewHealed && 
                    <Image
                    src={healedPic}
                    alt="flash preview"
                    className="-z-30 absolute -left-6 -bottom-8 size-80"
                    />
                }
                healed tattoos</a>

                <a href="#" className={headingStyle} onMouseEnter={showArt} onMouseLeave={showArt}>
                {previewArt && 
                    <Image
                    src={artPic}
                    alt="flash preview"
                    className="-z-30 absolute -left-6 -bottom-8"
                    />
                }
                artwork</a>

                <a href="#" className={headingStyle} onMouseEnter={showMerch} onMouseLeave={showMerch}>
                {previewMerch && 
                    <Image
                    src={merchPic}
                    alt="flash preview"
                    className="-z-30 absolute -left-6 -bottom-8"
                    />
                }
                merch</a>
            </>

    );
}
