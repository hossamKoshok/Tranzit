
import Nav from './assets/components/Nav'
import Scenery from './assets/components/Scenery'
import ScenerySignup from './assets/components/ScenerySignup'
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom'



function App() {

  return (
  
      <div>
      <BrowserRouter>  
        <div>
        <Nav/>
        <div>
        <Switch>
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
