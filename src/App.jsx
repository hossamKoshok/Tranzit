import Nav from './assets/components/Nav'
import Scenery from './assets/components/Scenery'
import ScenerySignup from './assets/components/ScenerySignup'
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom'
import MainNav from './assets/components/MainNav'
import LoginBar from './assets/components/LoginBar'
import Home from './assets/components/Home'
import Home_Page from './assets/Pages/Home_Page'
import FAQ from './assets/Pages/FAQ'
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
        <Route exact path="/FAQ"> <FAQ/></Route>
        </Switch> 
        </div>
        </div>
        </BrowserRouter>
      </div>
     
    
  )
}


export default App
