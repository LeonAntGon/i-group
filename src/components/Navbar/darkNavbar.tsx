import { useEffect, useState } from "react"
import { dataHeader } from "../Header/Header.data"
import { NavbarProps } from "./Navbar.types"
import Link from "next/link";
import { motion } from 'framer-motion'

interface NavbarProps {
  openMobileMenu: boolean;
}

export default function DarkNavbar(props: NavbarProps) {
  const { openMobileMenu } = props;
  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight - 600) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="hidden sm:block">
      {isScrolling ? (
        <motion.nav key={1}
          variants={animationNavBar}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pl-auto mx-auto md:fixed z-[9999] right-0 left-0 px-6 py-4 text-white font-semibold bg-gray-600/40 top-10 rounded-3xl backdrop-blur-md w-fit"
        >
          <nav className="items-center gap-5 sm:flex">
            {dataHeader.map(({ id, name, link }) => (
              <Link key={id} href={link} className="hover:text-[#05a2a9] hover:border-b-[1px] hover:border-[#05a2a9] transition duration-300">{name}</Link>
            ))}
          </nav>
        </motion.nav>
      ) : (
        <div className={`${openMobileMenu ? 'absolute z-[1] left-0 top-20 bg-white r-0 w-full px-4 py-4' : 'hidden'} gap-5 sm:flex`}>
          {dataHeader.map(({ id, name, link }) => (
            <Link key={id} href={link} className="font-bold text-black hover:text-[#05a2a9] block hover:border-b-[1px] hover:border-[#05a2a9] transition duration-300">{name}</Link>
          ))}
        </div>
      )}
    </div>
  )
}

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
      type: "spring"
    }
  },
  exit: {
    y: 0 || -20,
    opacity: 0
  }
}
