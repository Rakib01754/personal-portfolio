import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const submitForm = e.target;

        emailjs.sendForm(`${process.env.REACT_APP_serviceId}`, `${process.env.REACT_APP_templateId}`, form.current, `${process.env.REACT_APP_publishKey}`)
            .then((result) => {
                toast.success(result.text);
                submitForm.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section class="text-black bg-[#6E559E] relative" id='contact'>
            <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-col text-center w-full mb-4">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="sm:text-5xl text-3xl font-medium title-font mb-2 text-[#F25B9D] underline">Contact Me</h1>
                    </div>
                    <p class="lg:w-2/3 mx-auto">For Any Kind Of Query Send Me A Message Instantly</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <form ref={form} onSubmit={sendEmail} class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-white">Name</label>
                                <input type="text" id="name" name="user_name" class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-white">Email</label>
                                <input type="email" id="email" name="user_email" class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-white">Message</label>
                                <textarea id="message" name="message" class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full flex justify-center">
                            <button type='submit' class="flex text-white bg-black hover:bg-[#F25B9D] border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;