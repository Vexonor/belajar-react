import React from 'react';

const ReviewCard = ({ quote, image, name }) => {
    return (
        <div className="w-[20rem] lg:w-[30rem] flex flex-wrap gap-4 bg-alabaster border-2 border-charcoal rounded-md p-4 my-5">
            <div className="w-full flex justify-start items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-10" fill="#323232" viewBox="0 0 256 256"><path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path></svg>
                <h2 className="font-rubik font-bold text-charcoal text-lg">Customer Review</h2>
            </div>
            <div className="w-full border-2 border-charcoal rounded-full"></div>
            <div className="w-full">
                <blockquote className="before:content-['“'] after:content-['”'] font-rubik text-charcoal h-16 overflow-auto p-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    {quote}
                </blockquote>
            </div>
            <div className="w-full flex justify-start items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="#323232" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="#323232" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="#323232" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="#323232" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="#323232" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
            </div>
            <div className="w-full flex justify-start items-center gap-2">
                <img class="inline-block size-[46px] rounded-full" src={image} alt="Avatar" />
                <span className="font-rubik font-medium text-charcoal text-sm">{name}</span>
            </div>
        </div>
    )
}

export default ReviewCard;