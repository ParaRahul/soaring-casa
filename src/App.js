import React from 'react'
import Home from './Components/Home'
import Events from './Components/Events'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Deck from './Components/DeskCards'
import Soaring from './Components/Soaring'
import Club from './Components/Events/Club'
import Contest from './Components/Contest'
import Slider from './Components/Slider'
import LandingPage from './Components/LandingPage'
import ThemeChange from './Components/ThemeChange'
import LPage2 from './Components/LPage2'
import LPage3 from './Components/LPage3'
import LPage4 from './Components/LPage4'
import Flying from './Components/Flying'
import CircleAnimation from './Components/CircleAnimation'

const App = () => {
  return (
    <BrowserRouter>
      <div id="club-body">
      <NavBar /> 
        <div className="App">
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/events' component={Events} />
          <Route path='/cardss' component={Deck} />
          <Route path='/cards' component={Club} />
          <Route path='/contest' component={Contest} />
          <Route path='/slider' component={Slider} />
          <Route path='/landing' component={LandingPage} />
          <Route path='/theme' component={ThemeChange} />
          <Route path='/lpage2' component={LPage2} />
          <Route path='/lpage3' component={LPage3} />
          <Route path='/circle' component={CircleAnimation} />
          <Route path='/flying' component={Flying} />
          <Route path='/aero' component={LPage4} />
          <Route path='/soaring'><Soaring /></Route>
        
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App



