import React,{useEffect,useRef} from 'react'
import '../Components/css/LPage2.css'
import bg from '../images/bg.jpg'
import cloud1 from '../images/cloud1.png'
import cloud2 from '../images/cloud2.png'
import moon from '../images/moon.png'
import tree from '../images/tree.png'
import santa from '../images/santa.png'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// gsap.core.globals('ScrollTrigger', ScrollTrigger);
// gsap.registerPlugin(scrollTrigger);

const LPage2=()=>{

   let moon1 = useRef('#moon')

    useEffect(() => {
        gsap.to('#moon',{
            scrollTrigger:{
                scrub:1.5
            },
            scale:1.5

        })
        gsap.to('#bg',{
            scrollTrigger:{
                scrub:1
            },
            scale:1.1
        })
        gsap.to('#santa',{
            scrollTrigger:{
                scrub:1
            },
            scale:1.1,
            y:-500,
            x:2200
        })
        gsap.to('#tree',{
            scrollTrigger:{
                scrub:1
            },
            scale:1.1,
            x:-500
        })
        gsap.to('#cloud1',{
            scrollTrigger:{
                scrub:1
            },
            scale:1.1,
            x:-150,
            y:-100
        })
        gsap.to('#cloud2',{
            scrollTrigger:{
                scrub:1
            },
            scale:1.1,
            x:150,
            y:-200
        })
        gsap.to('#text',{
            scrollTrigger:{
                scrub:1
            },
            scale:1.5,
            y:300
        })


    }, [])    



    return (
        <div className="lpage2">
             <section className="sectionn">
                 <img src={bg} id="bg" />
                 <img src={moon} ref={moon1}  id="moon" />
                 <img src={cloud1} id="cloud1" />
                 <img src={cloud2} id="cloud2" />
                 <img src={santa} id="santa" />
                 <div id="tree" 
                 style={{background:`url(${tree})`}}
                 ></div>
                 <div className="title">
                 <h2 id="text">Soaring Casa<br /><button className="btn btn-primary">explore</button></h2>
                 </div>
                 
             </section>
        </div>
     )  
}



export default LPage2