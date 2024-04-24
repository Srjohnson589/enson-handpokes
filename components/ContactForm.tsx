"use client"
import React, {ChangeEvent, ChangeEventHandler, useState} from "react";


type FormData = {
    firstName: string;
    lastName: string;
    pronouns: string;
    phone: string;
    instagram: string;
    accommodations: Array<string>;
    dateRequested: string;
    tattooType: string;
    tattooSize: number;
    tattooPlacement: string;
    tattooDescription: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        pronouns: '',
        phone: '',
        instagram: '',
        accommodations: [],
        dateRequested: '',
        tattooType: '',
        tattooSize: 0,
        tattooPlacement: '',
        tattooDescription: '',
        email: '',
        message: '',
    });
    //you want to create a function where it looks at this array down here, and upon submit, it adds them to
    //the formData.accommodations
    const accommodationChoices: Array<string> = ['low-key tattoo session (no small talk, music/no music, whatever you\'d like)',
            'frequent breaks', 'I love dogs!', 'Please keep your dog away from me', 'I don\'t really care about dogs'];

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted!', formData);
        //form submission logic goes here
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto text-black">
            <h1 className={'text-5xl font-extrabold'}>Contact Form</h1>
            <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name:
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name:
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email:
                </label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="pronouns" className="block text-sm font-medium text-gray-700">
                    Pronouns:
                </label>
                <input
                    type="text"
                    id="pronouns"
                    name="pronouns"
                    value={formData.pronouns}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone:
                </label>
                <input
                    //regex to make sure it is a valid number
                    pattern="^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                    Instagram:
                </label>
                <input
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="accommodations" className="block text-sm font-medium text-gray-700">
                    Accommodations:
                </label>
                <div>
                    {accommodationChoices.map((value, index) => {
                        return (
                            <ul id={value} className={'text-white'} key={index}><input type={'checkbox'}/> {value}</ul>)
                    })}
                </div>
            </div>
            <div id={'tattoo portion of form'}>
                <h2 className={'text-4xl text-white font-extrabold'}>Tattoo Details</h2>
                <div className="mb-4">
                    <label htmlFor="dateRequested" className="block text-sm font-medium text-gray-700">
                        Date Requested:
                    </label>
                    <input
                        pattern="\d{1,2}\/\d{1,2}\/\d{2,4}"
                        id="dateRequested"
                        name="dateRequested"
                        placeholder="11/25/1999"
                        value={formData.dateRequested}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="tattooType" className="block text-sm font-medium text-gray-700">
                        Tattoo Type:
                    </label>
                    <input
                        id="instagram"
                        name="instagram"
                        value={formData.tattooType}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="tattooSize" className="block text-sm font-medium text-gray-700">
                        Tattoo Size (in inches):
                    </label>
                    <input
                        type="number"
                        id="tattooSize"
                        name="tattooSize"
                        value={formData.tattooSize}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="tattooPlacement" className="block text-sm font-medium text-gray-700">
                        Tattoo Placement:
                    </label>
                    <input
                        id="tattooPlacement"
                        name="tattooPlacement"
                        value={formData.tattooPlacement}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="tattooDescription" className="block text-sm font-medium text-gray-700">
                        Tattoo Description:
                    </label>
                    <textarea
                        id="tattooDescription"
                        name="tattooDescription"
                        value={formData.tattooDescription}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full"
                    />
                </div>
            </div>
            <br/>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Anything you would like to tell me?
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <button
                type="submit"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                Submit
            </button>
        </form>
    );
}
