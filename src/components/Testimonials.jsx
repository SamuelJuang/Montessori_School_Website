import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';


import fam1 from "../assets/testimonials/fam-1.jpg"
import fam2 from "../assets/testimonials/fam-2.jpg"
import fam3 from "../assets/testimonials/fam-3.jpg"
import by1 from "../assets/testimonials/1x1 fam.png"


export default function Testimonials() {
    const data = [
        {
            name: "Mrs & Mr.Okochi, Parents of Ichiro(Year 3) & Kafu",
            desc: "JMS style of education is very different from that of Japan. In Japan mostly students rely on memorization – basis, however at JMS, kids are taught to be more creative from experience – basis. Our kids love JMS so much that even on holidays, they tells us they want to go to school!",
            pic: by1
        },
        {
            name: "Mrs & Mr.Okochi, Parents of Ichiro(Year 3) & Kafu",
            desc: "JMS style of education is very different from that of Japan. In Japan mostly students rely on memorization – basis, however at JMS, kids are taught to be more creative from experience – basis. Our kids love JMS so much that even on holidays, they tells us they want to go to school!",
            pic: fam2
        },
        {
            name: "Mrs & Mr.Okochi, Parents of Ichiro(Year 3) & Kafu",
            desc: "JMS style of education is very different from that of Japan. In Japan mostly students rely on memorization – basis, however at JMS, kids are taught to be more creative from experience – basis. Our kids love JMS so much that even on holidays, they tells us they want to go to school!",
            pic: fam3
        },
        {
            name: "Mrs & Mr.Okochi, Parents of Ichiro(Year 3) & Kafu",
            desc: "JMS style of education is very different from that of Japan. In Japan mostly students rely on memorization – basis, however at JMS, kids are taught to be more creative from experience – basis. Our kids love JMS so much that even on holidays, they tells us they want to go to school!",
            pic: fam1
        },
    ];


    return (
        <>
            <p className="text-5xl font-semibold text-center mt-10">Testimonials</p>
            <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]} className="h-full w-3/4">
                <ol>
                    {data.map((content, index) => (
                        <SwiperSlide key={index} className="h-full container mt-10">
                            <div className="mx-40 bg-slate-100 rounded-3xl pt-5 pb-12">
                                <div className="text-center pt-5 px-5 font-semibold text-4xl">
                                    {content.name}
                                </div>
                                <div className="container my-3 py-3 px-5 text-center text-xl font-light leading-normal">
                                    {content.desc}
                                </div>
                                <div className="container mx-auto size-44">
                                    <img className="rounded-full border-4 border-sky-500" src={content.pic} alt={content.name} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </ol>
            </Swiper>
        </>
    );
}