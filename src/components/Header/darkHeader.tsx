"use client";
import Link from "next/link";
import { dataHeader } from "./Header.data";
import { useState, useEffect } from "react";
import  DarkNavbar  from "../Navbar/darkNavbar";
import LinksNavBar from "../Navbar/LinksNavBar";
import Image from 'next/image';
import Logo from "../../../public/assets/Logo-gris.jpg";
import DarkHamburguer from "../widgets/DarkHamburguer";

export function DarkHeader() {
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
            <div className="flex items-center justify-between px-5 sm:px-8 z-50">
                <Link href={"/"}>
                    <Image
                        src={Logo}
                        alt="Descripción de la imagen"
                        width={600} // Ancho deseado
                        height={400} // Alto deseado
                        priority // Opcional: prioriza el precargado de la imagen
                        className="w-[180px] h-[66px]"
                    />
                </Link>

                <DarkNavbar openMobileMenu={openMobileMenu} />

                {/* Responsive navbar */}
                <div className="flex sm:hidden z-40 focus-within:" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                    <DarkHamburguer crossed={openMobileMenu} setCrossedState={setOpenMobileMenu} />
                </div>

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

            </div>
        </header>
    );
}