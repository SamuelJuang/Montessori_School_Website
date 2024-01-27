import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import defaultImg from "../assets/test.png";
import defaultImg2 from "../assets/test2.jpg";
import { Square } from "react-bootstrap-icons";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

export default function Gallery3() {
    const data = [
        defaultImg,
        defaultImg2,
        defaultImg,
        defaultImg2,
        defaultImg,
        defaultImg2,
    ];

    // useEffect(() => {
    //     const handleResize = () => {
    //         const screenWidth = window.innerWidth;

    //         if (screenWidth >= 1200) {
    //             setSpaceBetween(-200); // Adjust this value for extra-large screens
    //         } else if (screenWidth >= 992) {
    //             setSpaceBetween(-400); // Adjust this value for large screens
    //         } else if (screenWidth >= 768) {
    //             setSpaceBetween(-300); // Adjust this value for medium screens
    //         } else {
    //             setSpaceBetween(-200); // Default value for small screens
    //         }
    //     };

    //     handleResize();

    //     // Event listener for screen resize
    //     window.addEventListener('resize', handleResize);

    //     // Cleanup the event listener on component unmount
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return (
        <>
            <h1 className="text-4xl text-center font-semibold">Event #3</h1>
            <div className="text-center">
                <h1 className="text-gray-500 pt-4 pb-3">
                    Ikan hiu makan tomat, cakep.
                </h1>
            </div>
            <Swiper slidesPerView={'auto'}
                centeredSlides={true}
                breakpoints={{
                    1536: {
                        spaceBetween: -200
                    },
                    1280: {
                        spaceBetween: -160
                    },
                    1024: {
                        spaceBetween: -130
                    },
                    768: {
                        spaceBetween: -100
                    },
                }}
                spaceBetween={5}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="overflow-visible"
            >

                <ol>
                    {data.map((content, index) => (
                        <SwiperSlide key={index} className="h-full w-full mt-5 overflow-visible">
                            <div className="rounded-3xl pt-5 pb-12 items-center overflow-visible">
                                <img className="object-cover object-center sm: size-full lg: h-10/12 lg: w-10/12 rounded-2xl mx-auto overflow-visibles" src={content} alt={index} />
                            </div>
                        </SwiperSlide>
                    ))}
                </ol>

            </Swiper>
        </>
    )
}