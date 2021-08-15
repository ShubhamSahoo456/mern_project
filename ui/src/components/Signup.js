import { useState } from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import Image from '../images/sign_up.svg';

const Signup = ()=>{

    const history = useHistory();
    const [user , setUser] = useState({
        name:"",email:"",mobile:"",work:"",password:"",cpassword:""
    });

    let name,value;
    const controlEvents =(event)=>{
        name=event.target.name;
        value=event.target.value;

        setUser({...user,[name]:value});
    }

    const sendData = async(event)=>{

        event.preventDefault();
        const{name,email,mobile,work,password,cpassword} = user;
        try{
            const data = await fetch('/api/register',{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({name:name,
                                    email:email,
                                    phone:mobile,
                                    work:work,
                                    password:password,
                                    cpassword:cpassword})
                });
    
            const response = await data.json();
            
            history.push('/signin');
            window.alert(response.message);
            
        }catch(error){
            console.log(error);
        }
    }


    return(
        <>
        <div className="container mt-5">
            <div className="d-flex justify-content-center align-items-center main_div">
            <form className="w-50 mx-4 my-4" method="POST">
            <h4  className="text-center mb-3 text_">Sign Up</h4>
                <div className="form-group input_div">
                    <label for="name"><i class="fas fa-user-alt mt-3"></i></label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} aria-describedby="emailHelp" placeholder="Your name" onChange={controlEvents} autoComplete="off"/>
                </div>
                <div className="form-group input_div">
                    <label for="email"><i className="fas fa-envelope mt-3"></i></label>
                    <input type="email" className="form-control" id="email" name="email" value={user.email} placeholder="Your Email" onChange={controlEvents} autoComplete="off"/>
                </div>
                <div className="form-group input_div">
                    <label for="mobile"><i className="fas fa-mobile-alt mt-3"></i></label>
                    <input type="text" className="form-control" id="mobile" name="mobile" value={user.mobile} aria-describedby="emailHelp" placeholder="Your Mobile" onChange={controlEvents} autoComplete="off"/>
                </div>
                <div className="form-group input_div">
                    <label for="profession"><i className="fas fa-briefcase mt-3"></i></label>
                    <input type="text" className="form-control" id="profession" name="work" value={user.work} placeholder="your Profession" onChange={controlEvents} autoComplete="off"/>
                </div>
                <div className="form-group input_div">
                    <label for="password"><i className="fas fa-lock mt-3"></i></label>
                    <input type="password" className="form-control" id="password" name="password" value={user.password} aria-describedby="emailHelp" placeholder="Your Password" onChange={controlEvents} autoComplete="off"/>
                </div>
                <div className="form-group input_div">
                    <label for="cpassword"><i className="fas fa-lock mt-3"></i></label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" value={user.cpassword} placeholder="Confirm Password" onChange={controlEvents} autoComplete="off"/>
                </div>
               
                <button type="submit" className="btn btn-primary input_div" onClick={sendData}>Submit</button>
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