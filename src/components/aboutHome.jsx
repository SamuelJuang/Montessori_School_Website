import React from 'react';
import defaultImg from "../assets/test.png";
import tempImg from "../assets/temp.jpg";

const AboutHome = () => {
    return (
           <div className='gap-2'>
                <div className='flex flex-col lg:flex-row sm:flex-col'>
                    <div className='basis-8/12 mx-4 sm:mx-4 lg:ps-5 lg:ms-9 lg:mt-9 mt-5'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-purple-500'><strong>Know More About Us</strong></p>
                            <h1 className='text-4xl font-bold'>About Montessori School</h1>
                            <p className='text-slate-400 m-0 p-0 mt-5'>
                            One of the defining features of Montessori education is the use of specialised learning materials designed to encourage hands-on learning, free from adult direction. These materials are designed to stimulate children’s minds, encourage exploration, and inspire independent learning.
                            </p>
                            <p className='text-slate-400 m-0 p-0 mt-2'>
                            Montessori materials generally have special qualities that allow children the opportunity for success in their investigations into abstract concepts such as shapes and sizes.
                            </p>
                            <p className='text-slate-400 m-0 mt-2'>
                            Discover a world of learning at our Montessori school! We empower children through personalized education, hands-on experiences, and a nurturing environment. Our approach fosters independence, curiosity, and a lifelong love for learning. Join us in embracing each child's unique journey to success!
                            </p>
                    </div>
                    </div>
                    <div className='basis-4/12 lg:ps-5 lg:pe-9 lg:me-9'>
                        <div className='lg:mb-9 lg:mt-9'>
                            <img className="object-cover rounded-xl w-11/12 h-1/5 mt-5 mx-auto" src={tempImg} alt="test"/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className='basis-5/12 lg:ps-5 lg:pe-5 lg:ms-9 sm:mx-4'>
                        <div className='mb-5 mx-4 h-1/5'>
                            <img className="object-cover rounded-xl" src={defaultImg} alt="test"/>
                        </div>
                    </div>
                    
                    <div className='basis-7/12 ps-5 mb-3 pe-9 me-9 lg:mb-5 '>
                        <div className='flex flex-col gap-2'>
                            <p className='text-slate-400 m-0 p-0 mt-5'>
                            One of the defining features of Montessori education is the use of specialised learning materials designed to encourage hands-on learning, free from adult direction. These materials are designed to stimulate children’s minds, encourage exploration, and inspire independent learning.
                            </p>

                            <p className='text-slate-400 m-0 p-0 mt-2'>
                            Montessori materials generally have special qualities that allow children the opportunity for success in their investigations into abstract concepts such as shapes and sizes.
                            </p>
                        
                          
                        </div>
                    </div>
                </div>
               
           </div>
    );
};

export default AboutHome;
