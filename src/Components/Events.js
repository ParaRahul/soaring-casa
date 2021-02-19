import React, {useState,useEffect} from 'react'
import './css/Events.css'
import {motion,useMotionValue,useTransform } from 'framer-motion'

import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'

import photo from '../images/1.jpg'

import $ from 'jquery'
import M from 'materialize-css'





const Pull=({icon}) =>{
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
    const bind = useGesture(({ down, delta, velocity }) => {
      velocity = clamp(velocity, 1, 8)
      set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
    })
    return <animated.div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }} >{icon}</animated.div>
  }


const Events=()=> {
   

    const arr=[<i className="large material-icons">directions_bike</i>,<i className="large material-icons">flight_takeoff</i>, <i className="large material-icons">local_shipping</i>]

                const containerVariable = {
                    hidden:{
                        opacity:0,
                        x:'-200vw'
                    },
                    visible:{
                        opacity:1,
                        x:700,
                        y:50 //50px
                    },
                    transition:{
                        delay:1.5, 
                        duration: 2, 
                        type:'spring', 
                        stiffness:120 
                    }
                }

    const x = useMotionValue(0)
    const xRange = [-200, -100, 100, 200]
    const opacityRange = [0, 1, 1, 0]
    const opacity = useTransform(x, xRange, opacityRange)
  
   
 
    return (
        <React.Fragment>


    {/* 1 */}
            <motion.div className="motions2" drag
            dragConstraints={{ left: 0, right: 300,top:-10,bottom:400 }}
            dragMomentum={true}
            
            dragElastic={0.2}> {/* not required ifyou write insidethe visible property */}
                {/*  <Pull icon={arr[0]} /> */}
                <i className="large material-icons">directions_bike</i>
            </motion.div>


    {/* 2 */}
            <motion.div className="motions2" drag
            dragConstraints={{ left: 0, right: 300,top:-100,bottom:-10 }}
            dragMomentum={true}
            dragElastic={0.2}> {/* not required ifyou write insidethe visible property */}
                {/*  <Pull icon={arr[0]} /> */}
                <i className="large material-icons">directions_bike</i>
            </motion.div>

    {/* 3 */}

            <motion.div
            animate={{ x: 200 }}
            style={{ opacity, x }}
            ><h1>hello</h1></motion.div>









                {/* another types start */}




            <div className="roots">
                <h1>Events</h1>
        
                <Pull icon={arr[0]} />
                <Pull icon={arr[1]} />
                <Pull icon={arr[2]} />
            {/*  <div></div> */}  {/* empty div circles will appear */}
            </div>

            <motion.div className="motions" whileHover={{
                scale:1.1, color:'red'}} 
                transition={{type:'spring', stiffness:100,yoyo:'infinity'}}>
                   {/*  <Pull icon={arr[0]} /> */}
                   <i className="large material-icons">directions_bike</i>
                   <i className="large material-icons">directions_bike</i>
            </motion.div>

    

        </React.Fragment>
        

    
    )
}

export default Events





    // const items = [{id:'1',subtitle:'abc',title:'hello1'},{id:'2',subtitle:'efg',title:'hello2'}, {id:'3',subtitle:'ijk',title:'hello3'}]
        // const [selectedId, setSelectedId] = useState(null)
        // const [itemn, setItems] = useState(itemss)


           /*  <motion.div style={{backgroundColor: 'blue', color:'black', textAlign:'center', margin:'50px 200px 50px 200px'}} 
                variants={containerVariable}
                initial='hidden'
                animate='visible'
                transition='transition' //not required ifyou write insidethe visible property
                >
                
                <motion.h1 whileHover={{
                    scale:1.3, originX:0, color:'red'}} 
                    transition={{type:'spring', stiffness:300}}
                >event</motion.h1>
                
                <motion.button class='btn' whileHover={{
                    scale: 1.1,
                    textShadow: '0px 0px 8px rgb(255,255,255)',
                    boxShadow: '0px 0px 8px rgb(255,255,255)',//give a white glow upon hover
                }} >button</motion.button>
            </motion.div> */

























// import { useSprings, animated, interpolate } from 'react-spring'
// import { useGesture } from 'react-use-gesture'






// const cards = [
//     'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
//   ]
  
//   // These two are just helpers, they curate spring data, values that are later being interpolated into css
//   const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
//   const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
//   // This is being used down there in the view, it interpolates rotation and scale into a css transform
//   const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`
  
//   function Deck() {
//     const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
//     const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
//     // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
//     const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
//       const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
//       const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
//       if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//       set(i => {
//         if (index !== i) return // We're only interested in changing spring-data for the current spring
//         const isGone = gone.has(index)
//         const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
//         const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
//         const scale = down ? 1.1 : 1 // Active cards lift up a bit
//         return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
//       })
//       if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
//     })
//     // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
//     return props.map(({ x, y, rot, scale }, i) => (
//       <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
//         {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
//         <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
//       </animated.div>
//     ))
//   }