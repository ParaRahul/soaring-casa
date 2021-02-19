import React,{useState} from 'react'
import './css/ThemeChange.css'
import logo from '../images/logo.png'
import p1 from '../images/pepsi001.png'
import p2 from '../images/pepsi002.png'
import p3 from '../images/pepsi003.png'
import fac from '../images/facebook.png'
import twi from '../images/twitter.png'
import ins from '../images/instagram.png'

export default function ThemeChange() {

    const [tin, setTin] = useState(p1)
    const [themeColor,setThemeColor] = useState('#0062be')

    function imgSlider(anything,color){
        setTin(anything)
        setThemeColor(color)
    }
    
    return (
        <div className="theme">
            <section className='sec' style={{background:themeColor}}>
            <header className="header">
                <a href="#"><img src={logo} alt="logo" className='logo' /></a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
            </header>

            <div className="content">
            <div className="textBox">
                <h2>Thats What<br /><span>I Like</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adip
                isicing elit. Labore in quibusdam repellendus
                 perspiciatis alias dignissimos ani
                mi suscipit aliquam nisi ipsum?</p>
                <a href="#">View All Products</a>
            </div>
            <div className="imgBox">
                <img src={tin} className="pepsi" />
            </div>
            </div>

            <ul className="thumb">
                <li><img src={p1} onClick={(e)=> imgSlider(p1,'#0062be')} /></li>
                <li><img src={p2} onClick={(e)=>imgSlider(p2,'#e60c2c')} /></li>
                <li><img src={p3} onClick={(e)=>imgSlider(p3,'#1e1e1e') } /></li>
            </ul>
                       

            <ul className="sci">
            <li><a href="#"><img src={fac} /></a></li>
            <li><a href="#"><img src={twi} /></a></li>
            <li><a href="#"><img src={ins} /></a></li>
            </ul>
            </section>
        </div>
    )
}
