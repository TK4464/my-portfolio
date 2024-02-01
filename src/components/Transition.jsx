import React from 'react'
import { easeInOut, motion } from "framer-motion"

const Transition = () => {
    return (
        <div>
            <motion.div className='fixed left-0 right-0 bottom-full w-screen h-screen z-[100] bg-navy'
                key="navy"
                initial={{ y: "100%", height: "100%" }}
                animate={{ y: "0%", height: "0%" }}
                transition={{ duration: 0.7, ease: easeInOut }}
                exit={{ y: ["0%", "100%"], height: ["0%", "100%"] }}
                onAnimationStart={() => document.body.classList.add("overflow-hidden")}
                onAnimationComplete={() => document.body.classList.remove("overflow-hidden")}
            />
            <motion.div className='fixed left-0 right-0 bottom-full w-screen h-screen z-[90] bg-white-gray'
                key="white-gray"
                initial={{ y: "100%", height: "100%" }}
                animate={{ y: "0%", height: "0%" }}
                transition={{ duration: 0.7, delay: 0.2, ease: easeInOut }}
                onAnimationStart={() => document.body.classList.add("overflow-hidden")}
                onAnimationComplete={() => document.body.classList.remove("overflow-hidden")}
            />
            <motion.div className='fixed left-0 right-0 bottom-full w-screen h-screen z-[80] bg-dark-black'
                key="dark-black"
                initial={{ y: "100%", height: "100%" }}
                animate={{ y: "0%", height: "0%" }}
                transition={{ duration: 0.7, delay: 0.4, ease: easeInOut }}
                onAnimationStart={() => document.body.classList.add("overflow-hidden")}
                onAnimationComplete={() => document.body.classList.remove("overflow-hidden")}
            />
        </div>
    )
}

export default Transition