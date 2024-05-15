"use client"
import React from "react";
import Image from "next/image";
import TattooRoom from "@/public/images/landing/tinted_tattoo_room.jpg"

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
        answer: "$35 - small and simple flash only, $45-85 medium flash/small customs,\t$55-90 larger flash/medium customs,\n$65-100 large customs/more detail,\n$75+ very big, lots of details, or if you're loaded"
    }, {
        question: "What if I am financially on the rocks?",
        answer: "100% reach out!! If you work in the service industry or have multiple marginalized identities, please use the lower end of the scale!\n\nI want my tattoos to be affordable for everyone! If you are struggling financially and really want a tattoo PLEASE reach out! we can def make something work!!"
    }]

    return (
            <>
            <div className="relative">
                <Image
                    src={TattooRoom}
                    alt="enson's tattoo room"
                    className="absolute top-0 opacity-80 h-full">
                </Image>
                <h6 className="relative p-6 text-center text-6xl font-medium text-blue-500 bg-transparent" >FAQs</h6>
                {q_and_a.map((item) => (
                <div key={item.question} className="mx-auto my-6 w-2/3 collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" defaultChecked /> 
                    <div className="collapse-title text-lg font-medium glass">
                        {item.question}
                    </div>
                    <div className="collapse-content text-black bg-white"> 
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