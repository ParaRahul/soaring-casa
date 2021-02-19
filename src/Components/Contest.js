import React from 'react'
import '../Components/css/Contest.css'
import {motion} from 'framer-motion'

export default function Contest() {

    const contestVarients={
        hidden:{
            x:-300,
            opacity:0
        },
        visible:{
            x:100,
            opacity:1,
            rotate: 360,
            transition:{type:"spring",duration:2,when:"beforeChildren"}
        }
    }


    const childVariants={
        hidden:{opacity:0},
        visible:{opacity:1}
    }


    const buttonVariants={
        visible:{
            x:[0,-50,50,-50,50,0]
        },

        hover:{
            scale:1.1,
            textShadow:'0px 0px 8px rgb(255,255,255',
            boxShadow:'0px 0px 8px rgb(255,255,255',
            transition:{
                duration:0.3,
                yoyo:10
            }
        }
    }


    const contestVarients2={
        hidden:{
            x:-300,
            opacity:0
        },
        visible:{
            x:100,
            opacity:1,
            transition:{
                type:"spring", 
                mass:0.4,
                damping:4,duration:2,
                when:"beforeChildren",
                staggerChildren:0.4
            }
        }
    }


    const childVariants2={
        hidden:{opacity:0},
        visible:{opacity:1,
        transition:{delay:2}}
    }


    return (
        <div className="container">
            <motion.div className="contest"  
                    initial="hidden"
                    animate="visible"
                    variants={contestVarients}
            >
                <h1>CASA</h1>
                <motion.p variants={childVariants}>Lorem ipsum dolor sit amet.</motion.p>
            </motion.div>
            <motion.button className="btn btn-primary"
                variants={buttonVariants} animate="visible"
                whileHover="hover"
            >button beats</motion.button>


            <motion.div className="contest"  
            initial="hidden"
            animate="visible"
            variants={contestVarients2}>
            <h1>CASA</h1>
            <motion.p variants={childVariants2}>Lorem ipsum dolor sit amet.</motion.p>
            </motion.div>

            
        </div>
    )
}
