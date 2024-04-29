"use client"
import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import Link from "next/link";

function PicGallery() {
    return (
            <>
                <Link href={'/work'}>Go back</Link>
                <h1>flash</h1>
                <p>description</p>
                <div className="grid grid-cols-3 gap-4">
                    <div className="...">01</div>
                    <div class="...">02</div>
                    <div class="...">03</div>
                </div>
            </>
    );
}

export default PicGallery;