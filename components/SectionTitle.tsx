"use client"
import React from "react";
import Link from "next/link";

interface Props {
    title: string
}

const SectionTitle = (props:Props) => { 
    return (
            <>
            <h2 className=" m-5 w-5/6 text-xl text-md p-4 border rounded-box">
                {props.title}
            </h2>
            </>
    );
}

export default SectionTitle;