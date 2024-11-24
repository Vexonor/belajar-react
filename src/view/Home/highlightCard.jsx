import React from 'react';

const HighlightCard = ({ header, icon, text }) => {
    return (
        <div className="flex flex-col justify-center items-center font-rubik font-medium text-center text-[0.8rem] lg:text-lg">
            <span className="flex justify-center items-center gap-2 text-base xl:text-2xl">
                {header}
                {icon}
            </span>
            {text}
        </div>
    )
}

export default HighlightCard;