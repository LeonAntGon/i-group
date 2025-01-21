//import { FloatedSearch } from "../FloatedSearch";
import { Header } from '@/components/Header'
import Card from "@/components/widgets/Card"
import './arrow.css';
export function Banner() {
    return (
            <section className="w-full h-[100vh] md:h-[100vh] bg-banner bg-no-repeat bg-cover bg-center">
            <div className="relative md:pt-0">
                            
            <Header />
            
            <div className="h-[80vh] md:h-[90vh] flex flex-col items-center md:justify-center flex-wrap">
                <div className="max-w-3xl text-center text-white overflow-hidden">
                    <h1 className="pt-2 md:p-0 text-2xl md:text-5xl font-semibold">CONECTÁ CON LA PATAGONIA</h1>
                    
                    
                    
                    <h2 className="mt-2 text-xl md:my-6 font-bold text-[#91d9eb] mb-[2vh] md:mb-[4vh]">Desarrollos inmobiliarios</h2>
                    <Card/>
                </div>
            </div>
            <div className="flex justify-center mt-[-15vh] md:mt-[-20vh]">
                <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="60"
                    fill="none"
                    >
                    <rect
                        width="14"
                        height="16"
                        x="5.523"
                        y="5"
                        stroke="#01a8b1"
                        strokeWidth="1.5"
                        rx="4"
                    />
                    <path
                        className="animated-path"
                        fill="#ffffff"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeWidth=".4"
                        d="M15.369 11.258a.429.429 0 10-.549-.659l-2.297 1.915-2.297-1.915a.429.429 0 00-.549.659l2.566 2.138a.425.425 0 00.467.061.425.425 0 00.093-.06l2.566-2.14z"
                    />
                </svg>
            </div>
                {/*<FloatedSearch/>*/}
            </div>
            </section>
    )
}
