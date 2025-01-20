"use client";
import Link from "next/link";
import { dataHeader } from "./Header.data";
import Hamburguer from "../widgets/Hamburguer";
import { useState, useEffect } from "react";
import { Navbar } from "../Navbar/index";
import  LinksNavBar  from "../Navbar/LinksNavBar";
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

                <Navbar openMobileMenu={openMobileMenu} />

                {/* Responsive navbar */}
                <div className="flex sm:hidden z-40 focus-within:" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                    <Hamburguer crossed={openMobileMenu} setCrossedState={setOpenMobileMenu} />
                </div>

                
            </div>
        </header>
    );
}