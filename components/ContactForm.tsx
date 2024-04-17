"use client"
import React, {ChangeEvent, ChangeEventHandler, useState} from "react";


type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

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
        //form submission logic
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto text-black">
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
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message:
                </label>
                <textarea
                    rows={3}
                    cols={33}
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
