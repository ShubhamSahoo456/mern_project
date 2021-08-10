import react from 'react';
import {NavLink} from 'react-router-dom';
import Img from '../images/sign_in.svg';

const Signin = ()=>{

    return(
        <>
             <div className="container mt-5">
            <div className="d-flex justify-content-center align-items-center sign_div">
            <div className="w-50 img_div mx-5">
                <img src={Img} alt="" />
                <NavLink exact to="/signup">Create an account</NavLink>
            </div>
            <form className="w-50 mx-4 my-4">
            <h4  className="text-center mb-3 text_">Sign In</h4>
                
                <div className="form-group input_div">
                    <label for="email"><i className="fas fa-envelope mt-3"></i></label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
               
                <div className="form-group input_div">
                    <label for="password"><i className="fas fa-lock mt-3"></i></label>
                    <input type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Your Password" />
                </div>
               
                <button type="submit" className="btn btn-primary input_div">Submit</button>
                </form>
               
            </div>
        </div>
        </>
    )
}

export default Signin;