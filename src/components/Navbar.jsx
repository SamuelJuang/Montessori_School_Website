import React, { useEffect, useState } from 'react';
import logo from '../assets/logoMCS.png';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('');
  const [menuIcon, setMenuIcon] = useState(<IoMenu className="text-2xl"/>);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuIcon(menuOpen ? <IoMenu className="text-2xl"/> : <IoClose className="text-2xl"/>);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavbarVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setMenuAnimation('fadeIn');
    } else {
      setMenuAnimation('fadeOut');
    }
  }, [menuOpen]);

  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/' },
    { name: 'Admission', link: '/' },
    { name: 'Events', link: '/' },
    { name: 'Gallery', link: '/gallery' }
  ];
  
  return (
    <> 
    {/* Ini navbarnya */}
      <div className={`shadow-md bg-transparent ${navbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} duration-500 ease-in-out`}>
        <div className="md:px-10 py-4 px-7 flex justify-between items-center flex-col md:flex-row">
          <div className="flex justify-between w-full md:w-auto items-center md:mb-0">
          
            {/* logo mcs */}
            <div className="flex text-2xl cursor-pointer items-center gap-2">
              <img src={logo} alt="Logo" className="h-7 w-7 md:h-14 md:w-14" />
            </div>

            {/* ini buttonnya */}
            <div className="md:hidden pt-2">
              <button
                onClick={toggleMenu}
                className="text-black"
                >
                {menuIcon}
              </button>
            </div>
          </div>

          {/* ini menu2nya */}
          <ul className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:items-center w-full md:w-auto text-center ${menuAnimation}`}>
            {Links.map((link, index) => (
              <li key={index} className={`relative font-semibold my-6 md:my-0 md:mx-4 ${location.pathname === '/' ? 'text-white' : 'text-black'}`}>
                <a href={link.link} className={`relative hover:text-dark-500 transition duration-500 ease-in-out group ${location.pathname === '/' ? 'text-white' : 'text-black'}`}>
                  {link.name}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 transform origin-bottom scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-95 ${location.pathname === '/' ? 'bg-white' : 'bg-black'}`}></span>
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
