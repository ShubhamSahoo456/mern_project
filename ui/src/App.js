import react from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Error from './components/Error'
import { Route , Switch} from 'react-router';
import './App.css'

const App = ()=>{

  
return(
  <>
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/signin" component={Signin}/>
    <Route component={Error}/>
  </Switch>
  </>
);


}

export default App;