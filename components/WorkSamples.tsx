"use client"
import React from "react";
import Link from "next/link";

function WorkSamples() {
    return (
            <>
            
            <Link href={'/work'} className="my-5"><button className="btn btn-primary">Check out my work</button></Link>
            </>
    );
}

export default WorkSamples;