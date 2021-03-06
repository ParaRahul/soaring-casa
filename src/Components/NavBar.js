import React from 'react'
import {NavLink} from 'react-router-dom'


const NavBar = ()=> {
    return (
        <React.Fragment>
            <nav className="grey darken-4" style={{position:"sticky"}}>
                <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo">Soaring Casa Logo</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/soaring">Soaring</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/contest">Contests</NavLink></li>
                    <li><NavLink to="/cardss">CLUB</NavLink></li>
                    <li><NavLink to="/cards">Event Cards</NavLink></li>
                    <li><NavLink to="/slider">Slider</NavLink></li>
                    <li><NavLink to="/theme">Theme</NavLink></li>
                    <li><NavLink to="/lpage2">LPage2</NavLink></li>
                    <li><NavLink to="/lpage3">LPage3</NavLink></li>
                    <li><NavLink to="/aero">LPage4</NavLink></li>
                    <li><NavLink to="/landing">LandingPage</NavLink></li>
                    <li><NavLink to="/circle">CircleAnimation</NavLink></li>
                </ul>
                </div>
            </nav>

           

        </React.Fragment>
        
        
    )
}


export default NavBar