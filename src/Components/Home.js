import React,{useEffect,useState} from 'react'
import Video from '../video/video.mp4'
import './css/Home.css'
import Typed from 'typed.js';


const Home = ()=> {


    useEffect(() => {

        var options = {
            strings: ['First sentence.', 'Second sentence.'],
            typeSpeed: 60,
            backSpeed: 60,
            loop:true
          };
           
          var typed = new Typed('.typed', options);

    }, [])
    



    return (
        <React.Fragment>
            <div id="home-component">
                
                <section className="heading">
                {<video autoPlay muted loop><source src={Video} type="video/mp4" /></video> }   
                    <h1>Soaring Casa</h1>
                    <h6>We help you fly high like an eagle <span className="typed"></span></h6>
                </section> 

                <section className="event-second">
                    <h1>events</h1>
                </section>
                <section className="contest-third">
                    <h1>contest</h1>
                </section>
                <section className="club-four">
                   <h1>club</h1>
                </section>

                

            </div>
        </React.Fragment>
       
    )
}


export default Home