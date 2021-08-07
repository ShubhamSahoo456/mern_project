import react from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';


const Navbar = ()=>{

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item pr-5">
        <NavLink exact to="/" activeClassName="selected" className="link"  activeStyle={{
                                                                                             borderBottom:"0.2rem solid black",
                                                                                            color: "black",
                                                                                        }}>
        Home</NavLink>
      </li>
      <li className="nav-item pr-5" >
        <NavLink exact to="/about" activeClassName="selected" className="link" activeStyle={{
                                                                                            borderBottom:"0.2rem solid black",
                                                                                            color: "black",
                                                                                        }}>
        About</NavLink>
      </li>
      <li className="nav-item pr-5">
        <NavLink to="/contact" activeClassName="selected" className="link" activeStyle={{
                                                                                            borderBottom:"0.2rem solid black",
                                                                                            color: "black",
                                                                                        }}>
        Contact</NavLink>
      </li>
      <li className="nav-item pr-5">
        <NavLink to="/signup" activeClassName="selected" className="link" activeStyle={{
                                                                                            borderBottom:"0.2rem solid black",
                                                                                            color: "black",
                                                                                        }}>Signup</NavLink>
      </li>
      <li className="nav-item pr-5">
        <NavLink to="/signin" activeClassName="selected" className="link" activeStyle={{
                                                                                            borderBottom:"0.2rem solid black",
                                                                                            color: "black",
                                                                                        }}>Signin</NavLink>
      </li>
      
    </ul>
  
  </div>
</nav>
        </>
    )
}

export default Navbar;