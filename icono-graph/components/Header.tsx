'use client';

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from "@/components/Button";
import Nav from "@/components/Nav";

const menu = {

    open: {

        width: "480px",

        height: "650px",

        top: "-25px",

        right: "-25px",

        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}

    },

    closed: {

        width: "100px",

        height: "40px",

        top: "0px",

        right: "0px",

        transition: { duration: 0.65, delay: 0.30, type: "tween", ease: [0.76, 0, 0.24, 1]}

    }

}

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    return (

        <div className="fixed right-14 top-10 z-20 transition-all">
            <motion.div 

                className="w-[480px] h-[650px] bg-emerald-400 rounded-3xl relative"

                variants={menu}

                animate={isActive ? "open" : "closed"}

                initial="closed"

            >
            <AnimatePresence>
                {isActive && <Nav />}
            </AnimatePresence>
            </motion.div>

            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>

        </div>

    )
}