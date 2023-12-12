import { motion } from 'framer-motion';

interface ButtonProps {
    isActive: boolean;
    toggleMenu: () => void;
}

interface PerspectiveTextProps {
    label: string;
}

export default function Button({ isActive, toggleMenu }: ButtonProps) {
    return (
        <div className="w-[100px] h-[40px] rounded-full cursor-pointer bg-emerald-400 absolute top-0 right-0 overflow-hidden">
            <motion.div 

                className="relative w-full h-full"

                animate={{top: isActive ? "-100%" : "0%"}}

                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}

            >
                <div className="w-full h-full" onClick={() => {toggleMenu()}}>
                    <PerspectiveText label="Menu"/>
                </div>
                <div className="w-full h-full bg-emerald-700"  onClick={() => {toggleMenu()}}>
                    <PerspectiveText label="Close" />
                </div>
            </motion.div>
        </div>
    )
}

function PerspectiveText({ label }: PerspectiveTextProps) {

    return (    

        <div className="flex flex-col justify-center items-center h-full w-full transition uppercase">

            <p className="group-hover:translate-y-full group-hover:opacity-0 group-hover:-translate-x-full">{label}</p>

            <p className="absolute group-hover:opacity-1">{label}</p>

        </div>

    )

}