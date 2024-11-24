import React from 'react';

const BenefitCard = ({ icon, title, description }) => {
    return (
        <div className="col-span-1 flex flex-col justify-center items-center gap-3">
            <div className="bg-charcoal p-3 w-max rounded-md">
                {icon}
            </div>
            <h3 className="font-rubik font-medium text-center xl:text-lg">{title}</h3>
            <p className="font-rubik text-center text-xs xl:text-base text-gray-500 h-20 lg:h-28 overflow-auto p-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                {description}
            </p>
        </div>
    )
}

export default BenefitCard;