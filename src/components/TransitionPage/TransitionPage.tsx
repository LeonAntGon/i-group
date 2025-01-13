
import { animate, AnimatePresence, motion} from "framer-motion"

export function TransitionPage() {
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#91d9eb]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut"}}
                >
                </motion.div>
                <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#91d9eb]/70 opacity-50"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut"}}
                >

                </motion.div>
            </div>
        </AnimatePresence>
    )
}

const transitionVariants = {
    initial:{
        x:"100%",
        width:"100%",
    },
    animate:{
        x:"0%",
        width:"0%"
    },
    exit: {
        x: ["0%","100%"],
        width:["0%","100%"]
    }

}