"use client"
import React from "react";

interface QA {
    question: string,
    answer: string
}

function Faqs() {
    const q_and_a:QA[] = [{
        question: "Can I get a color tattoo?",
        answer: "Right now I only use black ink in my tattooing. As a beginner I want to be confident in my linework and shading before I dive into color!!!"
    }, {
        question: "Do you repeat flash?",
        answer: "I will now only be tattooing each flash design once! If there is a piece of flash you love but has already been claimed, I am more than happy to customize/alter the design to make it unique to you!!"
    }, {
        question: "What is your pricing?",
        answer: "$35 - small and simple flash only, $45-85 medium flash/small customs,\t$55-90 larger flash/medium customs,\n$65-100 large customs/more detail,\n$75+ very big, lots of details, or if you&apos;re loaded"
    }, {
        question: "Is your pricing negotiable?",
        answer: "100%!! If you work in the service industry or have multiple marginalized identities, please use the lower end of the scale!\n\nI want my tattoos to be affordable for everyone! If you are struggling financially and really want a tattoo PLEASE reach out! we can def make something work!!"
    }]

    return (
            <>
            <div className="my-6 mx-4 bg-base-100">
                {q_and_a.map((item) => (
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        {item.question}
                    </div>
                    <div className="collapse-content"> 
                        <p>{item.answer}</p>
                    </div>
                </div>
                )
                )}
            </div>
            </>
    );
}

export default Faqs;