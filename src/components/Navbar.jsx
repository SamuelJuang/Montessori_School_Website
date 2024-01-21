import React, { useEffect, useState } from 'react';
import logo from '../assets/logoMCS.png';

const Navbar = () => {
  //Untuk animasi navbar
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavbarVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/' },
    { name: 'Admission', link: '/' },
    { name: 'Events', link: '/' },
    { name: 'Gallery', link: '/gallery' }
  ];

  return (
    <>
      <div className={`shadow-md bg-transparent ${navbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} duration-500 ease-in-out`}>
        <div className="md:px-10 py-4 px-7 flex justify-between items-center">
          {/* Ini logo MCS */}
          <div className="flex text-2xl cursor-pointer items-center gap-2">
            <img src={logo} alt="Logo" className="h-14 w-14" />
          </div>

          {/* Link menu */}
          <ul className="md:flex pl-9 md:pl-0">
            {Links.map((link, index) => (
              <li key={index} className="relative font-semibold my-7 md:my-0 md:ml-8">
                <a href={link.link} className="relative hover:text-dark-500 transition duration-500 ease-in-out group">
                  {link.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform origin-bottom scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-95"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
