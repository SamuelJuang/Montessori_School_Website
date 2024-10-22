import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import vid1 from "../assets/videos/C0071.mp4";
import vid2 from "../assets/videos/peek2.mp4";
import vid3 from "../assets/videos/letthemcook.mp4";
import vid4 from "../assets/videos/C0063.mp4";
import vid5 from "../assets/videos/peek2.mp4";
import vid6 from "../assets/videos/C0071.mp4";

gsap.registerPlugin(ScrollTrigger);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function PeekGalery() {
    const galleries = [vid1, vid2, vid3, vid4, vid5, vid6];


    const componentRef = useRef();

    useEffect(() => {
        if (componentRef.current) {
            gsap.to(".swiper2", {
                opacity: 1,
                scrollTrigger: {
                    trigger: componentRef.current,
                    scrub: true,
                    pin: false,
                    start: 'top 90%',
                    end: '+=50% 90%',
                }
            });
        }
    }, [componentRef.current]);


    return (
        <>
            <p className="text-4xl font-semibold text-center mt-20 swiper2 opacity-0">Peek The Gallery</p>
            <Swiper
                ref={componentRef}
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
                className="h-full w-10/12 lg:w-1/5` items-center swiper2 opacity-0"
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