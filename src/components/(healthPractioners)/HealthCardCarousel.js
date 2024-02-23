import React, { useState, useRef } from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const [touchStartX, setTouchStartX] = useState(null);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
        );
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (touchStartX === null) {
            return;
        }
        const touchEndX = e.touches[0].clientX;
        const diffX = touchStartX - touchEndX;
        if (diffX > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
        setTouchStartX(null);
    };

    return (
        <div className="relative mb-3" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className='w-full flex flex-row items-center mb-3'>
                <h3 className="text-left font-bold text-md ">Top Health Practioners For you</h3>
                <div className=' flex justify-end ml-auto'>
                    <button onClick={prevSlide} className="bg-transparent px-3 py-1  hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md mr-4"><FaLessThan /></button>
                    <button onClick={nextSlide} className="bg-transparent px-3 py-1  hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md"><FaGreaterThan /></button>
                </div>
            </div>
            
            <div className="overflow-hidden relative">
                <div ref={containerRef} className="flex transition-transform ease-in-out duration-300 transform" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {React.Children.map(children, (child, index) => (
                        <div
                            className="w-full flex-shrink-0"
                            key={index}
                        >
                            {child}
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Carousel;
