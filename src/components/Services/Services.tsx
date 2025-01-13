"use client"
import { Transition } from "../Transition"
import { Slider } from "./Slider"

export function Services() {
    return (
        <Transition className="grid px-4 py-8 md:py-46 md:grid-cols-2 md:gap-28">
            <div className="max-w-xl mb-7">
            <h4 className="text-secondary">Inversión</h4>
                <h2 className="my-4 text-2xl md:text-4xl font-semibold">¿Buscas invertir en el futuro de tu familia?</h2>
                <p className="mb-10 mt-7">¡Terrenos y parcelas soñadas para hacer tus <span className="text-[#01a8b1] font-semibold">sueños</span> realidad!</p>
            </div>
            <div className="flex items-center justify-center">
                <Slider/>
            </div>
        </Transition>
    )
}
