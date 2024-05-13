"use client"
import React from "react";
import Link from "next/link";


function Nav() {
    return (
            <>
            <div className="navbar bg-transparent text-black px-10">
                <div className="navbar-start">
                    <a><Link href={'/work'}>My work</Link></a>   
                </div>
                <div className="navbar-center">
                    <a className="text-xl">EnsonPokes Tattoos</a>
                </div>
                <div className="navbar-end">
                    <a><Link href={'/contact'}>Book</Link></a>
                </div>
            </div>
            </>
    );
}

export default Nav;