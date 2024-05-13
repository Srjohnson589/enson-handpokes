"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import './footer.css';
import instaPic from "@/public/images/instagram.jpeg";


function Footer() {
    return (
            <>
            <footer className="relative">
                <div className="custom-shape-divider-top-1715615039">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                    <div className="footer-height text-center">
                        <button><a className="p-6 mx-4 bg-blue-500 w-30 rounded-full block mb-2 text-white"><Link href={'/contact'}>Contact me</Link></a>
                        </button>
                        <button><a className="p-6 mx-4 bg-blue-500 w-30 rounded-full block mb-2 text-white"><Link href={'#'}>Shop Merch</Link></a>
                        </button>
                        <Link href={""} className="flex justify-center w-30">
                        <Image
                            src={instaPic}
                            width={50}
                            height={50}
                            alt="profile picture"
                            className={"object-cover rounded-2xl border-4 border-gray-900 m-8"}>
                        </Image>
                        </Link>
                        <h6 className="footer-title pb-2">
                            <a href="https://www.linkedin.com/in/sarah-fullstack" className="px-4 text-white text-xs">sarah johnson</a>
                            <a href="https://www.linkedin.com/in/" className="px-4 text-white text-xs">rutvi karkare</a>
                            <a href="https://www.linkedin.com/in/" className="px-4 text-white text-xs">eleazar hernandez</a>                    
                        </h6> 
                    </div>
                </div>
            </footer>
            </>
    );
}

export default Footer;