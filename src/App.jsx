
import Nav from './assets/components/Nav'
import Scenery from './assets/components/Scenery'
import ScenerySignup from './assets/components/ScenerySignup'
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom'
import MainNav from './assets/components/MainNav'
import LoginBar from './assets/components/LoginBar'
import Home from './assets/components/Home'
function App() {

  return (
     

    
      <div>
      <BrowserRouter>  
        <div>
        <MainNav/>
        <div>
        <Switch>
        <Route exact path="/"> <Home/></Route>
        <Route exact path="/login"> <Scenery/></Route>
        <Route exact path="/signup" > <ScenerySignup/></Route>
        </Switch> 
        </div>
        </div>
        </BrowserRouter>
      </div>
     
    
  )
}


export default App
