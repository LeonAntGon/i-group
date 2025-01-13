"use client"
import Link from "next/link"
import { dataHeader } from "./Header.data"
import Hamburguer from "../widgets/Hamburguer"
import { useState, useEffect } from "react"
import { Navbar } from "../Navbar/index";
import LinksNavBar from "../Navbar/LinksNavBar"
import Image from 'next/image';
import Logo from "../../../public/assets/Logo.png"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

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

                

                <Navbar openMobileMenu={openMobileMenu}/>

                


                {/*responsive navbar*/}
                <div className="flex sm:hidden z-40 focus-within:"
                onClick={() => setOpenMobileMenu(!openMobileMenu)} >
                  <Hamburguer crossed={openMobileMenu} setCrossedState={setOpenMobileMenu} />
                </div>

                
                <nav className={`z-10 mt-[70px] w-full h-[100vh] items-center gap-5 ${openMobileMenu ? 'absolute top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md transition-all duration-300 ease-in-out' : 'hidden'}`}>
                    
                    <LinksNavBar 
                        menuItems={dataHeader.map(({ name, link }) => ({ text: name, href: link }))}
                        onLinkClick={() => setOpenMobileMenu(false)}
                    />
                </nav>
                
                
            </div>
        </header>
    )
}