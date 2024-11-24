import React from 'react';

const CourseCard = ({ number, title, description }) => {
    return (
        <div className="flex flex-wrap gap-2 border-2 bg-alabaster border-charcoal w-full mx-auto rounded-md md:rounded-lg p-3 hover:scale-105 transition-all delay-100">
            <div className="flex justify-end w-full">
                <h4 className="font-rubik text-charcoal text-4xl font-bold">
                    {number}
                </h4>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
                <h5 className="font-rubik font-medium text-lg lg:text-xl text-charcoal">
                    {title}
                </h5>
                <p className="font-rubik text-xs lg:text-base text-gray-500 h-24 overflow-auto p-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    {description}
                </p>
            </div>
            <div className="flex justify-end w-full">
                <a href="" className="border-2 border-charcoal flex justify-center items-center p-1 rounded-md">
                    <button type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="#323232" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default CourseCard;