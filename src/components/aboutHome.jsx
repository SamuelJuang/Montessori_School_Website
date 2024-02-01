import React from 'react';
import defaultImg from "../assets/test.png";
import tempImg from "../assets/temp.jpg";
import temp2 from "../assets/test2.jpg";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutHome = () => {

    const videoRef = useRef();
    const videoRef2 = useRef();
    const firstTextRef = useRef();

    const tlText = gsap.timeline({
        defaults: {repeat: 0, ease: "power2.out"},
        scrollTrigger: {
          trigger: firstTextRef.current,
          scrub: true,
          pin: false,
        }
    })

    const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          scrub: true,
          pin: false,
        }
      });

    
    useEffect(() => {
        tl2.fromTo([videoRef.current,videoRef2.current], {
            yPercent: -20,
            ease: 'none'
          }, {
            yPercent: -10,
            ease: 'none'
          })
    },[tl2])

    useEffect(() => {
        tlText.from(".line",1.8,{
            opacity: 0,
            y: 100,
            ease: "power4.out",
            delay: 1,
            skewY: 7,
            stagger: {
              amount: 0.3
            }
          })
    })

    useEffect(() => {
        tlText.from(".line2",1.8,{
            opacity: 0,
            y: 100,
            ease: "power4.out",
            delay: 1,
            skewY: 7,
            stagger: {
              amount: 0.3
            }
          })
    })

    return (
           <div className='flex flex-col gap-7'>
                <div className='flex flex-col lg:flex-row sm:flex-col'>
                    <div className='basis-8/12 mx-8 lg:ps-5 lg:ms-9 lg:mt-9 mt-5'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-purple-500'><strong>Know More About Us</strong></p>
                            <h1 className='text-4xl font-bold'>About Montessori School</h1>
                            <span>
                                <p className='text-slate-400 m-0 p-0 mt-5 line'>
                                One of the defining features of Montessori education is the use of specialised learning materials designed to encourage hands-on learning, free from adult direction. These materials are designed to stimulate children’s minds, encourage exploration, and inspire independent learning.
                                </p>
                                <p className='text-slate-400 m-0 p-0 mt-2 line'>
                                Montessori materials generally have special qualities that allow children the opportunity for success in their investigations into abstract concepts such as shapes and sizes.
                                </p>
                                <p className='text-slate-400 m-0 mt-2 line'>
                                Discover a world of learning at our Montessori school! We empower children through personalized education, hands-on experiences, and a nurturing environment. Our approach fosters independence, curiosity, and a lifelong love for learning. Join us in embracing each child's unique journey to success!
                                </p>
                            </span>
                    </div>
                    </div>
                    <div className='basis-4/12 lg:ps-5 lg:pe-9 lg:me-9 lg:mt-9 mt-5'>
                        <div className='w-11/12 h-96 mx-6 rounded-xl overflow-hidden'>
                            <img ref={videoRef} className="object-cover h-screen rounded-xl" src={tempImg} alt="test"/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className='basis-5/12 mx-6 lg:ps-5 lg:pe-5 lg:ms-9 mt-5 mb-5 '>
                        <div className='w-full overflow-hidden h-72 rounded-xl'>
                            <img ref={videoRef2} className="object-cover h-full rounded-xl" src={temp2} alt="test"/>
                        </div>
                    </div>
                    
                    <div className='basis-7/12 mx-2 ps-5 mb-9 pe-9 me-9 lg:mb-5 '>
                        <div className='flex flex-col gap-2'>
                            <span>
                            <p className='text-slate-400 m-0 p-0 mt-5 line2'>
                            One of the defining features of Montessori education is the use of specialised learning materials designed to encourage hands-on learning, free from adult direction. These materials are designed to stimulate children’s minds, encourage exploration, and inspire independent learning.
                            </p>
                            <p className='text-slate-400 m-0 p-0 mt-2 line2'>
                            Montessori materials generally have special qualities that allow children the opportunity for success in their investigations into abstract concepts such as shapes and sizes.
                            </p>
                            </span>
                        </div>
                    </div>
                </div>
               
           </div>
    );
};

export default AboutHome;
