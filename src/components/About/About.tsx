import Image from "next/image";
import { Transition } from "../Transition";

export function About() {
    return (
        <Transition className="grid px-4 py-3 md:py-44 md:px-36 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center max-w-xl mb-7" id="about">
                <h4 className="text-secondary">Sobre nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Más de 50 viviendas para comprar, vender y alquilar en la <span className="text-[#01a8b1] font-semibold">Patagonia</span></h2>
                <p className="mb-10 mt-7"><span className="font-semibold">Igroup Patagonia</span> te ofrece soluciones inmobiliarias para que puedas <span className="font.semibold text-[#01a8b1]">vender/alquilar/tasar</span> tu propiedad más rapidamente</p>
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-[#01a8b1] hover:bg-black">Cargar más</button>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/assets/oficina.PNG" alt="About" width={320} height={500} 
                className="w-auto h-auto rounded-md"/>
            </div>
        </Transition>
    )
}
