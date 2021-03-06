import React,{useEffect,useRef} from 'react'
import '../Components/css/Flying.css'
import photo from '../images/paper.png'
import {TweenMax, TimelineLite,Power1} from 'gsap'
import gsap from 'gsap'
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'
import ScrollMagic from 'scrollmagic'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


gsap.registerPlugin(MotionPathPlugin);

export default function Flying() {

    let imgItem = useRef(null)

   

    useEffect(() => {

        const flightPath={
            curviness: 1.25,
            autoRotate:true,
            path:[
                {x:100, y:-20},
                {x:300,y:10},
                {x:500,y:100},
                {x:750,y:-100},
                {x:350,y:-50},
                {x:600,y:100},
                {x:800,y:0},
                {x:window.innerWidth,y:-250}
            ]
        }
    

        const tween = new TimelineLite()

        tween.add(
            TweenMax.to('.paper-plane', 1, {
                motionPath:flightPath,
                ease:Power1.easeInOut
            
            })
        )

       
       
        
        var controller = new ScrollMagic.Controller()

        const scene = new ScrollMagic.Scene({
            triggerElement:".animate",
            duration:1000,
            triggerHook:0
        })
        .setTween(tween)
        .addIndicators()
        .setPin('.animate')
        .addTo(controller)


    },[])


   
   

    return (
     
        <div className="flying">
            <header><h1 className="h11">header</h1></header>

            <section className="animate">
                <img ref={el => (imgItem= el)} className="paper-plane" src={photo} alt=""/>
            </section>

            <footer><h1 className="h11">footer</h1></footer>
        </div>
 
    )
}



 // console.log(imgItem)
    // useEffect(() => {
    //     // console.log(imgItem)
    //     // imgItem.style.display = 'none'
    //     TweenMax.to(
    //         imgItem, 
    //         1, 
    //         {
    //             opacity:1, 
    //             y:-80,
    //             ease:Power3.easeOut
    //         })

    // }, [])



  



   