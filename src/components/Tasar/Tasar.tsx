import { Transition } from "../Transition";
import Link from "next/link"

export function Tasar() {
    return (
        <Transition
            className="grid items-center px-4 py-8 md:py-44 md:px-36 md:grid-cols-2 bg-gradient-to-b from-[#29b6bb]"
        >
            <div>
            <h4 className="max-w-lg text-2xl font-semibold text-gray-900 mb-2">
                ¿Te interesa conocer el valor actual de tu propiedad?
            </h4>
            <p className="text-md font-semibold text-gray-700 mb-2">Si estás considerando vender tu inmueble, es fundamental contar con el apoyo de un profesional que analice todos los factores clave que determinan su precio en el mercado.</p>
            </div>
            <div className="mx-auto mt-5 md:mx-auto">
                <Link href="/contacto">
                <button className="flex items-center justify-center py-5 text-white transition-all duration-100 bg-black rounded-lg px-7 w-fit hover:bg-black/70">
                <svg width="28px" height="28px" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M2 21.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V9.4C22 9.73137 21.7314 10 21.4 10H10.6C10.2686 10 10 10.2686 10 10.6V21.4C10 21.7314 9.73137 22 9.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z" stroke="#ffffff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 10V7" stroke="#ffffff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 10V7" stroke="#ffffff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 16H7" stroke="#ffffff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 10H7" stroke="#ffffff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <span className="ml-3">Quiero tasar mi propiedad</span>
                    
                </button>
                </Link>
            </div>
        </Transition>
    );
}