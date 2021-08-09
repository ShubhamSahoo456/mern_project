import react from 'react';
import {NavLink} from 'react-router-dom';
import Image from '../images/sign_up.svg';

const Signup = ()=>{

    return(
        <>
        <div className="container mt-5">
            <div className="d-flex justify-content-center align-items-center main_div">
            <form className="w-50 mx-4 my-4">
            <h4  className="text-center mb-3 text_">Sign Up</h4>
                <div className="form-group input_div">
                    <label for="name"><i class="fas fa-user-alt mt-3"></i></label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Your name" />
                </div>
                <div className="form-group input_div">
                    <label for="email"><i class="fas fa-envelope mt-3"></i></label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group input_div">
                    <label for="mobile"><i class="fas fa-mobile-alt mt-3"></i></label>
                    <input type="text" className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Your Mobile" />
                </div>
                <div className="form-group input_div">
                    <label for="profession"><i class="fas fa-briefcase mt-3"></i></label>
                    <input type="text" className="form-control" id="profession" placeholder="your Profession" />
                </div>
                <div className="form-group input_div">
                    <label for="password"><i class="fas fa-lock mt-3"></i></label>
                    <input type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Your Password" />
                </div>
                <div className="form-group input_div">
                    <label for="cpassword"><i class="fas fa-lock mt-3"></i></label>
                    <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" />
                </div>
               
                <button type="submit" className="btn btn-primary input_div">Submit</button>
                </form>
               
            <div className="w-50 img_div mx-5">
                <img src={Image} alt="" />
                <NavLink exact to="/signin">I am already registered</NavLink>
            </div>
            </div>
        </div>
        </>
    );
}

export default Signup;