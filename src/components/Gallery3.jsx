import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import defaultImg from "../assets/test.png";
import defaultImg2 from "../assets/test2.jpg";

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

    const component3Ref = useRef();

    let tlComponent = gsap.timeline({
        scrollTrigger: {
            trigger: component3Ref.current,
            scrub: true,
            pin: false,
            markers: true,
            start: 'top 90%',
            end: '+=50% 90%',
            snap: {
                ease: "power4.in"
            }
        }
    })

    useEffect(() => {
        tlComponent.fromTo(".event", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1
        });
        console.log("masuk masuke vent 4");
        console.log(component3Ref);

        return () => {
            tlComponent.kill();
        };
    }, []);

    return (
        <>
            <h1 ref={component3Ref} className="text-4xl text-center font-semibold event">Event #3</h1>
            <div ref={component3Ref} className="text-center event">
                <h1 className="text-gray-500 pt-4 pb-3">
                    Ikan hiu makan tomat, cakep banget.
                </h1>
            </div>
            <Swiper
                ref={component3Ref}
                slidesPerView={'auto'}
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
                rewind={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                style={{
                    overflow: "visible",
                }}
                className="event"
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