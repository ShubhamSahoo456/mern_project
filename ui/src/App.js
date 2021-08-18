import react, { createContext, useReducer } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Error from './components/Error'
import Logout from './components/Logout';
import { Route , Switch} from 'react-router';
import './App.css';
import { reducer , initialstate } from './reducer/rootreducer';

export const UserContext = createContext();


const App = ()=>{
  const [state,dispatch] = useReducer(reducer,initialstate);
  
return(
  <>
  <UserContext.Provider value={{state,dispatch}}>
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/signin" component={Signin}/>
    <Route exact path="/logout" component={Logout}/>
    <Route component={Error}/>
  </Switch>
  </UserContext.Provider>
 
  </>
);


}

export default App;