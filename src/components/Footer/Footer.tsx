import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP } from 'react-icons/lia'
import { dataFooter } from './Footer.data'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className='px-4 py-8 bg-black/90 md:py-40 md:px-36'>
            <div className='grid gap-8 grid-cols-2 md:grid-cols-[1fr,1fr,1fr,1fr] text-white'>
                {dataFooter.map(({id, links}) => {
                    return (
                        <div key={id}>
                            {links.map(({id, name, link}) => {
                                return (
                                    <Link key={id} href={link} className='block mb-5'>{name}</Link>
                                )
                            })}
                        </div>
                    )
                })}
                <div className="text-center">
                <svg className="mx-auto" width="28px" height="28px" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M9 19L3.78974 20.7368C3.40122 20.8663 3 20.5771 3 20.1675L3 5.43246C3 5.1742 3.16526 4.94491 3.41026 4.86325L9 3M9 19L15 21M9 19L9 3M15 21L20.5897 19.1368C20.8347 19.0551 21 18.8258 21 18.5675L21 3.83246C21 3.42292 20.5988 3.13374 20.2103 3.26325L15 5M15 21L15 5M15 5L9 3" stroke="#ffffff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p>Onelli 2747, R8430 El Bolsón</p>
                <p>Río Negro, Argentina</p>
                </div>
                <div className='md:text-right'>
                    <h4 className='mb-6 text-xl font-semibold'>Redes sociales</h4>
                    
                    <div className='flex gap-4 mt-5 md:justify-end'>
                        <a href='https://www.instagram.com/igroup_patagonia/'>
                            <LiaInstagram className='text-3xl cursor-pointer'/>
                        </a>
                        <a href="https://www.facebook.com/search/top?q=igroup%20patagonia">
                            <svg width="28px" height="28px" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
                                <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="#ffffff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}
