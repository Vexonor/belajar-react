import React from 'react';

const CourseCard = ({ thumbnail, title, mentorImg, mentorName, description, totalEnroll }) => {
    return (
        <a class="w-[25rem] flex flex-col group bg-alabaster border-2 border-charcoal shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 p-5" href="#">
            <div class="relative pt-[50%] sm:pt-[60%] rounded-xl overflow-hidden">
                <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={thumbnail} alt="Card Image" />
            </div>
            <div class="p-4">
                <h3 class="text-lg font-rubik font-bold text-charcoal dark:text-white">
                    {title}
                </h3>
                <div className="flex items-center gap-4 my-2">
                    <img class="inline-block size-[38px] rounded-full" src={mentorImg} alt="Avatar"></img>
                    <h4 className="font-rubik font-medium text-charcoal text-sm">
                        {mentorName}
                    </h4>
                </div>
                <p class="mt-1 font-rubik text-sm text-gray-500 dark:text-neutral-400 h-24 overflow-auto p-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    {description}
                </p>
                <div className="flex items-center gap-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="#323232" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
                    <h4 className="font-rubik font-medium text-gray-500 text-xs">{totalEnroll} orang mengambil kursus ini</h4>
                </div>
            </div>
            <div className="w-full bg-charcoal mt-1 rounded-lg p-2 text-center">
                <a href="#" className="font-rubik font-semibold text-alabaster">
                    Ambil Kursus Ini
                </a>
            </div>
        </a>
    )
}

export default CourseCard;