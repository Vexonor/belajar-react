import React from 'react';
import ReviewCard from '../view/Home/reviewCard';

const InfiniteCard = () => {
    const review = [
        { quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi assumenda veniam fugit harum possimus ipsum dolor beatae adipisci iusto nam, ut consectetur eaque excepturi similique explicabo laborum, a iure vel?', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80', name: 'Pelajar 1' },
        { quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi assumenda veniam fugit harum possimus ipsum dolor beatae adipisci iusto nam, ut consectetur eaque excepturi similique explicabo laborum, a iure vel?', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80', name: 'Pelajar 2' },
        { quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi assumenda veniam fugit harum possimus ipsum dolor beatae adipisci iusto nam, ut consectetur eaque excepturi similique explicabo laborum, a iure vel?', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80', name: 'Pelajar 3' },
        { quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi assumenda veniam fugit harum possimus ipsum dolor beatae adipisci iusto nam, ut consectetur eaque excepturi similique explicabo laborum, a iure vel?', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80', name: 'Pelajar 4' },
        { quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi assumenda veniam fugit harum possimus ipsum dolor beatae adipisci iusto nam, ut consectetur eaque excepturi similique explicabo laborum, a iure vel?', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80', name: 'Pelajar 5' },
    ];

    return (
        <div className="overflow-x-hidden flex gap-4 max-w-[100vw]  group">
            <div
                className="flex gap-4 animate-loop-scroll group-hover:paused">
                {[...review, ...review].map((card, index) => (
                    <ReviewCard
                        key={index}
                        quote={card.quote}
                        image={card.image}
                        name={card.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default InfiniteCard;
