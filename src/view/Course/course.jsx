import React from 'react';
import CourseCard from './courseCard';

const Course = () => {
    const CourseData = [
        {
            id: 1,
            thumbnail: 'https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHx8MA%3D%3D',
            title: 'Biologi',
            mentorImg: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
            mentorName: 'Pengajar 1',
            description: 'Pembelajaran biologi adalah proses belajar-mengajar yang bertujuan untuk memahami kehidupan dan fenomena biologis, mulai dari tingkat molekuler hingga ekosistem.',
            totalEnroll: 23.499,
        },
        {
            id: 2,
            thumbnail: 'https://images.unsplash.com/photo-1633493702341-4d04841df53b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGh5c2ljc3xlbnwwfHwwfHx8MA%3D%3D',
            title: 'Fisika',
            mentorImg: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
            mentorName: 'Pengajar 2',
            description: 'Pendekatan dalam pembelajaran Fisika meliputi eksperimen, diskusi, pemecahan masalah, dan penerapan teori melalui berbagai media dan teknologi. Fisika mengajarkan keterampilan berpikir kritis, analitis, serta kemampuan untuk merumuskan dan menguji hipotesis secara ilmiah.',
            totalEnroll: 23.499,
        },
    ]
    return (
        <div className="w-11/12 mx-auto">
            {/* Search Bar */}
            <div class="w-full md:w-6/12 space-y-3 mx-auto">
                <div class="relative">
                    <input type="search" class="peer py-3 px-4 ps-11 block w-full bg-alabaster border-2 border-charcoal rounded-xl font-rubik text-sm focus:border-charcoal disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Cari Kursus" />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="#3232323" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                    </div>
                </div>
            </div>

            {/* Course */}
            <div className="grid grid-cols-3 gap-4 my-5">
                <div className="col-span-2 w-full flex flex-wrap gap-4">
                    {CourseData.map((card, index) =>
                        <CourseCard
                            key={index}
                            thumbnail={card.thumbnail}
                            title={card.title}
                            mentorImg={card.mentorImg}
                            mentorName={card.mentorName}
                            description={card.description}
                            totalEnroll={card.totalEnroll}
                        />
                    )}
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                    <div class="hs-accordion-group">
                        {/* Categories */}
                        <div class="hs-accordion active w-10/12 md:w-full bg-alabaster p-2 rounded-lg border-2 border-charcoal" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                            <button class="hs-accordion-toggle hs-accordion-active:text-charcoal py-3 inline-flex items-center justify-between gap-x-3 w-full font-medium font-rubik text-xs text-start text-gray-500 hover:text-gray-500 hs-accordion-active:border-b-2 hs-accordion-active:border-charcoal disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                Kategori Kursus
                                <svg xmlns="http://www.w3.org/2000/svg" class="hs-accordion-active:hidden block size-3 md:size-5" fill="#323232" viewBox="0 0 256 256"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="hs-accordion-active:block hidden size-3 md:size-5" fill="#323232" viewBox="0 0 256 256"><path d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 flex flex-col " role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                <div className="flex flex-col gap-4 p-5">
                                    <div class="flex items-center">
                                        <input type="checkbox" class="shrink-0 size-5 mt-0.5 border-gray-200 rounded text-charcoal focus:ring-charcoal disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" checked />
                                        <label for="all-categories" class="font-rubik text-xs md:text-base text-charcoal ms-3 dark:text-neutral-400">Semua Kategori</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="shrink-0 size-5 mt-0.5 border-gray-200 rounded text-charcoal focus:ring-charcoal disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                                        <label for="biologi" class="font-rubik text-xs md:text-base text-charcoal ms-3 dark:text-neutral-400">Biologi</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="shrink-0 size-5 mt-0.5 border-gray-200 rounded text-charcoal focus:ring-charcoal disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                                        <label for="fisika" class="font-rubik text-xs md:text-base text-charcoal ms-3 dark:text-neutral-400">Fisika</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="shrink-0 size-5 mt-0.5 border-gray-200 rounded text-charcoal focus:ring-charcoal disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                                        <label for="matematika-lanjut" class="font-rubik text-xs md:text-base text-charcoal ms-3 dark:text-neutral-400">Matematika Lanjut</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="shrink-0 size-5 mt-0.5 border-gray-200 rounded text-charcoal focus:ring-charcoal disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                                        <label for="informatika" class="font-rubik text-xs md:text-base text-charcoal ms-3 dark:text-neutral-400">Informatika</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pricing Type */}
                    <div class="hs-accordion-group">
                        <div class="hs-accordion active bg-alabaster p-2 rounded-lg border-2 border-charcoal" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                            <button class="hs-accordion-toggle hs-accordion-active:text-charcoal py-3 inline-flex items-center justify-between gap-x-3 w-full font-medium font-rubik text-start text-gray-500 hover:text-gray-500 hs-accordion-active:border-b-2 hs-accordion-active:border-charcoal disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                Pricing
                                <svg xmlns="http://www.w3.org/2000/svg" class="hs-accordion-active:hidden block size-5" fill="#323232" viewBox="0 0 256 256"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="hs-accordion-active:block hidden size-5" fill="#323232" viewBox="0 0 256 256"><path d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 flex flex-col" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                <div className="flex flex-col gap-4 p-5">
                                    <div class="flex items-center">
                                        <input type="checkbox" class="shrink-0 size-5 mt-0.5 border-gray-200 rounded text-charcoal focus:ring-charcoal disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" checked />
                                        <label for="free" class="font-rubik text-base text-charcoal ms-3 dark:text-neutral-400">Free</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="shrink-0 size-5 mt-0.5 border-gray-200 rounded text-charcoal focus:ring-charcoal disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                                        <label for="premium" class="font-rubik text-base text-charcoal ms-3 dark:text-neutral-400">Premium</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course;