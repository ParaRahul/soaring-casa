import React from 'react'
import '../Components/css/LandingPage.css'
import video from '../video/smoke.mp4'

export default function LandingPage() {
    return (
            <section className="landing-section">
                <video src={video} autoPlay muted></video>
                <h1 className="h1tag">
                    <span>S</span>
                    <span>O</span>
                    <span>A</span>
                    <span>R</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                   
                    <span>C</span>
                    <span>A</span>
                    <span>S</span>
                    <span>A</span>
                </h1>
            </section>
    )
}
