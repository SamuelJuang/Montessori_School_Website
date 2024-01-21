import logo from '../assets/logoMCS.png';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {

    const Icons = [
        { icon: <FaFacebookF />, link: "https://www.facebook.com/MCSPekanbaru" },
        { icon: <FaYoutube />, link: "https://www.youtube.com/@mcshome" },
        { icon: <FaInstagram />, link: "#" },
    ];

    const Navigation = [
        { name: 'Home', link: '/' },
        { name: 'Gallery', link: '/gallery' }
    ];

    const Contacts = [
        { name: 'Address:', link: '#' },
        { name: 'Email:', link: '#' },
        { name: 'Telephone:', link: '#' }
    ];

    return (
        <footer className="bg-black text-white">
            <div className="flex flex-row gap-2 py-4 ps-7">
                <img src={logo} alt="Logo" className="h-12 sm:h-16 lg:h-20 w-auto" />
                <span className="font-semibold text-lg sm:text-xl lg:text-2xl my-auto">Montessori Community School</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4">
                {/* Navigasi */}
                <ul className="col-span-2">
                    <h1 className="mb-1 font-semibold">Navigation</h1>
                    {Navigation.map((menu) => (
                        <li key={menu.name}>
                            <a className="text-gray-400 hover:text-white duration-300 text-sm cursor-pointer leading-6" href={menu.link}>
                                {menu.name}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Contacts */}
                <ul className="col-span-1">
                    <h1 className="mb-1 font-semibold">Contacts</h1>
                    {Contacts.map((menu) => (
                        <li key={menu.name}>
                            <a className="text-gray-400 hover:text-white duration-300 text-sm cursor-pointer leading-6" href={menu.link}>
                                {menu.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-between items-center text-center pt-2 text-gray-400 text-sm pb-8">
                <span className="ps-7 font-semibold">© Copyright MCS 2024</span>
                <div className="text-black-500 pr-5">
                    {window.location.hash === '' && (
                        Icons.map((socialIcon) => (
                            <a
                                key={socialIcon.link}
                                href={socialIcon.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 cursor-pointer inline-flex items-center rounded-full bg-white mx-1.5 text-xl 
                                hover:text-black duration-300"
                            >
                                {socialIcon.icon}
                            </a>
                        ))
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
