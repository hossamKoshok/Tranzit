import Nav from './assets/components/Nav'
import Scenery from './assets/components/Scenery'
import ScenerySignup from './assets/components/ScenerySignup'
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom'
import MainNav from './assets/components/MainNav'
import LoginBar from './assets/components/LoginBar'
import Home from './assets/components/Home'
import Home_Page from './assets/Pages/Home_Page'
import Booking_Page from './assets/Pages/Booking_Page'
import FAQ from './assets/Pages/FAQ'
import About from './assets/Pages/About'
import Footer from './assets/components/Footer'
import Tourism from './assets/Pages/Tourism'
function App() {

  return (
     

    
      <div>
      <BrowserRouter>  
        <div>
        <MainNav style={{zIndex: 5}}/>
        <div>
        <Switch>
        <Route exact path="/"> <Home_Page/></Route>
        <Route exact path="/login"> <Scenery/></Route>
        <Route exact path="/signup" > <ScenerySignup/></Route>
        <Route exact path="/Booking" > <Booking_Page/></Route>
        <Route exact path="/FAQ"><FAQ/></Route>
        <Route exact path="/About"><About/></Route>
        <Route exact path="/Tourism"><Tourism/></Route>
        </Switch> 
        </div>
        <Footer style={{zIndex: 10}}/>
        </div>
        
        </BrowserRouter>
      </div>
     
    
  )
}


export default App
