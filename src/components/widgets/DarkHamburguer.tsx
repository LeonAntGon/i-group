'use client'
import { motion } from 'framer-motion'

interface HamburguerProps {
  crossed: boolean;
  setCrossedState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DarkHamburguer({ crossed, setCrossedState }: HamburguerProps) {
  return (
    <button
      aria-expanded={crossed}
      onClick={() => setCrossedState((e) => !e)}
      className={
        'flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full z-20'
      }
    >
      <motion.div
        style={{
          width: '20px',
          borderTop: '2px solid',
          borderColor: crossed ? 'white' : 'black',
          transformOrigin: 'center'
        }}
        initial={{ translateY: '-3px' }}
        animate={
          crossed ? { rotate: '45deg', translateY: '1px' } : { translateY: '-3px', rotate: '0deg' }
        }
        transition={{ bounce: 0, duration: 0.1 }}
      />
      <motion.div
        transition={{ bounce: 0, duration: 0.1 }}
        style={{
          width: '20px',
          borderTop: '2px solid',
          borderColor: crossed ? 'white' : 'black',
          transformOrigin: 'center'
        }}
        initial={{ translateY: '3px' }}
        animate={
          crossed
            ? { rotate: '-45deg', translateY: '-1px' }
            : { translateY: '3px', rotate: '0deg', scaleX: 1 }
        }
      />
    </button>
  )
}