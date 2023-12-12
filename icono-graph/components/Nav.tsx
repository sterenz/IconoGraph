import { motion } from 'framer-motion';
import { HEADER_LINKS } from '@/app/lib/data'

interface HeaderLink {
    name: string;
    href: string;
}

interface HeaderProps {
    links: HeaderLink[];
}

export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65, 
            delay: 0.5 + (i * 0.1), 
            ease: [.215,.61,.355,1],
            opacity: { duration: 0.35}
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function Nav() {
  return (
    <div className="flex flex-col justify-between h-full px-10 pt-24 pb-12 box-border">
       <div className="flex gap-2 flex-col">
        {
            HEADER_LINKS.map( (link, i) => {
                const { name, href } = link;
                return (
                    <div key={`b_${i}`} className="">
                        <motion.div
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                            <a href={href} className="text-slate-950 text-4xl animate-fade-in-down">
                                {name}
                            </a>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}