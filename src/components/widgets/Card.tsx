import { Home, MountainSnow } from 'lucide-react'

const cards = [
  { title: 'Propiedades', icon: Home },
  { title: 'Terrenos', icon: MountainSnow },
]

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center gap-6 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full max-w-[200px] p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-gray-100/20 hover:bg-[#01a8b1] hover:text-white cursor-pointer"
        >
          <div className="flex flex-col items-center text-center">
            <card.icon className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

