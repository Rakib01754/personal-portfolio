import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer aria-label="Site Footer" className="bg-[#AFD5EB] mt-10">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between text-black font-mono">
                    <div className="flex justify-center sm:justify-start">
                        <h1 className='text-4xl font-bold'>Rakib</h1>
                    </div>

                    <p className="mt-4 text-center text-sm lg:mt-0 lg:text-right">
                        Copyright &copy; {year}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;