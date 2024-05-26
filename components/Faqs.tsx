"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterBackground from "@/public/images/landing/footer gradient bg.png"

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
                <div className="relative text-black">
                    <Image
                        src={FooterBackground}
                        alt="light splotched background"
                        className="absolute top-0 max-h-full">
                    </Image>
                    <div className="w-2/3 mx-auto my-24 font-serif ">
                        <h6 className="p-6 text-left text-6xl font-medium bg-transparent border-b-2 border-black">FAQs</h6>
                        {q_and_a.map((item) => (
                        <div key={item.question} className="border-b-2 border-black my-6 collapse collapse-plus rounded-none">
                            <input type="radio" name="my-accordion-3" defaultChecked /> 
                            <div className="collapse-title text-4xl font-medium">
                                {item.question}
                            </div>
                            <div className="collapse-content text-3xl text-black bg-transparent my-2"> 
                                <p>{item.answer}</p>
                            </div>
                        </div>
                        )
                        )}
                    </div>
                    <footer className="relative">
                        <div className="h-72 flex flex-col justify-center text-center">
                            <div>
                                <Link href={'/contact'}><button className="h-14 mx-8 bg-[#B2EC5D] w-48 rounded-full mb-2 border-2 text-xl border-black">Contact me</button></Link>
                                
                                <Link href={'/'}><button className="h-14 mx-8 bg-transparent w-48 rounded-full mb-2 border-2 text-xl border-black">Shop merch</button></Link>
                            </div>

                            <Link href={""} className="flex w-12 h-12 mx-auto my-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73" fill="none">
                                <g clip-path="url(#clip0_384_562)">
                                    <path d="M55.8906 0H17.1094C7.66013 0 0 7.66013 0 17.1094V55.8906C0 65.3399 7.66013 73 17.1094 73H55.8906C65.3399 73 73 65.3399 73 55.8906V17.1094C73 7.66013 65.3399 0 55.8906 0Z" fill="url(#paint0_radial_384_562)"/>
                                    <path d="M55.8906 0H17.1094C7.66013 0 0 7.66013 0 17.1094V55.8906C0 65.3399 7.66013 73 17.1094 73H55.8906C65.3399 73 73 65.3399 73 55.8906V17.1094C73 7.66013 65.3399 0 55.8906 0Z" fill="url(#paint1_radial_384_562)"/>
                                    <path d="M36.5026 7.98438C28.7583 7.98438 27.7862 8.01831 24.7447 8.15661C21.7089 8.29577 19.6367 8.77625 17.8237 9.48145C15.9479 10.2097 14.357 11.1841 12.7721 12.7696C11.1858 14.3548 10.2114 15.9457 9.48088 17.8206C8.77369 19.6341 8.29263 21.7072 8.15604 24.7416C8.02002 27.7833 7.98438 28.7557 7.98438 36.5003C7.98438 44.2448 8.01859 45.2138 8.15661 48.2553C8.29634 51.2911 8.77682 53.3633 9.48145 55.1763C10.2103 57.0521 11.1847 58.643 12.7702 60.2279C14.3548 61.8142 15.9457 62.7908 17.82 63.5191C19.6344 64.2243 21.7069 64.7048 24.7422 64.844C27.7839 64.9823 28.7552 65.0162 36.4991 65.0162C44.2443 65.0162 45.2132 64.9823 48.2547 64.844C51.2905 64.7048 53.365 64.2243 55.1794 63.5191C57.0543 62.7908 58.643 61.8142 60.2273 60.2279C61.8136 58.643 62.7877 57.0521 63.5186 55.1772C64.2195 53.3633 64.7008 51.2905 64.8434 48.2559C64.98 45.2144 65.0156 44.2448 65.0156 36.5003C65.0156 28.7557 64.98 27.7839 64.8434 24.7422C64.7008 21.7064 64.2195 19.6344 63.5186 17.8214C62.7877 15.9457 61.8136 14.3548 60.2273 12.7696C58.6412 11.1835 57.0549 10.2092 55.1777 9.48173C53.3599 8.77625 51.2865 8.29548 48.2507 8.15661C45.209 8.01831 44.2406 7.98438 36.4937 7.98438H36.5026ZM33.9444 13.1232C34.7038 13.122 35.551 13.1232 36.5026 13.1232C44.1165 13.1232 45.0188 13.1506 48.0254 13.2871C50.8057 13.4143 52.3148 13.8788 53.3199 14.2692C54.6508 14.7859 55.5995 15.4039 56.597 16.4022C57.595 17.4002 58.2127 18.3507 58.7308 19.6815C59.1212 20.6852 59.5863 22.1943 59.7129 24.9746C59.8495 27.9807 59.8791 28.8835 59.8791 36.4937C59.8791 44.104 59.8495 45.0071 59.7129 48.0129C59.5857 50.7932 59.1212 52.3022 58.7308 53.3063C58.2141 54.6371 57.595 55.5847 56.597 56.5821C55.5989 57.5802 54.6513 58.1978 53.3199 58.7148C52.3159 59.1069 50.8057 59.5703 48.0254 59.6975C45.0193 59.8341 44.1165 59.8637 36.5026 59.8637C28.8883 59.8637 27.9858 59.8341 24.98 59.6975C22.1997 59.5691 20.6907 59.1046 19.6846 58.7142C18.3541 58.1973 17.4034 57.5796 16.4053 56.5816C15.4073 55.5835 14.7896 54.6354 14.2715 53.304C13.8811 52.2999 13.416 50.7909 13.2894 48.0106C13.1528 45.0045 13.1255 44.1017 13.1255 36.4866C13.1255 28.8718 13.1528 27.9735 13.2894 24.9674C13.4166 22.1872 13.8811 20.6781 14.2715 19.6729C14.7885 18.3421 15.4073 17.3917 16.4056 16.3936C17.4037 15.3956 18.3541 14.7777 19.6849 14.2598C20.6901 13.8677 22.1997 13.4043 24.98 13.2766C27.6105 13.1577 28.63 13.122 33.9444 13.116V13.1232ZM51.7242 17.8579C49.835 17.8579 48.3023 19.3892 48.3023 21.2786C48.3023 23.1678 49.835 24.7005 51.7242 24.7005C53.6134 24.7005 55.1461 23.1678 55.1461 21.2786C55.1461 19.3895 53.6134 17.8568 51.7242 17.8568V17.8579ZM36.5026 21.8561C28.4155 21.8561 21.8587 28.413 21.8587 36.5003C21.8587 44.5876 28.4155 51.1413 36.5026 51.1413C44.5899 51.1413 51.1445 44.5876 51.1445 36.5003C51.1445 28.4133 44.5893 21.8561 36.502 21.8561H36.5026ZM36.5026 26.9949C41.752 26.9949 46.008 31.2503 46.008 36.5003C46.008 41.7497 41.752 46.0057 36.5026 46.0057C31.2528 46.0057 26.9975 41.7497 26.9975 36.5003C26.9975 31.2503 31.2528 26.9949 36.5026 26.9949Z" fill="white"/>
                                </g>
                                <defs>
                                    <radialGradient id="paint0_radial_384_562" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.3906 78.6224) rotate(-90) scale(72.3484 67.2897)">
                                    <stop stop-color="#FFDD55"/>
                                    <stop offset="0.1" stop-color="#FFDD55"/>
                                    <stop offset="0.5" stop-color="#FF543E"/>
                                    <stop offset="1" stop-color="#C837AB"/>
                                    </radialGradient>
                                    <radialGradient id="paint1_radial_384_562" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-12.2278 5.25857) rotate(78.681) scale(32.3401 133.307)">
                                    <stop stop-color="#3771C8"/>
                                    <stop offset="0.128" stop-color="#3771C8"/>
                                    <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
                                    </radialGradient>
                                    <clipPath id="clip0_384_562">
                                    <rect width="73" height="73" fill="white"/>
                                    </clipPath>
                                </defs>
                                </svg>
                            </Link>
                            <div className="flex justify-center pb-4">
                                <a href="https://www.linkedin.com/in/sarah-fullstack" className="w-48 text-lg whitespace-nowrap">sarah johnson</a>
                                <a href="https://www.linkedin.com/in/" className="w-48 text-lg whitespace-nowrap">rutvi karkare</a>
                                <a href="https://www.linkedin.com/in/" className="w-48 text-lg whitespace-nowrap">eleazar hernandez</a>                    
                            </div> 
                        </div>
                    </footer>
                </div>
            </>
    );
}

export default Faqs;