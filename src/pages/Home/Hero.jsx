import React from 'react';
import { GoGoal } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselSlides = [
    {
        image: 'https://i.ibb.co/008N2TQ/Team-spirit-pana-1.png',
        caption: 'Find Your Tribe.',
        backgroundImage: 'https://i.ibb.co/45fFCdD/blob-haikei-9.png',
        locationText: 'Near You',
        description: 'Join like-minded people and explore your passions — from painting to gaming, there\'s a group for everyone.',
    },
    {
        image: 'https://i.ibb.co/Zzx2nHtZ/Good-team-cuate.png',
        caption: 'Find Your Passion',
        backgroundImage: 'https://i.ibb.co/N6ykTLt2/blob-haikei-7.png',
        locationText: 'In Your City',
        description: 'Find and follow your interests, make friends, and discover activities that truly excite you.',
    },
    {
        image: 'https://i.ibb.co/sp3Tdqx6/Team-work-bro.png',
        caption: 'Join the Fun',
        backgroundImage: 'https://i.ibb.co/fz3RJ5tK/blob-haikei-8.png',
        locationText: 'All Over Bangladesh',
        description: 'Connect with groups across the country and enjoy meaningful hobbies together.',
    },
];


const Hero = () => {
    return (
        <div className="relative rounded-b-3xl shadow overflow-hidden mx-auto">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={5000}
                transitionTime={900}
                swipeable
                emulateTouch
            >
                {carouselSlides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-stretch h-[600px] px-6 md:px-12"
                    >
                        {/* Left Text Pane */}
                        <div
                            className="md:w-1/2 flex flex-col justify-center text-left text-gray-900 p-4 md:p-12 rounded-lg"
                            style={{
                                backgroundImage: `url('${slide.backgroundImage}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
                                <Typewriter
                                    words={[slide.caption]}
                                    loop={false}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={40}
                                />
                            </h1>
                            <span className="flex items-center gap-3 text-blue-500 text-xl font-semibold mb-6">
                                {slide.locationText} <GoGoal />
                            </span>
                            <p className="text-lg sm:text-xl font-medium mb-8 max-w-lg">
                                {slide.description}
                            </p>
                            <Link to="/allGroups">
                                <button className="bg-[#FF8A78] font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300 ease-in-out ">
                                    Browse Groups
                                </button>

                            </Link>
                        </div>

                        {/* Right Image Pane */}
                        <div className="md:w-1/2 h-full flex items-center justify-center p-4 md:p-12">
                            <img
                                src={slide.image}
                                alt={slide.caption}
                                className="object-contain max-h-[500px] rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;
