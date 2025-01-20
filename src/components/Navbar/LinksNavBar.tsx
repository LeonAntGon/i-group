import { useEffect, useState } from "react";
import { LinksNavBarProps } from './Navbar.types';
import Link from "next/link";
import { motion } from 'framer-motion';

const LinksNavBar: React.FC<LinksNavBarProps> = ({ menuItems, onLinkClick }) => {
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight - 600) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="hidden sm:block">
            {isScrolling ? (
                <motion.nav
                    key={1}
                    variants={animationNavBar}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="pl-auto mx-auto md:fixed z-[9999] right-0 left-0 px-6 py-4 text-white font-semibold bg-gray-400/40 top-10 rounded-3xl backdrop-blur-md w-fit"
                >
                    <nav className="items-center gap-5 sm:flex">
                        {menuItems.map(({ text, href }, index) => (
                            <Link 
                                key={index} 
                                href={href} 
                                onClick={onLinkClick}
                                className="hover:text-[#05a2a9] hover:border-b-[1px] hover:border-[#05a2a9] transition duration-300"
                            >
                                {text}
                            </Link>
                        ))}
                    </nav>
                </motion.nav>
            ) : (
                <div className="gap-5 sm:flex">
                    {menuItems.map(({ text, href }, index) => (
                        <Link 
                            key={index} 
                            href={href}
                            onClick={onLinkClick} 
                            className="font-bold text-white hover:text-black block hover:border-b-[1px] hover:border-black transition duration-300"
                        >
                            {text}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

const animationNavBar = {
    initial: {
        y: -20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            stiffness: 100,
            damping: 20,
            type: "spring",
        },
    },
    exit: {
        y: 0 || -20,
        opacity: 0,
    },
};

export default LinksNavBar;

