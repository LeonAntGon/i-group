"use client";
import Link from "next/link";
import { dataHeader } from "./Header.data";
import Hamburguer from "../widgets/Hamburguer";
import { useState, useEffect } from "react";
import { Navbar } from "../Navbar/index";
import LinksNavBar from "../Navbar/LinksNavBar";
import Image from 'next/image';
import Logo from "../../../public/assets/Logo.png";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openMobileMenu]);

  return (
    <header className="px-auto py-5 w-full z-10">
      <nav className="flex items-center justify-between px-5 sm:px-8 z-20">
        <Link href="/">
          <Image
            src={Logo}
            alt="Descripción de la imagen"
            width={600}
            height={400}
            priority
            className="w-[180px] h-[66px]"
          />
        </Link>

        <Navbar openMobileMenu={openMobileMenu} />

        {/* Hamburger Menu for Mobile */}
        <div className="flex sm:hidden z-40">
          <Hamburguer 
            crossed={openMobileMenu} 
            setCrossedState={setOpenMobileMenu} 
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            openMobileMenu ? 'block' : 'hidden'
          } md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 z-20`}
        >
          <ul className="flex flex-col items-center py-4 mt-20">
            <li className="w-full">
              <Link 
                href="/" 
                onClick={() => setOpenMobileMenu(false)}
                className="block py-2 px-6 text-xl text-white text-center hover:bg-[#1cc3ec] border-b border-[#91d9eb]"
              >
                Inicio
              </Link>
            </li>
            <li className="w-full">
              <Link 
                href="/nosotros" 
                onClick={() => setOpenMobileMenu(false)}
                className="block py-2 px-6 text-xl text-white text-center hover:bg-[#1cc3ec] border-b border-[#91d9eb]"
              >
                Sobre nosotros
              </Link>
            </li>
            <li className="w-full">
              <Link 
                href="/propiedades" 
                onClick={() => setOpenMobileMenu(false)}
                className="block py-2 px-6 text-xl text-white text-center hover:bg-[#1cc3ec] border-b border-[#91d9eb]"
              >
                Propiedades
              </Link>
            </li>
            <li className="w-full">
              <Link 
                href="/proyectos" 
                onClick={() => setOpenMobileMenu(false)}
                className="block py-2 px-6 text-xl text-white text-center hover:bg-[#1cc3ec] border-b border-[#91d9eb]"
              >
                Proyectos inmobiliarios
              </Link>
            </li>
            <li className="w-full">
              <Link 
                href="/contacto" 
                onClick={() => setOpenMobileMenu(false)}
                className="block py-2 px-6 text-xl text-white text-center hover:bg-[#1cc3ec] border-b border-[#91d9eb]"
              >
                Conctacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}