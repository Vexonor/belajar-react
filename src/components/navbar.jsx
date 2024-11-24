import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Function for Logo
    function Logo() {
        return <img className='size-7 md:size-10' src="/UlearnLogo.svg" alt="Ulearn" />
    }

    return (
        <div className="sm:order-1 w-screen flex justify-between items-center gap-x-2">
            <div id="hs-navbar-alignment" className="hs-collapse fixed top-28 md:top-auto w-32 md:w-max p-3 bg-alabaster md:bg-transparent rounded-xl border-2 border-charcoal md:border-none hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" aria-labelledby="hs-navbar-alignment-collapse">
                <div className="flex flex-col gap-10 md:flex-row sm:items-center sm:mt-0">
                    <Link to="/home" className="font-semibold font-rubik text-gray-500 hover:text-gray-400 focus:outline-none focus:text-charcoal dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">Home</Link>
                    <Link to="/course" className="font-semibold font-rubik text-gray-500 hover:text-gray-400 focus:outline-none focus:text-charcoal dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">Course</Link>
                    <Link to="/about" className="font-semibold font-rubik text-gray-500 hover:text-gray-400 focus:outline-none focus:text-charcoal dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">About</Link>
                </div>
            </div>
            <div class="sm:order-2 w-full grid grid-cols-3 gap-x-2">
                <div className="col-span-1">
                    <button type="button" className="md:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-alignment-collapse" aria-expanded="false" aria-controls="hs-navbar-alignment" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-alignment">
                        <svg classNameName='hs-collapse-open:hidden shrink-0 size-7 text-charcoal' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28 9C28 8.44772 27.5523 8 27 8H5C4.44772 8 4 8.44772 4 9C4 9.55228 4.44772 10 5 10H27C27.5523 10 28 9.55228 28 9ZM28 16C28 15.4477 27.5523 15 27 15H5C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H27C27.5523 17 28 16.5523 28 16ZM17 23C17 22.4477 16.5523 22 16 22H5C4.44772 22 4 22.4477 4 23C4 23.5523 4.44772 24 5 24H16C16.5523 24 17 23.5523 17 23Z" fill="#262626" />
                        </svg>
                        <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        <span className="sr-only">Toggle</span>
                    </button>
                </div>
                <div className="col-span-1">
                    <a className="font-rubik mx-auto flex justify-center items-center dark:text-white focus:outline-none focus:opacity-80" href="#">
                        <Logo /><span className="text-xl font-semibold text-charcoal font-rubik">Learn</span>
                    </a>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                    <a href="" className="bg-charcoal text-alabaster font-rubik font-semibold rounded-full text-sm p-2 lg:px-5">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;