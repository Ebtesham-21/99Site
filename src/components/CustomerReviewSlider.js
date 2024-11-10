"use client";
import {useState} from 'react';
import Image from 'next/image';

const reviews = [
    {
        id: 1,
        quote: "Animation took our brands to the next level.",
        name:"Angela Markes", 
        title: "Founder Space",
        image: "/avatar.png",
    },
    {
        id: 2,
        quote: "Animations helped us engage our audience.",
        name:"Angela Markes", 
        title: "Founder Space",
        image: "/avatar.png",

    },
];

const CustomerReviewSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length-1: prevIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1? 0 : prevIndex + 1
        );
    };

    return (
        <div className="bg-[url('/slider-bg.png')] bg-cover bg-center text-white  px-4 relative mx-auto
                 w-full h-auto  md:h-[662px] max-w-full  flex justify-center items-center">
            <div className='text-center max-w-xl mx-auto'>
                <p className='text-xl md:text-2xl lg:text-3xl font-semibold'>
                “{reviews[currentIndex].quote}”
                </p>

                <div className='flex items-center justify-center mt-8'>
                    <Image
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    width={60}
                    height={60}
                    className='rounded-full '
                    />
                </div>
                {/* <div className="absolute left-1/2 transform -translate-x-1/2 top-10 w-[40%] h-0.5 bg-white mt-24"></div> */}
                <h3 className='text-lg font-bold mt-4'>
                {reviews[currentIndex].name}
                </h3>
                <p className='text-sm'>
                {reviews[currentIndex].title}
                </p>
            </div>

            {/* arrows for navigation */}
            <button 
            onClick={handlePrev}
            className='absolute left-2 top-1/2 transform -translate-y-1/2  text-red-500 rounded-full p-2'>
                  <Image
                    src="/Back To.png"
                    alt="Back Arrow"
                    width={60}
                    height={60}
                    className='rounded-full '
                    />
                
            </button>
            <button 
            onClick = {handleNext}
            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 rounded-full p-2'
            >
                 <Image
                    src="/Front.png"
                    alt="Front Arrow"
                    width={60}
                    height={60}
                    className='rounded-full '
                    />
            </button>
        </div>
    );

   
};

export default CustomerReviewSlider;