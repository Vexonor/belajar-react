import React from 'react';
import CourseCard from './courseCard';
import TopExpertCard from './topExpertCard';
import HighlightCard from './highlightCard';
import BenefitCard from './benefitCard';
import InfiniteCard from '../../components/infiniteCard';

const Home = () => {
    const courseData = [
        { number: '01', title: 'Biology', description: 'The biology field explores the study of living organisms and their interactions with each other and the environment. It covers a wide range of topics, including cellular structure, genetics, evolution, ecosystems, and physiology.' },
        { number: '02', title: 'Physics', description: 'The physics field focuses on the study of matter, energy, and the fundamental forces that govern the universe. It explores concepts such as motion, force, energy transformations, waves, electricity, magnetism, and the nature of space and time.' },
        { number: '03', title: 'Informatics', description: 'Informatics education refers to the teaching and learning process focused on understanding the principles, concepts, and applications of information technology and computer science. It encompasses the study of hardware, software, networks, data, and algorithms to solve problems through programming and digital technologies.' },
        { number: '04', title: 'Advanced Mathematics', description: 'Advanced mathematics refers to the study of complex mathematical concepts and methods that extend beyond basic arithmetic, algebra, geometry, and introductory calculus.' },
        { number: '05', title: 'Sociology ', description: 'Sociology is the study of society, social behavior, and the interactions between individuals, groups, and institutions.It explores how human societies are organized, how social norms and values shape human behavior, and how social forces influence individual actions and group dynamics' },
        { number: '06', title: 'Economics ', description: 'Economics is the study of how societies use scarce resources to produce valuable goods and services and distribute them among individuals. It examines how people make choices in conditions of scarcity, the effects of these choices on the broader economy, and how policies and institutions shape economic outcomes.' }
    ];
    const expertCard = [
        { image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D', name: 'Mentor 1', description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ' },
        { image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D', name: 'Mentor 2', description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ' },
        { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D', name: 'Mentor 3', description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ' },
    ];
    const highlightData = [
        { header: '4,5', icon: <svg xmlns="http://www.w3.org/2000/svg" className="text-charcoal size-4" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>, text: 'Rating All Platform' },
        { header: '50', icon: <svg xmlns="http://www.w3.org/2000/svg" className="text-charcoal size-4" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>, text: 'Kursus Gratis' },
        { header: '200', icon: <svg xmlns="http://www.w3.org/2000/svg" className="text-charcoal size-4" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>, text: 'Tutor Berpengalaman' },
        { header: '200', icon: <svg xmlns="http://www.w3.org/2000/svg" className="text-charcoal size-4" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>, text: 'Total Kursus' },
    ];
    const benefitData = [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="#FAFAFA" viewBox="0 0 256 256"><path d="M229.66,114.34l-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V128h40a8,8,0,0,0,5.66-13.66ZM176,112a8,8,0,0,0-8,8v24H88V120a8,8,0,0,0-8-8H51.31L128,35.31,204.69,112Zm8,104a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,216Zm0-32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,184Z"></path></svg>, title: 'Skill Improvement', description: 'Unlock your potential with hands-on learning and expert guidance to continuously enhance your skill set' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="#FAFAFA" viewBox="0 0 256 256"><path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path></svg>, title: 'Unique Course', description: 'Get personalized recommendations powered by AI to optimize your learning journey and improve performance' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="#FAFAFA" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>, title: 'Top Rated Mentor', description: 'Learn from the best in the field, with access to mentors rated highly by students for their expertise and teaching' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="#FAFAFA" viewBox="0 0 256 256"><path d="M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z"></path></svg>, title: 'Discussion Field', description: 'Serves as a dedicated space for users to exchange ideas, share opinions, and collaborate on specific topics' },
    ]
    return (
        <div className="w-11/12 mx-auto">
            {/* Highlight */}
            <div className="bg-alabaster z-50 border-2 border-charcoal rounded-md flex justify-between md:px-10 lg:px-20 py-5">
                {highlightData.map((card, index) =>
                    <HighlightCard
                        key={index}
                        header={card.header}
                        icon={card.icon}
                        text={card.text}
                    />
                )}
            </div>
            <div className="w-5/12 bg-charcoal h-2 mx-auto rounded-b-lg">
                <p className="opacity-0">f</p>
            </div>

            {/* Benefit */}
            <h2 className="font-rubik font-semibold text-medium lg:text-xl xl:text-3xl text-center my-5 w-60 lg:w-max mx-auto">
                The Complete Platform for Learning and collaboration
            </h2>
            <p className="font-rubik text-center text-sm xl:text-lg text-gray-500">
                Connect with top-rated mentors, track your progress, and receive personalized insights to sharpen your skills and Collaboration all in one comprehensive platform
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
                {benefitData.map((card, index) =>
                    <BenefitCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                )}
            </div>
            {/* Course */}
            <div className="flex flex-wrap justify-between items-center gap-2 my-5">
                <h3 className="font-rubik font-semibold text-lg lg:text-2xl text-charcoal w-full">Course</h3>
                <p className="font-rubik text-xs lg:text-lg text-gray-500 w-10/12">
                    The course field provides detailed information about the structure, content, and objectives of a specific course. It serves as a comprehensive guide for learners, outlining key topics, learning outcomes, and any required materials or prerequisites.
                </p>
                <a href="#" className="font-rubik text-sm font-medium bg-alabaster rounded-md p-2 border-2 border-charcoal">
                    <button>
                        View All
                    </button>
                </a>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courseData.map((card, index) =>
                    <CourseCard
                        key={index}
                        number={card.number}
                        title={card.title}
                        description={card.description}
                    />
                )}
            </div>
            {/* Top Rated Expert */}
            <div className="w-full bg-alabaster my-5 flex flex-col gap-4 justify-center items-center px-5 py-10">
                <h2 className="font-rubik font-bold text-charcoal text-2xl w-72 lg:w-full text-center mx-auto mt-5">
                    Learn from Top-Rated Experts
                </h2>
                <p className="font-rubik text-xs lg:text-base text-gray-500 text-center">
                    Gain hands-on experience and industry insights from mentors who are trusted and highly rated by learners like you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {expertCard.map((expert, index) =>
                        <TopExpertCard
                            key={index}
                            image={expert.image}
                            name={expert.name}
                            description={expert.description}
                        />
                    )}
                </div>
                <a href="#" className="bg-charcoal flex justify-center items-center py-2 px-2 lg:px-5 rounded-md">
                    <button type='button' className="flex justify-center items-center gap-2 font-rubik text-alabaster font-medium mx-auto">
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="#FAFAFA" viewBox="0 0 256 256"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg>
                    </button>
                </a>
            </div>
            {/* Become Mentor */}
            <div className="w-full">
                <h2 className="font-rubik text-center text-charcoal text-2xl lg:text-3xl font-bold">
                    Lead the Way as a Mentor
                </h2>
                <p className="font-rubik text-center text-gray-500 text-sm lg:text-lg lg:w-10/12 mx-auto">
                    Help shape the future by guiding aspiring learners. Become a mentor, share your knowledge, and inspire the next generation of skilled professionals.
                </p>
                <div className="w-11/12 h-60 md:h-80 lg:h-[30rem] xl:h-[40rem] bg-mentor-bg bg-cover bg-center mx-auto rounded-md my-5">
                    <div className="backdrop-brightness-75 p-5 rounded-xl w-full h-full flex flex-col justify-center items-start gap-2">
                        <h2 className="font-rubik font-bold text-xl md:text-3xl xl:text-6xl text-alabaster">
                            Become Mentor
                        </h2>
                        <a href="" className="bg-charcoal font-rubik text-sm md:text-lg lg:text-2xl text-alabaster font-semibold py-2 px-4 rounded-md">
                            <button type='button'>
                                Start a Course Today
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Customer Review */}
            <div className="w-full overflow-x-hidden">
                <h2 className="font-rubik text-center text-charcoal text-2xl lg:text-3xl font-bold w-60 md:w-max mx-auto">
                    What Our Customer Say About Us
                </h2>
                <InfiniteCard />
            </div>
        </div>
    )
}

export default Home