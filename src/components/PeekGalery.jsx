import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

export default function PeekGalery() {
    const galleries = [
        "../assets/videos/C0036.MP4",
        "../assets/videos/C0039.MP4",
        "../assets/videos/C0063.MP4",
        "../assets/videos/C0066.MP4",
        "../assets/videos/C0071.MP4",
        "../assets/videos/C0092.MP4"
    ];

    return (
        <>
            <p className="text-5xl font-semibold text-center mt-10">Peek The Gallery</p>
            <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]} className="h-full w-3/4">
                <ol>
                    {galleries.map((content, index) => (
                        <SwiperSlide key={index} className="h-full container mt-10">
                            <div className="mx-40 bg-slate-100 rounded-3xl pt-5 pb-12">
                                <div className="items-center pt-5 px-5">
                                    <video src={content}></video>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </ol>
            </Swiper>
        </>
    );
}

