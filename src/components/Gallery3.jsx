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

    return (
        <>
            <h1 className="text-4xl text-center font-semibold">Event #3</h1>
            <div className="text-center">
                <h1 className="text-gray-500 pt-4 pb-3">
                    Ikan hiu makan tomat, cakep banget.
                </h1>
            </div>
            <Swiper slidesPerView={'auto'}
                centeredSlides={true}
                breakpoints={{
                    1536: {
                        spaceBetween: 50
                    },
                    1280: {
                        spaceBetween: 40
                    },
                    1024: {
                        spaceBetween: 60
                    },
                    768: {
                        spaceBetween: 50
                    },
                }}
                spaceBetween={20}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className=""
                style={{
                    overflow: "visible",
                }}
            >

                {data.map((content, index) => (
                    <SwiperSlide key={index} className="h-full mt-5">
                        <div className="rounded-3xl pt-5 pb-12 items-center">
                            <img className="object-cover w-full aspect-video object-center rounded-2xl mx-auto" src={content} alt={index} />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}