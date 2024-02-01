import React from 'react';

const VideoBackgroundHome = () => {
    return (
        <div>
            <video
                src="src\assets\testVideo.MP4"
                autoPlay
                loop
                muted 
                className="object-cover w-screen h-screen brightness-[.25]"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-balance">
                <h1 className="lg:text-5xl font-bold text-white pt-5 md:text-5xl font-bold text-white pt-5 sm:text-xl font-bold text-white pt-5">Montessori Community School </h1>
                <p className="lg:text-sm text-slate-400 pt-5 sm:text-lg text-slate-400 pt-5">Explore learning through play and discovery at our Montessori school! We nurture independence, curiosity, and a passion for lifelong learning in a supportive environment tailored to each child's needs</p>
            </div>
        </div>
    );
};

export default VideoBackgroundHome;
