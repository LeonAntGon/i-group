import { useState } from 'react'
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr'

export function SearchLocation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative mb-2 md:mb-0 items-center flex gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}>
            <GrLocation/>

            <div>
                <p>Localización</p>
                <p className='text-xs'>Selecciona tu localización</p>
            </div>
            {isOpen ? (
                <GrFormUp/>
            ): (
                <GrFormDown/>
            )}

            {isOpen && (
                <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
                    <p>Tafi Viejo</p>
                    <p>San Miguel de Tucuman</p>
                    <p>El Cadillal</p>
                    <p>Raco</p>
                </div>
            )}
        </div>
    )
}
