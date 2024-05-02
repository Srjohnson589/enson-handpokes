"use client"
import React from "react";
import Link from "next/link";


function Faqs() {
    return (
            <>
            <div className="my-6 mx-4 bg-base-100">
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                    Can I get a color tattoo?
                </div>
                <div className="collapse-content"> 
                    <p>Right now I only use black ink in my tattooing. As a beginner I want to be confident in my linework and shading before I dive into color!!!</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    Do you repeat flash?
                </div>
                <div className="collapse-content"> 
                    <p>I will now only be tattooing each flash design once! If there is a piece of flash you love but has already been claimed, I am more than happy to customize/alter the design to make it unique to you!!</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    What is your pricing?
                </div>
                <div className="collapse-content"> 
                    <p>$35 - small and simple flash only,<br></br>$45-85 medium flash/small customs,<br></br>$55-90 larger flash/medium customs,<br></br>$65-100 large customs/more detail,<br></br>$75+ very big, lots of details, or if you&apos;re loaded</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    Is your pricing negotiable?
                </div>
                <div className="collapse-content"> 
                    <p>100%!! If you work in the service industry or have multiple marginalized identities, please use the lower end of the scale! <br></br><br></br>I want my tattoos to be affordable for everyone! If you are struggling financially and really want a tattoo PLEASE reach out! we can def make something work!!</p>
                </div>
            </div> 
            </div>
            </>
    );
}

export default Faqs;