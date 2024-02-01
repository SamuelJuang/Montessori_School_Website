import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function PeekGalery() {
    const galleries = [
        "src/assets/videos/C0036.MP4",
        "src/assets/videos/C0039.MP4",
        "src/assets/videos/C0063.MP4",
        "src/assets/videos/C0066.MP4",
        "src/assets/videos/C0071.MP4",
        "src/assets/videos/C0092.MP4"
    ];

    return (
        <>
            <p className="text-4xl font-semibold text-center mt-20">Peek The Gallery</p>
            <Swiper
                navigation={true}
                rewind={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                    1536: {
                        spaceBetween: 0
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
                // style={{ overflow: "visible" }}
                className="h-full w-10/12 lg:w-1/5` items-center"
                autoplay={{ delay: 5000 }}
                centeredSlides={true}
            >
                {galleries.map((content, index) => (
                    <SwiperSlide key={index} className="h-full mt-10">
                        <div className="lg:mx-20 rounded-3xl pb-12 items-center">
                            <video className="object-cover w-full aspect-video object-center rounded-xl mx-auto" src={content} autoPlay muted loop />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

