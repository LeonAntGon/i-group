import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative mb-2 md:mb-0 items-center flex gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}>
            <GrTag/>

            <div>
                <p>Rango de precio</p>
                <p className='text-xs'>Selecciona tu rango de precio</p>
            </div>
            {isOpen ? (
                <GrFormUp/>
            ): (
                <GrFormDown/>
            )}

            {isOpen && (
                <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
                    <p>500usd - 2.000usd</p>
                    <p>2.500usd - 10.000usd</p>
                    <p>+10.000</p>
                </div>
            )}
        </div>
    )
}
