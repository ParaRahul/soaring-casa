import React,{useState} from 'react'
import '../Components/css/LPage3.css'
import glider from '../images/glider.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'


export default function LPage3() {

    const [active, setActive] = useState('toggle')
    const [banner, setBanner] = useState('banner')
   

    function toggle(e){
        console.log(e.target.value)
        active==='toggle'?setActive('toggle active'):setActive('toggle')
        banner==='banner'?setBanner('banner active'):setBanner('banner')
    }

    


    return (<React.Fragment>
        <section className={banner}>
            <header>
                <a href="#" className="logo">Watch</a>
                <div className={active}  onClick={(e)=>toggle(e)}></div>
            </header>

            <div className="content">
                <div className="contentBx">
                    <h1>Flying is in<br />your Hands</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptas voluptates omnis facilis voluptatem recusandae placeat, sapiente hic ex dignissimos!</p>
                    <a href="#">Buy Now</a>
                </div>
                <div className="imgBx">
                    <img src={glider} />
                </div>
            </div>
            <ul className="scii">
                <li><a href="#"><img src={facebook} /></a></li>
                <li><a href="#"><img src={instagram} /></a></li>
                <li><a href="#"><img src={twitter} /></a></li>
            </ul>

            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Porducts</a></li>
                <li><a href="#">Club</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </section>
        <section className="another"></section>
        </React.Fragment>
    )
}
