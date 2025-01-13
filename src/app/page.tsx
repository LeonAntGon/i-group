"use client"
import { About } from '@/components/About'
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { Tasar } from '@/components/Tasar'
import { Properties } from '@/components/Properties'
import { Services } from '@/components/Services'
import { TransitionPage } from '@/components/TransitionPage'
import dynamic from "next/dynamic"
import WhatsappLive from '../components/widgets/WhatsappLive'

const LocationMap = dynamic(
  () => import('../components/Location').then(module => module.Location),
  {
    ssr: false
  }
)

export default function Home() {

  return (
    <>
      <TransitionPage />
      
      <main>
        <Banner />
        <Properties />
        <div className="max-w-6xl mx-auto">
          <Services />
          <LocationMap />
          <About />
        </div>
        <WhatsappLive encodedMessage="Hola! Vengo desde su sitio web, quisiera hacerles una consulta!"/>
        <Tasar />
        <Footer />
        
      </main>
      
    </>
  )
}
