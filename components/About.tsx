"use client"
import React from "react";
import Link from "next/link";


function About() {
    return (
            <>
            <div className="mx-5 card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime repellat alias dignissimos fuga adipisci autem libero voluptate consectetur molestias quae laboriosam, praesentium veniam ipsam itaque est animi placeat, reprehenderit reiciendis!</p>
                </div>
            </div>
            </>
    );
}

export default About;